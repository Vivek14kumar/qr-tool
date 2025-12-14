import {
  QrCode,
  Palette,
  Image,
  Download,
  Lock,
  Smartphone,
  Gift
} from "lucide-react";

export const metadata = {
  title: "Features | Free QR Code Generator",
  description: "All features of our free QR code generator tool."
};

export default function Features() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16">
      
      <section className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          QR Code Generator Features
        </h1>

        <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-12"></div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[
            {
              icon: QrCode,
              text: "Generate QR codes for URL, WiFi, WhatsApp, UPI, Email, Phone etc.."
            },
            {
              icon: Palette,
              text: "Custom colors & background"
            },
            {
              icon: Image,
              text: "Add logo inside QR code"
            },
            {
              icon: Download,
              text: "Download in PNG & SVG formats"
            },
            {
              icon: Lock,
              text: "No login or signup required"
            },
            {
              icon: Smartphone,
              text: "Mobile & desktop friendly"
            },
            {
              icon: Gift,
              text: "100% Free forever"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md">
                    <Icon size={24} />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/"
            className="px-10 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform shadow-lg"
          >
            Start Generating QR Codes 🚀
          </a>
        </div>

      </section>
    </main>
  );
}
