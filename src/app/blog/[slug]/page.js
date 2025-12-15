import { notFound } from "next/navigation";
import Link from "next/link";
import FAQSchema from "@/components/FAQSchema";

export const dynamicParams = false;

// Map slugs to QR page links and titles
const BLOG_SLUGS = {
  "url-qr-code": {
    title: "URL QR Code Generator",
    link: "/qr/url",
    description: "Create QR codes for website URLs easily and for free."
  },
  "wifi-qr-code": {
    title: "WiFi QR Code Generator",
    link: "/qr/wifi",
    description: "Generate WiFi QR codes to share network credentials instantly."
  },
  "upi-qr-code": {
    title: "UPI QR Code Generator",
    link: "/qr/upi",
    description: "Create UPI QR codes for shops, payments, and businesses."
  },
  "whatsapp-qr-code": {
    title: "WhatsApp QR Code Generator",
    link: "/qr/whatsapp",
    description: "Generate WhatsApp QR codes to start chats instantly."
  },
  "text-qr-code": {
    title: "Text QR Code Generator",
    link: "/qr/text",
    description: "Create QR codes for plain text messages."
  },
  "sms-qr-code": {
    title: "SMS QR Code Generator",
    link: "/qr/sms",
    description: "Generate SMS QR codes with predefined messages."
  },
  "email-qr-code": {
    title: "Email QR Code Generator",
    link: "/qr/email",
    description: "Create email QR codes with subject and body."
  },
  "vcard-qr-code": {
    title: "vCard QR Code Generator",
    link: "/qr/vcard",
    description: "Generate vCard QR codes for contact sharing."
  },
  "pdf-qr-code": {
    title: "PDF QR Code Generator",
    link: "/qr/pdf",
    description: "Create QR codes for PDF files."
  },
  "image-qr-code": {
    title: "Image QR Code Generator",
    link: "/qr/image",
    description: "Generate QR codes for images."
  },
  "video-qr-code": {
    title: "Video QR Code Generator",
    link: "/qr/video",
    description: "Create QR codes that link to videos."
  },
  "barcode-generator": {
    title: "Barcode Generator",
    link: "/qr/barcode",
    description: "Generate barcodes online for free."
  },
};

export async function generateStaticParams() {
  return Object.keys(BLOG_SLUGS).map((slug) => ({ slug }));
}

/* ---------------- SEO METADATA ---------------- */
export async function generateMetadata({ params }) {
  const data = BLOG_SLUGS[params.slug];

  if (!data) return {};

  return {
    title: `${data.title} | Free QR Code Generator`,
    description: data.description,
    keywords: [
      "free qr code generator",
      "qr code generator online",
      data.title.toLowerCase(),
      "barcode generator",
      "freeqrgen"
    ],
    alternates: {
      canonical: `https://freeqrgen.online/blog/${params.slug}`,
    },
  };
}

/* ---------------- PAGE ---------------- */
export default function BlogPost({ params }) {
  const data = BLOG_SLUGS[params.slug];
  if (!data) notFound();

  const { title, link, description } = data;

  const faqs = [
    {
      question: `What is ${title}?`,
      answer: `${title} allows you to create QR codes instantly without any cost or login.`,
    },
    {
      question: `Is ${title} free to use?`,
      answer: "Yes, this QR code generator is 100% free with unlimited usage.",
    },
    {
      question: `Can I use ${title} for business purposes?`,
      answer: "Yes, you can use generated QR codes for shops, marketing, and businesses.",
    },
  ];

  return (
    <>
      {/* ✅ FAQ Schema for Google Rich Results */}
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16">
        <article className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">

          <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {title}
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>

          <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
            {description} Learn how to generate it step by step using FreeQRGen.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
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
              Generate QR / Barcode 🚀
            </Link>
          </div>

        </article>
      </main>
    </>
  );
}
