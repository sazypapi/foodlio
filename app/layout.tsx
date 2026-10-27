import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import { Suspense } from "react";
import NavbarSkeleton from "@/components/navbar/NavbarSkeleton";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodlio",
  description: "Food delivery, made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        outfit.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body suppressHydrationWarning className="w-[100%]">
        <ClerkProvider>
          <EdgeStoreProvider>
            <Suspense fallback={<NavbarSkeleton />}>
              <NavbarWrapper />
            </Suspense>
            {children}
            <Toaster />
          </EdgeStoreProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
