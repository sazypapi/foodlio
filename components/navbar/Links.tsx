"use client";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import DottedButton from "./DottedButton";
import NeumorphismButton from "./NeuroMorphism";
function Links() {
  return (
    <div className="flex gap-10 flex-row items-center w-full bg-white rounded-full inset-shadow-sm shadow-sm p-3 justify-around">
      <DottedButton label="Order" link="/shop" />
      <DottedButton label="About" link="/about" />
      <DottedButton label="Contact" link="/contact" />
      {/* <NeumorphismButton label="Order" link="/order" />
      <NeumorphismButton label="About" link="/about" />
      <NeumorphismButton label="Contact" link="/contact" /> */}
      <ServicesDropdown />
    </div>
  );
}

export default Links;
