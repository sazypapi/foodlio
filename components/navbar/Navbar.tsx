import Containers from "../global/Containers";
import Logo from "./Logo";
import Links from "./Links";
import UserIcon from "./UserIcon";

function Navbar({ isAdmin }: { isAdmin: boolean }) {
  return (
    <>
      <nav className="sm:hidden fixed left-0 top-5 right-0 w-full bg-transparent h-20 z-9999">
        <Containers className="flex justify-between ">
          <Logo />
        </Containers>
      </nav>
      <nav className="hidden sm:block fixed left-0 top-5 right-0 w-full bg-transparent h-20 z-9999">
        <Containers className="max-w-[90%] h-fit mx-auto flex items-center justify-between bg-transparent gap-20">
          <div className="basis-1/6 flex justify-start ">
            <Logo />
          </div>
          <div className="basis-4/6">
            <Links />
          </div>
          <div className="basis-1/6 flex justify-end ">
            <UserIcon isAdmin={isAdmin} />
          </div>
        </Containers>
      </nav>
    </>
  );
}

export default Navbar;
