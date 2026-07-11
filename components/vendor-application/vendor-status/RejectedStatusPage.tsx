"use client";

import {
  Clock,
  Mail,
  Phone,
  MapPin,
  UtensilsCrossed,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import { Vendor } from "@/generated/prisma/client";
import DetailRow from "./DetailRow";
import StatusPill from "./StatusPill";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Containers from "@/components/global/Containers";

function RejectedStatusPage({ vendor }: { vendor: Vendor }) {
  return (
    <Containers className="sm:mt-25 mt-5 px-2">
      <Card className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Status banner */}
          <div className="bg-white text-black border rounded-2xl px-6 py-8 sm:px-10 sm:py-10 text-center mb-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-6 h-6 animate-pulse" strokeWidth={1.5} />
            </div>
            <h1 className="text-xl sm:text-2xl font-medium tracking-tight mb-2">
              We&apos;re sorry to inform you that your application to be a
              vendor on Foodlio was rejected
            </h1>
            <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
              You&apos;ll find the reasons for the rejection below.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-neutral-500  border border-white/15 rounded-full px-3 py-1.5">
              <Link href="/contact" className="hover:underline text-black">
                Contact us
              </Link>
              to appeal this decision
            </div>
          </div>

          {/* Application details card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-900">
                Application details
              </h2>
              <StatusPill status={vendor.status} />
            </div>

            <div className="px-6 sm:px-8 py-6 space-y-6">
              {/* Identity */}
              <div className="flex items-start gap-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-zinc-100 shrink-0 border border-gray-200">
                  {vendor.logo ? (
                    <Image
                      src={vendor.logo}
                      alt={vendor.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">
                    {vendor.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">
                    {vendor.description}
                  </p>
                </div>
              </div>

              {/* Contact + address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <DetailRow icon={Mail} label="Email" value={vendor.email} />
                <DetailRow
                  icon={Phone}
                  label="Phone"
                  value={
                    vendor.backUpPhoneNumber
                      ? `${vendor.phoneNumber} · ${vendor.backUpPhoneNumber}`
                      : vendor.phoneNumber
                  }
                />
                <DetailRow
                  icon={MapPin}
                  label="Address"
                  value={vendor.address}
                  className="sm:col-span-2"
                />
              </div>

              {/* Cuisine types */}
              {vendor.cuisineType.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    Cuisine type
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {vendor.cuisineType.map((cuisine) => (
                      <span
                        key={cuisine}
                        className="text-xs font-medium text-gray-700 bg-zinc-100 rounded-full px-3 py-1">
                        {cuisine}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Admin note, only when present */}
              {vendor.adminNote && (
                <div className="bg-zinc-50 border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-xs font-medium text-gray-500 mb-1">
                    Note from our team
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {vendor.adminNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Containers>
  );
}

export default RejectedStatusPage;
