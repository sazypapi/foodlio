import { ExternalLink, MapPin } from "lucide-react";
import { serializedVendor } from "@/components/vendor/create-new-meal/CreateMealFormContainer";
import { Button } from "@/components/ui/button";

function VerifyEstablishmentLocation({
  vendorData,
}: {
  vendorData: serializedVendor;
}) {
  const { latitude, longitude, landmark } = vendorData;

  // VENDORS WHO APPLIED BEFORE THE PIN FEATURE HAVE NO COORDINATES, SO THE LINK CAN BE NULL
  const hasPin = latitude != null && longitude != null;
  const mapLink = hasPin
    ? `https://www.google.com/maps?q=${latitude},${longitude}`
    : null;

  return (
    <div className="border border-gray-200 rounded-lg p-4 sm:col-span-2">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Verify establishment location
      </p>

      {mapLink ? (
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Open the pin on the map, switch to satellite view, and check that a
            real establishment could be at that spot.
          </p>

          {/* LANDMARK IS OPTIONAL, SO ONLY SHOW IT WHEN THE VENDOR GAVE ONE */}
          {landmark && (
            <div className="flex items-center text-sm">
              <MapPin className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-400">Landmark:</span>
              {"  "}
              &nbsp; <p className="text-black">{landmark}</p>
            </div>
          )}
          {latitude != null && longitude != null && (
            <>
              <p className="text-xs text-gray-400">
                {latitude.toFixed(5)}, {longitude.toFixed(5)}
              </p>

              {/* ARBITRARY HEX COLOURS SO THE LINK LOOKS THE SAME NO MATTER WHAT YOUR THEME DEFINES */}
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Button>
                  View location on map
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </>
          )}
        </div>
      ) : (
        <p className="text-sm italic text-gray-400">
          This vendor did not drop a pin, so there is no location to verify.
        </p>
      )}
    </div>
  );
}

export default VerifyEstablishmentLocation;
