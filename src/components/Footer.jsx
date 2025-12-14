import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            QR<span className="text-blue-400">Gen</span>
          </h3>
          <p className="text-sm mt-4 leading-relaxed text-slate-400 max-w-sm">
            Free QR Code Generator for URL, WiFi, WhatsApp, UPI payments,
            vCard, files & more. No signup required.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-white transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL / TRUST */}
        <div>
          <h4 className="text-white font-semibold mb-4">Why QRGen?</h4>
          <ul className="space-y-3 text-sm">
            <li>✅ 100% Free Forever</li>
            <li>✅ No Login Required</li>
            <li>✅ High Quality QR & Barcodes</li>
            <li>✅ Mobile & Desktop Friendly</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-700 py-4 text-center text-xs sm:text-sm text-slate-400 px-4">
        © {new Date().getFullYear()} QRGen · Built with ❤️ in India
        <span className="mx-2">|</span>
        Designed & Maintained by{" "}
        <a
          href="mailto:viktechz@example.com"
          className="text-blue-400 hover:text-blue-300 font-semibold"
        >
          VIKTECHZ
        </a>
      </div>
    </footer>
  );
}
