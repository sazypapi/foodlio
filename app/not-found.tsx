import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-[120px] font-black leading-none text-black tracking-tighter">
          404
        </h1>

        <div className="w-16 h-1 bg-black mx-auto my-6" />

        <h2 className="text-2xl font-bold text-black mb-3">Page not found</h2>
        <p className="text-gray-500 text-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-zinc-800 transition-all duration-200">
          Go back home
        </Link>
      </div>
    </div>
  );
}
