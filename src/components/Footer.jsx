import Link from "next/link";

export default function Footer() {
  const qrTools = [
    { name: "WiFi QR", href: "/qr/wifi" },
    { name: "UPI QR", href: "/qr/upi" },
    { name: "WhatsApp QR", href: "/qr/whatsapp" },
    { name: "PDF to QR", href: "/qr/pdf" },
    { name: "Image to QR", href: "/qr/image" },
    { name: "Barcode Gen", href: "/qr/barcode" },
    { name: "vCard QR", href: "/qr/vcard" },
    { name: "Email QR", href: "/qr/email" },
  ];

  return (
    <footer className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4">

        {/* BRAND & MISSION */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            QR<span className="text-blue-400">Gen</span>
          </h3>
          <p className="text-sm mt-4 leading-relaxed text-slate-400 max-w-sm">
            Professional-grade **Free QR Code Generator** for India and the world. 
            Create permanent codes for URL, WiFi, and UPI payments without any registration or fees.
          </p>
        </div>

        {/* NEW: SPECIFIC TOOLS (SEO BOOST) */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Specialized Tools</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {qrTools.map((tool) => (
              <li key={tool.href}>
                <Link href={tool.href} className="hover:text-blue-400 transition flex items-center gap-1">
                  <span className="text-blue-500/50">#</span> {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog & Guide</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About QRGen</Link></li>
          </ul>
        </div>

        {/* LEGAL & TRUST */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Trust & Privacy</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li className="pt-2">✅ 100% Free Forever</li>
            <li>✅ No Data Stored</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-700 py-6 text-center text-xs sm:text-sm text-slate-400 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <span>© {new Date().getFullYear()} **freeqrgen.online**</span>
          <span className="hidden md:inline">|</span>
          <span>Built with ❤️ in India for the World</span>
          <span className="hidden md:inline">|</span>
          <a href="mailto:viktechz@example.com" className="text-blue-400 hover:text-blue-300 font-semibold transition">
            Designed by VIKTECHZ
          </a>
        </div>
      </div>
    </footer>
  );
}