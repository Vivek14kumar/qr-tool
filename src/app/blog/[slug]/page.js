import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamicParams = false;

// Map slugs to QR page links and titles
const BLOG_SLUGS = {
  "url-qr-code": { title: "URL QR Code Generator", link: "/qr/url" },
  "wifi-qr-code": { title: "WiFi QR Code Generator", link: "/qr/wifi" },
  "upi-qr-code": { title: "UPI QR Code Generator", link: "/qr/upi" },
  "whatsapp-qr-code": { title: "WhatsApp QR Code Generator", link: "/qr/whatsapp" },
  "text-qr-code": { title: "Text QR Code Generator", link: "/qr/text" },
  "sms-qr-code": { title: "SMS QR Code Generator", link: "/qr/sms" },
  "email-qr-code": { title: "Email QR Code Generator", link: "/qr/email" },
  "vcard-qr-code": { title: "vCard QR Code Generator", link: "/qr/vcard" },
  "pdf-qr-code": { title: "PDF QR Code Generator", link: "/qr/pdf" },
  "image-qr-code": { title: "Image QR Code Generator", link: "/qr/image" },
  "video-qr-code": { title: "Video QR Code Generator", link: "/qr/video" },
  "barcode-generator": { title: "Barcode Generator", link: "/qr/barcode" },
};

export async function generateStaticParams() {
  return Object.keys(BLOG_SLUGS).map(slug => ({ slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  if (!slug || !BLOG_SLUGS[slug]) {
    notFound();
  }

  const { title, link } = BLOG_SLUGS[slug];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16">
      <article className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          {title}
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
          Step-by-step guide to generate {title.toLowerCase()} quickly and easily.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
          >
            ← Back to Blog
          </Link>

          <Link
            href={link}
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform shadow-lg"
          >
            Generate QR/Barcode 🚀
          </Link>
        </div>
      </article>
    </main>
  );
}
