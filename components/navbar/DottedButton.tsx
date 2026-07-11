import Link from "next/link";
import { Button } from "../ui/button";

const DottedButton = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link href={link} className="hover:cursor-pointer">
      <Button className="rounded-2xl border-2 border-dashed border-black hover:bg-white bg-white font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none capitalize">
        {label}
      </Button>
    </Link>
  );
};

export default DottedButton;
