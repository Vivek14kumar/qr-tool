import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Free QR Code Generator Online | QRGen",
  description:
    "Generate QR codes for URL, WiFi, UPI, WhatsApp, Email & Barcodes. 100% Free, No Login Required.",
  keywords: [
    "free qr code generator",
    "qr code generator online",
    "best free qr generator",
    "online qr",
    "free qr gen",
    "qr generator",
    "barcode generator",
    "qr gen",
    "free qr code generator 128",
    "qr code scanner",
    "text to qr code",
    "qr code monkey",
    "static qr code generator",
    "location qr code generator",
    "upi qr code generator",
    "barcode generator",
    "wifi qr code",
  ],
  alternates: {
    canonical: "https://freeqrgen.online",
  },
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
