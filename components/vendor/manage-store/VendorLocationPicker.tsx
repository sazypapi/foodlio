"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap, Marker } from "leaflet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Coords = { lat: number; lng: number };

type VendorLocationPickerProps = {
  initialLat?: number;
  initialLng?: number;
  initialLandmark?: string;
  showMapLink?: boolean; // CHANGED: NEW OPTIONAL PROP, OFF UNLESS A PAGE ASKS FOR IT
};

export default function VendorLocationPicker({
  initialLat,
  initialLng,
  initialLandmark = "",
  showMapLink = false, // CHANGED: DEFAULTS TO false SO THE APPLICATION FORM STAYS UNCHANGED
}: VendorLocationPickerProps) {
  // REFS HOLD LEAFLET'S OBJECTS BECAUSE THEY ARE IMPERATIVE AND MUST SURVIVE RE-RENDERS WITHOUT CAUSING ONE
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<Marker | null>(null);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);

  // STATE HOLDS ONLY WHAT THE UI AND THE FORM NEED TO RE-RENDER FOR
  const [coords, setCoords] = useState<Coords | null>(
    initialLat !== undefined && initialLng !== undefined
      ? { lat: initialLat, lng: initialLng }
      : null,
  );
  // LANDMARK STARTS AS AN EMPTY STRING, NEVER UNDEFINED, SO THE INPUT STAYS CONTROLLED FOR ITS WHOLE LIFE
  const [landmark, setLandmark] = useState(initialLandmark);
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState("");
  const [hovered, setHovered] = useState(false);

  // THE ONE PLACE A PIN IS CREATED OR MOVED. CLICK, GPS BUTTON AND INITIAL VALUE ALL GO THROUGH HERE
  const setPin = useCallback((lat: number, lng: number, fly: boolean) => {
    const L = leafletRef.current;
    const map = mapRef.current;
    if (!L || !map) return;

    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
    } else {
      // INLINE STYLES SO THE PIN SHOWS UP NO MATTER WHAT YOUR GLOBAL CSS DOES
      const icon = L.divIcon({
        className: "",
        html: '<div style="width:28px;height:28px;background:#1e3a8a;border:2px solid #ffffff;border-radius:50% 50% 0 50%;transform:rotate(45deg);box-shadow:0 2px 6px rgba(0,0,0,0.35);"></div>',
        iconSize: [28, 28],
        iconAnchor: [14, 34],
      });
      const marker = L.marker([lat, lng], { draggable: true, icon }).addTo(map);

      // WHEN THE VENDOR DROPS THE PIN, READ ITS NEW POSITION AND SAVE IT
      marker.on("dragend", () => {
        const p = marker.getLatLng();
        setCoords({ lat: p.lat, lng: p.lng });
      });
      markerRef.current = marker;
    }

    setCoords({ lat, lng });
    if (fly) map.flyTo([lat, lng], 17);
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // LEAFLET TOUCHES WINDOW ON IMPORT, SO IT MUST LOAD HERE IN THE BROWSER AND NEVER DURING SERVER RENDERING
      const L = (await import("leaflet")).default;
      if (cancelled || !mapEl.current) return;
      leafletRef.current = L;

      const start: [number, number] | null =
        initialLat !== undefined && initialLng !== undefined
          ? [initialLat, initialLng]
          : null;

      // NO SAVED POINT? START ZOOMED OUT ON NIGERIA
      const map = L.map(mapEl.current).setView(
        start ?? [9.082, 8.6753],
        start ? 17 : 6,
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // THIS HANDLER IS REGISTERED ONCE, SO IT ONLY CALLS A STABLE FUNCTION AND NEVER READS STATE DIRECTLY
      map.on("click", (e) => setPin(e.latlng.lat, e.latlng.lng, false));

      mapRef.current = map;
      if (start) setPin(start[0], start[1], false);
    })();

    // CLEANUP RUNS ON UNMOUNT AND ON STRICT MODE'S DOUBLE INVOKE, SO THE MAP IS NEVER INITIALISED TWICE
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, [initialLat, initialLng, setPin]);

  function handleLocate() {
    if (!navigator.geolocation) {
      setError(
        "Your browser does not support location. Tap the map to drop a pin instead.",
      );
      return;
    }
    setLocating(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPin(pos.coords.latitude, pos.coords.longitude, true);
        setLocating(false);
      },
      () => {
        setLocating(false);
        setError(
          "Could not get your location. Allow location access, or tap the map to drop a pin.",
        );
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  // BUTTON COLOURS LIVE HERE AS INLINE STYLES BECAUSE INLINE STYLES BEAT ANY GLOBAL STYLESHEET RULE
  const buttonStyle: CSSProperties = {
    border: "2px solid #1e3a8a",
    backgroundColor: hovered ? "#1e3a8a" : "#ffffff",
    color: hovered ? "#ffffff" : "#1e3a8a",
    padding: "6px 8px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: locating ? "not-allowed" : "pointer",
    opacity: locating ? 0.6 : 1,
    transition: "background-color 150ms, color 150ms",
    marginBottom: "16px",
  };

  return (
    // ISOLATE KEEPS LEAFLET'S HIGH Z-INDEXES FROM COVERING YOUR DIALOGS AND SHEETS
    <div className="isolate">
      {/* HOVER ONLY REACTS TO A REAL MOUSE SO IT DOES NOT STICK ON PHONES AFTER A TAP */}
      <button
        type="button"
        onClick={handleLocate}
        disabled={locating}
        onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        style={buttonStyle}
        className="w-full sm:w-auto"
      >
        {locating ? "Finding you..." : "Use my current location"}
      </button>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div
        ref={mapEl}
        className="h-72 w-full overflow-hidden rounded-xl border sm:h-96"
      />

      <p className="text-xs text-gray-500 mt-3">
        {coords
          ? "Pin placed. Drag it if it is not on your shop entrance."
          : "Tap the map or use your current location to drop a pin on your shop entrance."}
      </p>

      {/* CHANGED: NOW NEEDS THE showMapLink PROP AS WELL AS A PIN, SO IT ONLY APPEARS WHERE A PAGE ASKS FOR IT.
          asChild MAKES THE LINK ITSELF LOOK LIKE A BUTTON, SO THERE IS NO <button> TO SUBMIT THE FORM */}
      {showMapLink && coords && (
        <Button asChild variant="outline" className="mt-3 w-full sm:w-auto">
          <a
            href={`https://www.google.com/maps?q=${coords.lat},${coords.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View location on Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      )}

      {/* EXPLAINS TO THE VENDOR WHY WE ASK FOR THEIR EXACT LOCATION */}
      <p className="text-xs text-blue-900 font-semibold sm:text-sm mb-3 mt-3">
        We ask for your exact location to confirm that your establishment is
        real and to help riders find you when they come to pick up orders.
      </p>

      <Input
        name="landmark"
        value={landmark}
        onChange={(e) => setLandmark(e.target.value)}
        placeholder="Nearest landmark, e.g. opposite First Bank"
        className="border placeholder:text-[16px] text-[16px] rounded-sm"
      />

      {/* HIDDEN INPUTS SO THE COORDINATES TRAVEL WITH YOUR FORMDATA INTO THE SERVER ACTION */}
      <input type="hidden" name="latitude" value={coords?.lat ?? ""} />
      <input type="hidden" name="longitude" value={coords?.lng ?? ""} />
    </div>
  );
}
