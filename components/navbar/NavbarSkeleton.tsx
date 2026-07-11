import Containers from "../global/Containers";
import { Skeleton } from "../ui/skeleton";
import Logo from "./Logo";

function NavbarSkeleton() {
  return (
    <>
      {/* Mobile */}
      <Containers className="flex justify-between sm:hidden">
        <Logo />
      </Containers>

      {/* Desktop */}
      <nav className="hidden sm:block fixed left-0 top-5 right-0 w-full bg-transparent h-20">
        <Containers className="max-w-[90%] h-fit mx-auto flex items-center justify-between bg-transparent gap-20">
          <div className="basis-1/6 flex justify-start">
            <Logo />
          </div>
          <div className="basis-4/6 flex gap-10 items-center justify-around">
            <Skeleton className="h-9 w-20 rounded-2xl" />
            <Skeleton className="h-9 w-20 rounded-2xl" />
            <Skeleton className="h-9 w-20 rounded-2xl" />
            <Skeleton className="h-9 w-24 rounded-2xl" />
          </div>
          <div className="basis-1/6 flex justify-end">
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </Containers>
      </nav>
    </>
  );
}

export default NavbarSkeleton;
