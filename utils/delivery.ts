// utils/delivery.ts

// PLATFORM-WIDE SETTING. YOU OWN THE FLEET SO THE RADIUS IS YOUR DECISION, NOT THE VENDOR'S.
export const DELIVERY_RADIUS_KM = 10;

// ASSUMPTIONS YOU CAN TUNE. PREP TIME SHOULD LATER COME FROM EACH VENDOR.
const DEFAULT_PREP_MINUTES = 15;
const AVERAGE_SPEED_KMH = 20;
const BUFFER_MINUTES = 5;

// INPUTS THE ESTIMATE NEEDS. THE RIDER NUMBERS WILL COME FROM YOUR OWN DATABASE.
type EstimateInput = {
  // DISTANCE FROM THE VENDOR TO THE CUSTOMER IN KM
  distanceKm: number;
  // HOW LONG THE VENDOR SAYS THE FOOD TAKES
  prepMinutes?: number;
  // RIDERS ONLINE AND FREE NEAR THIS VENDOR RIGHT NOW
  availableRiders: number;
  // ORDERS NEAR THIS VENDOR STILL WAITING FOR A RIDER
  pendingOrders: number;
};

// WORKS OUT HOW LONG A RIDER TAKES TO BE ASSIGNED AND REACH THE VENDOR.
// MORE WAITING ORDERS PER FREE RIDER MEANS A LONGER WAIT.
function estimatePickupMinutes(availableRiders: number, pendingOrders: number) {
  // NO RIDERS ONLINE: RETURN A LARGE NUMBER SO THE UI CAN WARN INSTEAD OF PROMISING A TIME
  if (availableRiders <= 0) return 45;

  // BASE TIME FOR A RIDER TO ARRIVE, PLUS EXTRA FOR EVERY ORDER AHEAD IN THE QUEUE
  const queuePressure = pendingOrders / availableRiders;
  return 6 + queuePressure * 5;
}

// RETURNS A RANGE LIKE { min: 28, max: 38 } BECAUSE A RANGE IS MORE HONEST THAN ONE NUMBER
export function estimateDeliveryTime({
  distanceKm,
  prepMinutes = DEFAULT_PREP_MINUTES,
  availableRiders,
  pendingOrders,
}: EstimateInput) {
  // TRAVEL TIME IN MINUTES = DISTANCE DIVIDED BY SPEED, TIMES 60
  const travelMinutes = (distanceKm / AVERAGE_SPEED_KMH) * 60;

  const pickupMinutes = estimatePickupMinutes(availableRiders, pendingOrders);

  // THE RIDER CAN LEAVE FOR THE VENDOR WHILE THE FOOD IS STILL BEING MADE,
  // SO THE WAIT AT THE VENDOR IS WHICHEVER IS LONGER: PREP OR PICKUP
  const total =
    Math.max(prepMinutes, pickupMinutes) + travelMinutes + BUFFER_MINUTES;

  // ROUND TO THE NEAREST 5 SO THE NUMBERS LOOK CLEAN, THEN WIDEN INTO A RANGE
  const rounded = Math.round(total / 5) * 5;
  return { min: rounded - 5, max: rounded + 5 };
}

// SIMPLE GATE FOR THE ORDER RADIUS. RUN THIS AGAIN ON THE SERVER AT CHECKOUT.
export function isWithinDeliveryRadius(distanceKm: number) {
  return distanceKm <= DELIVERY_RADIUS_KM;
}
