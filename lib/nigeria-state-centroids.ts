// Approximate centroid coordinates for Nigerian states + FCT.
// Purpose: (1) bias Mapbox address search results toward the correct state,
// (2) act as a rough fallback location when a vendor's address can't be geocoded.
// These are NOT precise centroids — they're capital-city-level approximations,
// good enough for search biasing and "somewhere in this state" fallback pins.
// Do not use these for anything requiring real precision (routing, billing zones, etc).

export interface Coordinates {
  lat: number;
  lng: number;
}

export const NIGERIA_STATE_CENTROIDS: Record<string, Coordinates> = {
  Abia: { lat: 5.4527, lng: 7.5248 },
  Adamawa: { lat: 9.3265, lng: 12.3984 },
  "Akwa Ibom": { lat: 5.0377, lng: 7.9128 },
  Anambra: { lat: 6.2209, lng: 6.9370 },
  Bauchi: { lat: 10.3158, lng: 9.8442 },
  Bayelsa: { lat: 4.9267, lng: 6.2676 },
  Benue: { lat: 7.3369, lng: 8.7404 },
  Borno: { lat: 11.8333, lng: 13.1500 },
  "Cross River": { lat: 4.9757, lng: 8.3417 },
  Delta: { lat: 5.5320, lng: 5.8987 },
  Ebonyi: { lat: 6.2649, lng: 8.0137 },
  Edo: { lat: 6.3350, lng: 5.6037 },
  Ekiti: { lat: 7.7190, lng: 5.3110 },
  Enugu: { lat: 6.4413, lng: 7.4988 },
  FCT: { lat: 9.0765, lng: 7.3986 },
  Gombe: { lat: 10.2897, lng: 11.1673 },
  Imo: { lat: 5.4836, lng: 7.0333 },
  Jigawa: { lat: 12.2280, lng: 9.5616 },
  Kaduna: { lat: 10.5222, lng: 7.4383 },
  Kano: { lat: 12.0022, lng: 8.5920 },
  Katsina: { lat: 12.9908, lng: 7.6018 },
  Kebbi: { lat: 12.4539, lng: 4.1975 },
  Kogi: { lat: 7.7337, lng: 6.6906 },
  Kwara: { lat: 8.9669, lng: 4.3874 },
  Lagos: { lat: 6.5244, lng: 3.3792 },
  Nasarawa: { lat: 8.5378, lng: 8.3206 },
  Niger: { lat: 9.9309, lng: 6.5590 },
  Ogun: { lat: 7.1608, lng: 3.3480 },
  Ondo: { lat: 7.2526, lng: 5.2000 },
  Osun: { lat: 7.5629, lng: 4.5199 },
  Oyo: { lat: 7.8500, lng: 3.9310 },
  Plateau: { lat: 9.2182, lng: 9.5179 },
  Rivers: { lat: 4.8156, lng: 6.9778 },
  Sokoto: { lat: 13.0059, lng: 5.2476 },
  Taraba: { lat: 8.0000, lng: 11.2000 },
  Yobe: { lat: 12.0000, lng: 11.5000 },
  Zamfara: { lat: 12.1704, lng: 6.2593 },
};

/**
 * Returns the centroid for a given state name, or the Lagos centroid as a
 * last-resort default if the state isn't recognized (shouldn't happen if the
 * value comes from your own StateLgaSelect options).
 */
export function getStateCentroid(stateName: string): Coordinates {
  return NIGERIA_STATE_CENTROIDS[stateName] ?? NIGERIA_STATE_CENTROIDS.Lagos;
}
