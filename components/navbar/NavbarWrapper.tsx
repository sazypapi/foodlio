import Navbar from "./Navbar";
import { auth } from "@clerk/nextjs/server";

export default async function NavbarWrapper() {
  const { sessionClaims } = await auth();
  const isAdmin = sessionClaims?.metadata?.role === "ADMIN";

  return <Navbar isAdmin={isAdmin} />;
}
