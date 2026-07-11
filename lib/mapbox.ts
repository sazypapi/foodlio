/* eslint-disable @typescript-eslint/no-explicit-any */
import { Coordinates } from "./nigeria-state-centroids";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

if (!MAPBOX_TOKEN && typeof window !== "undefined") {
  // Loud in dev, doesn't crash the app — every call below will just fail
  // with a clear error instead of a silent 401.
  console.warn(
    "NEXT_PUBLIC_MAPBOX_TOKEN is not set. Address search will not work.",
  );
}

export interface MapboxSuggestion {
  mapboxId: string;
  name: string;
  fullAddress: string; // human-readable line to show in the dropdown
  featureType: string; // "street" | "place" | "region" | ...
}

export interface RetrievedAddress {
  lat: number;
  lng: number;
  fullAddress: string;
}

/**
 * Generates a fresh session token. Call this ONCE per address-search
 * "session" (i.e. once when the user starts typing in a field), and reuse
 * the same token across all suggest calls + the final retrieve call for
 * that field. This is what makes Mapbox bill it as one session instead of
 * one request per keystroke.
 */
export function createSessionToken(): string {
  return crypto.randomUUID();
}

interface SuggestOptions {
  proximity?: Coordinates; // bias results toward this point (e.g. state centroid)
  limit?: number;
}

/**
 * Calls Mapbox's Search Box /suggest endpoint. Returns an empty array
 * (never throws) on empty query, no results, or request failure — callers
 * should treat an empty array as "show the manual entry fallback."
 */
export async function suggestAddress(
  query: string,
  sessionToken: string,
  options: SuggestOptions = {},
): Promise<MapboxSuggestion[]> {
  const trimmed = query.trim();
  if (!trimmed || !MAPBOX_TOKEN) return [];

  const params = new URLSearchParams({
    q: trimmed,
    access_token: MAPBOX_TOKEN,
    session_token: sessionToken,
    country: "NG",
    language: "en",
    limit: String(options.limit ?? 6),
  });

  if (options.proximity) {
    params.set(
      "proximity",
      `${options.proximity.lng},${options.proximity.lat}`,
    );
  }

  try {
    const res = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/suggest?${params.toString()}`,
    );
    if (!res.ok) return [];

    const data = await res.json();
    const suggestions = data?.suggestions;
    if (!Array.isArray(suggestions)) return [];

    return suggestions.map((s: any) => ({
      mapboxId: s.mapbox_id,
      name: s.name,
      fullAddress: s.place_formatted
        ? `${s.name}, ${s.place_formatted}`
        : s.name,
      featureType: s.feature_type,
    }));
  } catch {
    // Network failure, malformed response, etc. — fail soft.
    return [];
  }
}

/**
 * Calls Mapbox's Search Box /retrieve endpoint to resolve a chosen
 * suggestion's mapbox_id into actual coordinates. Must use the SAME
 * sessionToken that was used for the suggest calls leading up to this pick.
 * Returns null on failure — caller should fall back to manual/pin entry.
 */
export async function retrieveAddress(
  mapboxId: string,
  sessionToken: string,
): Promise<RetrievedAddress | null> {
  if (!MAPBOX_TOKEN) return null;

  const params = new URLSearchParams({
    access_token: MAPBOX_TOKEN,
    session_token: sessionToken,
  });

  try {
    const res = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/retrieve/${mapboxId}?${params.toString()}`,
    );
    if (!res.ok) return null;

    const data = await res.json();
    const feature = data?.features?.[0];
    const coords = feature?.geometry?.coordinates; // [lng, lat]
    if (!Array.isArray(coords) || coords.length !== 2) return null;

    return {
      lng: coords[0],
      lat: coords[1],
      fullAddress:
        feature?.properties?.full_address ?? feature?.properties?.name ?? "",
    };
  } catch {
    return null;
  }
}
