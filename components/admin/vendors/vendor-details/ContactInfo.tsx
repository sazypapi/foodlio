import { serializedVendor } from "@/components/vendor/create-new-meal/CreateMealFormContainer";
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";

function ContactInfo({ vendorData }: { vendorData: serializedVendor }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
        Contact
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-gray-400 shrink-0" />
          <a href={`mailto:${vendorData.email}`}>
            <p className="text-sm text-gray-700">{vendorData.email}</p>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-gray-400 shrink-0" />
          <a href={`tel:${vendorData.phoneNumber}`}>
            <p className="text-sm text-gray-700">{vendorData.phoneNumber}</p>
          </a>
        </div>
        {vendorData.backUpPhoneNumber && (
          <div className="flex items-center gap-3">
            <PhoneCall className="h-4 w-4 text-gray-400 shrink-0" />
            <a href={`tel:${vendorData.backUpPhoneNumber}`}>
              <p className="text-sm text-gray-700">
                {vendorData.backUpPhoneNumber}
              </p>
            </a>
          </div>
        )}
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">{vendorData.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
