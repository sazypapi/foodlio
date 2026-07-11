import React from "react";

async function VendorAnalytics({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>{id}</div>;
}

export default VendorAnalytics;
