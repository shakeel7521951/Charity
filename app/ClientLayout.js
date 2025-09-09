"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Navbar from "./_components/common/Navbar"; 
import Footer from "./_components/common/Footer";  
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
   const pathname = usePathname();
   const isDashboard = pathname?.startsWith("/dashboard");
  return (
    <I18nextProvider i18n={i18n}>
      {!isDashboard && <Navbar />}
      <main>{children}</main>
      {!isDashboard && <Footer />}
    </I18nextProvider>
  );
}
