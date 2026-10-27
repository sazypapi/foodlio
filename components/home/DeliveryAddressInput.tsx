/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Loader2, MapPin, SearchX } from "lucide-react";
import "leaflet/dist/leaflet.css";

// SHAPE OF AN ADDRESS THE COMPONENT HANDS BACK TO THE PARENT
export type DeliveryAddress = {
  id: string;
  label: string;
  lat: number;
  lng: number;
};

type Props = {
  onSelect?: (address: DeliveryAddress) => void;
};

// NAME OF THE ENV VARIABLE HOLDING YOUR MAPBOX PUBLIC TOKEN (CHANGE IF YOURS IS DIFFERENT)
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// SAVES THE CONFIRMED ADDRESS AS A COOKIE SO THE /STORE SERVER COMPONENT CAN READ IT.
// ONLY LABEL, LAT AND LNG ARE SAVED. THE ID IS NOT NEEDED THERE.
function saveLocationCookie(address: DeliveryAddress) {
  // ENCODEURICOMPONENT STOPS COMMAS AND QUOTES IN THE JSON FROM BREAKING THE COOKIE
  const value = encodeURIComponent(
    JSON.stringify({
      label: address.label,
      lat: address.lat,
      lng: address.lng,
    }),
  );
  const thirtyDays = 60 * 60 * 24 * 30;
  // PATH=/ MAKES THE COOKIE AVAILABLE ON EVERY PAGE, NOT JUST THE ONE THAT SET IT
  document.cookie = `location=${value}; path=/; max-age=${thirtyDays}; samesite=lax`;
}

// BUILDS A READABLE LABEL FROM A MAPBOX V6 FEATURE, WITH FALLBACKS FOR RESULTS THAT HAVE NO FULL ADDRESS
function getLabel(feature: any): string {
  const p = feature.properties ?? {};
  return (
    p.full_address ??
    [p.name, p.place_formatted].filter(Boolean).join(", ") ??
    "Unknown location"
  );
}

// SEARCH: TURNS TYPED TEXT INTO A LIST OF SUGGESTIONS USING MAPBOX
// PROXIMITY=IP TELLS MAPBOX TO FAVOUR RESULTS CLOSE TO WHERE THE USER IS CONNECTING FROM
async function fetchSuggestions(query: string): Promise<DeliveryAddress[]> {
  const res = await fetch(
    `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
      query,
    )}&country=ng&limit=5&autocomplete=true&proximity=ip&language=en&access_token=${MAPBOX_TOKEN}`,
  );

  if (!res.ok) throw new Error("MAPBOX SEARCH FAILED");

  const data = await res.json();

  return (data.features ?? []).map((f: any) => ({
    id: f.id ?? f.properties?.mapbox_id,
    label: getLabel(f),
    // MAPBOX GIVES COORDINATES AS [LONGITUDE, LATITUDE], SO LNG COMES FIRST
    lat: f.geometry.coordinates[1],
    lng: f.geometry.coordinates[0],
  }));
}

// REVERSE GEOCODE: TURNS COORDINATES INTO READABLE TEXT USING MAPBOX
async function reverseGeocode(
  lat: number,
  lng: number,
): Promise<DeliveryAddress> {
  const res = await fetch(
    `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lng}&latitude=${lat}&limit=1&language=en&access_token=${MAPBOX_TOKEN}`,
  );

  if (!res.ok) throw new Error("MAPBOX REVERSE LOOKUP FAILED");

  const data = await res.json();
  const feature = data.features?.[0];

  return {
    id: feature?.id ?? `${lat},${lng}`,
    // IF MAPBOX HAS NOTHING FOR THIS SPOT, FALL BACK TO THE RAW COORDINATES SO THE USER STILL GETS A RESULT
    label: feature ? getLabel(feature) : `${lat.toFixed(5)}, ${lng.toFixed(5)}`,
    // KEEP THE USER'S REAL COORDINATES, NOT MAPBOX'S SNAPPED ONES
    lat,
    lng,
  };
}

// SMALL MAP WITH A DRAGGABLE PIN. LAT AND LNG ARE ONLY USED AS THE STARTING POINT.
// THE PARENT REMOUNTS THIS COMPONENT (VIA KEY) WHEN A BRAND NEW ADDRESS IS PICKED.
function PinMap({
  lat,
  lng,
  onMove,
}: {
  lat: number;
  lng: number;
  onMove: (lat: number, lng: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // KEEP THE LATEST CALLBACK IN A REF: LEAFLET LISTENERS ARE ATTACHED ONCE, SO THEY WOULD
  // OTHERWISE KEEP CALLING THE FIRST RENDER'S VERSION OF onMove FOREVER (A STALE CLOSURE)
  const onMoveRef = useRef(onMove);
  useEffect(() => {
    onMoveRef.current = onMove;
  }, [onMove]);

  useEffect(() => {
    let map: any;
    let cancelled = false;

    (async () => {
      // LEAFLET TOUCHES WINDOW ON IMPORT, SO IT IS ONLY LOADED HERE IN THE BROWSER, NEVER ON THE SERVER
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      map = L.map(containerRef.current).setView([lat, lng], 17);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // CUSTOM SVG PIN: LEAFLET'S DEFAULT MARKER IMAGES BREAK UNDER NEXT.JS BUNDLING
      const icon = L.divIcon({
        className: "",
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#1d4ed8" stroke="white" stroke-width="1.5"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5" fill="white" stroke="none"/></svg>`,
        iconSize: [36, 36],
        iconAnchor: [18, 33],
      });

      const marker = L.marker([lat, lng], { draggable: true, icon }).addTo(map);

      // DRAGGING THE PIN REPORTS ITS NEW SPOT TO THE PARENT
      marker.on("dragend", () => {
        const p = marker.getLatLng();
        onMoveRef.current(p.lat, p.lng);
      });

      // TAPPING THE MAP MOVES THE PIN THERE (EASIER THAN DRAGGING ON A PHONE)
      map.on("click", (e: any) => {
        marker.setLatLng(e.latlng);
        onMoveRef.current(e.latlng.lat, e.latlng.lng);
      });
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
    // LAT AND LNG ARE DELIBERATELY NOT DEPENDENCIES: THEY ONLY SET THE STARTING POINT
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // RELATIVE Z-0 KEEPS LEAFLET'S HIGH INTERNAL Z-INDEXES FROM PAINTING OVER OTHER PAGE ELEMENTS
  return <div ref={containerRef} className="relative z-0 h-64 w-full" />;
}

export default function DeliveryAddressInput({ onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<DeliveryAddress[]>([]);
  const [open, setOpen] = useState(false);
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState("");

  // IDLE = NO SEARCH FINISHED YET. DONE = A SEARCH FINISHED (WITH OR WITHOUT RESULTS).
  // THIS IS HOW WE TELL "NOTHING SEARCHED YET" APART FROM "SEARCHED AND FOUND NOTHING"
  const [status, setStatus] = useState<"idle" | "done">("idle");

  // THE ADDRESS THE USER HAS PICKED BUT NOT YET CONFIRMED ON THE MAP. NULL MEANS NO CONFIRM PANEL.
  const [pending, setPending] = useState<DeliveryAddress | null>(null);
  // THE ADDRESS THE USER HAS CONFIRMED. THE ORDER NOW LINK IS ONLY ENABLED WHEN THIS IS SET.
  const [confirmed, setConfirmed] = useState<DeliveryAddress | null>(null);
  // TRUE WHILE WE ARE LOOKING UP THE TEXT FOR WHEREVER THE PIN WAS JUST MOVED
  const [resolving, setResolving] = useState(false);

  // TRUE ONLY AFTER "PIN IT ON THE MAP": THE PIN STARTS AT MAPBOX'S WRONG GUESS, SO THE USER
  // MUST MOVE IT BEFORE CONFIRMING. STATE (NOT A REF) BECAUSE THE BUTTON AND HINT MUST RE-RENDER.
  const [needsPinMove, setNeedsPinMove] = useState(false);

  // REF, NOT STATE: A SILENT FLAG THAT SHOULD NOT CAUSE A RE-RENDER
  const skipNextSearch = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // COUNTS PIN MOVES SO A SLOW OLD LOOKUP CANNOT OVERWRITE THE RESULT OF A NEWER ONE
  const moveCounter = useRef(0);

  // DEBOUNCED SEARCH: RUNS EVERY TIME THE QUERY CHANGES
  useEffect(() => {
    // IF WE JUST FILLED THE INPUT OURSELVES, DO NOT SEARCH AGAIN
    if (skipNextSearch.current) {
      skipNextSearch.current = false;
      return;
    }

    // TOO SHORT TO SEARCH: RESET EVERYTHING AND HIDE THE DROPDOWN
    if (query.trim().length < 3) {
      setSuggestions([]);
      setStatus("idle");
      setOpen(false);
      return;
    }

    let cancelled = false;

    // WAIT 400MS OF SILENCE BEFORE HITTING THE API
    const timer = setTimeout(async () => {
      try {
        const results = await fetchSuggestions(query);
        // IGNORE RESULTS FROM AN OLD SEARCH THAT FINISHED LATE
        if (!cancelled) {
          setSuggestions(results);
          setStatus("done");
          setOpen(true);
        }
      } catch {
        // A FAILED REQUEST IS TREATED LIKE "NOTHING FOUND" SO THE USER STILL GETS A WAY FORWARD
        if (!cancelled) {
          setSuggestions([]);
          setStatus("done");
          setOpen(true);
        }
      }
    }, 400);

    // CLEANUP RUNS ON THE NEXT KEYSTROKE: KILLS THE OLD TIMER AND MARKS OLD RESULTS AS STALE
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  // CLOSE THE DROPDOWN WHEN THE USER CLICKS OUTSIDE
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // BOTH TYPING AND THE LOCATION BUTTON END HERE. THIS OPENS THE CONFIRM MAP INSTEAD OF FINISHING.
  function choose(address: DeliveryAddress) {
    skipNextSearch.current = true;
    setQuery(address.label);
    setSuggestions([]);
    setStatus("idle");
    setOpen(false);
    setError("");
    moveCounter.current += 1;
    setResolving(false);
    // A NORMAL PICK STARTS THE PIN AT A SPOT THE USER ACCEPTED, SO NO MOVE IS REQUIRED
    setNeedsPinMove(false);
    setPending(address);
    // A NEW PICK MEANS ANY PREVIOUSLY CONFIRMED ADDRESS IS OUT OF DATE
    setConfirmed(null);
  }

  // THE USER SAYS NONE OF THE SUGGESTIONS ARE RIGHT. OPEN THE CONFIRM MAP STARTING AT THE TOP
  // SUGGESTION (THE NEAREST THING MAPBOX KNOWS) SO THE USER CAN DRAG THE PIN TO THEIR REAL SPOT.
  // THE INPUT TEXT IS NOT TOUCHED HERE, SO THE SKIP FLAG IS NOT NEEDED.
  function handlePinManually() {
    const guess = suggestions[0];
    if (!guess) return;

    moveCounter.current += 1;
    setResolving(false);
    setError("");
    setOpen(false);
    // THE STARTING SPOT IS A GUESS THE USER JUST REJECTED, SO CONFIRM STAYS LOCKED UNTIL THEY MOVE THE PIN
    setNeedsPinMove(true);
    // THE LABEL IS WHAT THE USER TYPED UNTIL THEY MOVE THE PIN AND REVERSE GEOCODING REPLACES IT
    setPending({
      id: `manual-${guess.id}`,
      label: query,
      lat: guess.lat,
      lng: guess.lng,
    });
    setConfirmed(null);
  }

  // RUNS WHEN THE PIN IS DRAGGED OR THE MAP IS TAPPED
  async function handlePinMove(lat: number, lng: number) {
    const thisMove = ++moveCounter.current;

    // THE USER HAS NOW PLACED THE PIN THEMSELVES, SO CONFIRMING IS ALLOWED
    setNeedsPinMove(false);

    // THE PIN'S COORDINATES ARE THE TRUTH, SO SAVE THEM RIGHT AWAY
    setPending((p) => (p ? { ...p, lat, lng } : p));
    setResolving(true);

    try {
      const found = await reverseGeocode(lat, lng);
      // A NEWER MOVE HAPPENED WHILE WE WERE WAITING, SO THROW THIS RESULT AWAY
      if (thisMove !== moveCounter.current) return;
      setPending((p) => (p ? { ...p, label: found.label } : p));
    } catch {
      if (thisMove !== moveCounter.current) return;
      setPending((p) =>
        p
          ? {
              ...p,
              label: `Pinned location (${lat.toFixed(5)}, ${lng.toFixed(5)})`,
            }
          : p,
      );
    } finally {
      if (thisMove === moveCounter.current) setResolving(false);
    }
  }

  // WHEN THE USER CONFIRMS THE PIN: SAVE THE COOKIE, TELL THE PARENT, AND REMEMBER IT FOR THE ORDER NOW LINK
  function handleConfirm() {
    if (!pending) return;

    // ONLY SET THE FLAG WHEN THE TEXT ACTUALLY CHANGES, OTHERWISE THE EFFECT NEVER RUNS AND THE FLAG LINGERS
    if (pending.label !== query) {
      skipNextSearch.current = true;
      setQuery(pending.label);
    }

    // THE COOKIE IS WRITTEN HERE SO /STORE CAN READ IT ON THE NEXT REQUEST
    saveLocationCookie(pending);

    onSelect?.(pending);
    setConfirmed(pending);
    setPending(null);
  }

  // USER WANTS A DIFFERENT ADDRESS: CLOSE THE MAP AND PUT THEM BACK IN THE INPUT
  function handleChangeAddress() {
    setPending(null);
    inputRef.current?.focus();
  }

  function handleUseCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Your browser does not support location.");
      setOpen(false);
      return;
    }

    setLocating(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const address = await reverseGeocode(
            pos.coords.latitude,
            pos.coords.longitude,
          );
          choose(address);
        } catch {
          setError("Could not work out your address. Try typing it instead.");
          // CLOSE THE DROPDOWN SO THE ERROR UNDER THE PILL IS NOT HIDDEN BEHIND IT
          setOpen(false);
        } finally {
          setLocating(false);
        }
      },
      (err) => {
        setLocating(false);
        setError(
          err.code === err.PERMISSION_DENIED
            ? "Location permission was denied. Please type your address."
            : "Could not get your location. Please type your address.",
        );
        setOpen(false);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl">
      {/* MOBILE: STACKED. SM AND UP: SINGLE ROW. PILL IS ALWAYS ROUNDED-FULL, NO RADIUS CHANGE ON HOVER OR ACTIVE */}
      <div className="flex gap-2 p-2 flex-row sm:items-center rounded-full border-2 border-dashed border-black hover:bg-white bg-white font-semibold text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none capitalize focus-within:-translate-x-1 focus-within:-translate-y-1 focus-within:shadow-[4px_4px_0px_black]">
        <div className="flex flex-1 items-center gap-2 px-2">
          <MapPin className="h-5 w-5 shrink-0 text-black" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              // TYPING AGAIN MEANS THE USER WANTS A DIFFERENT ADDRESS, SO CLOSE THE CONFIRM MAP
              // AND DROP THE CONFIRMED ADDRESS SO A STALE ONE CANNOT RIDE ALONG
              setPending(null);
              setConfirmed(null);
              setQuery(e.target.value);
            }}
            onFocus={() => status === "done" && setOpen(true)}
            placeholder="What's your address?"
            className="w-full bg-transparent py-2 text-base text-black outline-none placeholder:text-gray-500"
          />
        </div>

        {/* LINK TO /STORE. THE URL STAYS CLEAN BECAUSE THE LOCATION TRAVELS IN THE COOKIE SET IN HANDLECONFIRM.
            DISABLED UNTIL AN ADDRESS HAS BEEN CONFIRMED ON THE MAP.
            LINK HAS NO DISABLED PROP, SO ARIA-DISABLED + PREVENTDEFAULT DOES THE JOB.
            NORMAL-CASE STOPS THE PILL'S CAPITALIZE CLASS FROM TURNING IT INTO "ORDER NOW" */}
        <Link
          href="/store"
          aria-disabled={!confirmed}
          onClick={(e) => {
            if (!confirmed) e.preventDefault();
          }}
          className="flex items-center justify-center gap-2 rounded-full bg-blue-50 px-5 py-3 text-sm font-semibold normal-case text-blue-900 transition hover:bg-blue-100 aria-disabled:pointer-events-none aria-disabled:opacity-60"
        >
          Order now
        </Link>
      </div>

      {error && <p className="mt-2 px-2 text-sm text-red-600">{error}</p>}

      {/* DROPDOWN: SHOWS EITHER THE FOUND ADDRESSES OR THE NOT-FOUND PANEL, BOTH IN THE SAME BOX */}
      {open && status === "done" && (
        <div className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border-dotted border-2 border-black bg-white shadow-lg">
          {suggestions.length > 0 ? (
            <>
              <ul>
                {suggestions.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => choose(s)}
                      className="flex w-full items-start gap-2 px-4 py-3 text-left text-sm text-gray-800 hover:bg-gray-50"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                      <span>{s.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* FOOTER: A WAY OUT WHEN THE SUGGESTIONS ABOVE ARE WRONG BUT NOT EMPTY */}
              <div className="flex flex-col gap-2 border-t-2 border-dotted border-black p-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handlePinManually}
                  className="flex flex-1 items-center justify-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
                >
                  Not here? Pin it on the map
                </button>
                <button
                  type="button"
                  onClick={handleUseCurrentLocation}
                  disabled={locating}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-100 disabled:opacity-60"
                >
                  {locating && <Loader2 className="h-4 w-4 animate-spin" />}
                  {locating ? "Locating..." : "Use current location"}
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 px-4 py-6 text-center">
              <SearchX className="h-6 w-6 text-gray-400" />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  We couldn&apos;t find your location
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Check the spelling, try a nearby landmark, or let us find you.
                </p>
              </div>

              {/* ONLY LOCATION BUTTON, SHOWN WHEN A SEARCH FINDS NOTHING */}
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                disabled={locating}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-100 disabled:opacity-60 sm:w-auto"
              >
                {locating && <Loader2 className="h-4 w-4 animate-spin" />}
                {locating ? "Locating..." : "Use current location"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* CONFIRM PANEL: MAP WITH A DRAGGABLE PIN. KEY MAKES A NEW PICK REBUILD THE MAP, BUT DRAGGING DOES NOT */}
      {pending && (
        <div className="absolute z-20 mt-2 border-dotted w-full overflow-hidden rounded-xl border-2 border-black bg-white shadow-lg">
          <p className="px-4 pt-3 text-sm font-semibold text-gray-900">
            Drag the pin to your exact spot
          </p>
          <p className="px-4 pb-3 text-xs text-gray-500">
            You can also tap the map to move it.
          </p>

          <PinMap
            key={pending.id}
            lat={pending.lat}
            lng={pending.lng}
            onMove={handlePinMove}
          />

          <div className="flex flex-col gap-3 p-4">
            <div className="flex items-start gap-2 text-sm text-gray-800">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
              <span>{resolving ? "Updating address..." : pending.label}</span>
            </div>

            {/* HINT: EXPLAINS WHY CONFIRM IS GREYED OUT AFTER "PIN IT ON THE MAP" */}
            {needsPinMove && (
              <p className="text-xs text-gray-500">
                Move the pin to your exact spot to continue.
              </p>
            )}

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleConfirm}
                disabled={resolving || needsPinMove}
                className="flex flex-1 items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
              >
                Confirm location
              </button>
              <button
                type="button"
                onClick={handleChangeAddress}
                className="flex flex-1 items-center justify-center rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-200"
              >
                Change address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
