import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Free QR Code Generator Online",
  description:
    "Create QR codes for URL, WiFi, UPI, WhatsApp & more. 100% free, no login required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-white text-slate-800">

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* ✅ VERCEL ANALYTICS */}
        <Analytics />
        
      </body>
    </html>
  );
}
