import { Vendor } from "@/generated/prisma/client";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import CuisineAndMeta from "./CuisineAndMeta";
import AdminNote from "./AdminNote";
import VerifyEstablishmentLocation from "./VerifyEstablishmentLocation";
import { serializedVendor } from "@/components/vendor/create-new-meal/CreateMealFormContainer";

function Body({ vendorData }: { vendorData: serializedVendor }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Contact Info */}
      <ContactInfo vendorData={vendorData} />

      {/* Cuisine & Meta */}
      <CuisineAndMeta vendorData={vendorData} />

      {/* Location check, placed above the note so it is reviewed before approving */}
      <VerifyEstablishmentLocation vendorData={vendorData} />

      {/* Admin Note */}
      <AdminNote vendorData={vendorData} />

      {/* Images */}
      {vendorData.images.length > 0 && (
        <div className="border border-gray-200 rounded-lg p-4 sm:col-span-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Images
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {vendorData.images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-md overflow-hidden border border-gray-100"
              >
                <Image
                  src={img}
                  alt={`${vendorData.name} image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
