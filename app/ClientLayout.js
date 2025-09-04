"use client";

import { usePathname } from "next/navigation";
import Footer from "./_components/common/Footer";
import Navbar from "./_components/common/Navbar";
import SmoothScrollProvider from "./_components/common/SmoothScrollProvider";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
      {!isDashboard && <Footer />}
    </>
  );
}
