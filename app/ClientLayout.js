"use client";

import { usePathname } from "next/navigation";
import Footer from "./_components/common/Footer";
import Navbar from "./_components/common/Navbar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}