import Link from "next/link";
import {
  Globe,
  Wifi,
  IndianRupee,
  MessageCircle,
  Type,
  Mail,
  Phone,
  User,
  Image,
  Video,
  FileText,
  Barcode
} from "lucide-react";

export const metadata = {
  title: "Blog | Free QR Code Generator",
  description: "Read guides and tutorials about generating QR codes and barcodes."
};

const qrTypes = [
  { slug: "url-qr-code", title: "URL QR Code", icon: Globe },
  { slug: "wifi-qr-code", title: "WiFi QR Code", icon: Wifi },
  { slug: "upi-qr-code", title: "UPI QR Code", icon: IndianRupee },
  { slug: "whatsapp-qr-code", title: "WhatsApp QR Code", icon: MessageCircle },
  { slug: "text-qr-code", title: "Text QR Code", icon: Type },
  { slug: "phone-qr-code", title: "Phone QR Code", icon: Phone },
  { slug: "sms-qr-code", title: "SMS QR Code", icon: MessageCircle }, // reused
  { slug: "vcard-qr-code", title: "vCard QR Code", icon: User },
  { slug: "image-qr-code", title: "Image QR Code", icon: Image },
  { slug: "video-qr-code", title: "Video QR Code", icon: Video },
  { slug: "pdf-qr-code", title: "PDF QR Code", icon: FileText },
  { slug: "barcode-generator", title: "Barcode Generator", icon: Barcode }
];


export default function BlogListing() {
  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16">
      <section className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">

        <h1 className=" pb-2 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          Blog & QR Generators
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Explore step-by-step guides for generating QR codes and barcodes for different types.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {qrTypes.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href={`/qr/${item.slug.replace("-qr-code", "").replace("-generator", "")}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-blue-700 mb-1">{item.title}</h2>
                  <p className="text-gray-500 text-sm">Generate {item.title.toLowerCase()} quickly and free.</p>
                </div>
              </Link>
            );
          })}
        </div>

      </section>
      
    </main>
     {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform shadow-lg"
          >
           Back to Generate QR / Barcode 🚀
          </Link>
        </div>
    </>
  );
}
