"use client";

import { useEffect } from "react";
import Script from "next/script";

const faqs = [
  {
    question: "How do I generate a QR code?",
    answer: "Select a type, fill in the required details, customize the color and logo, then click 'Generate QR Code'.",
  },
  {
    question: "Is this QR code generator free?",
    answer: "Yes! Our QR code generator is 100% free and requires no login.",
  },
  {
    question: "Can I download the QR code as PNG or SVG?",
    answer: "Absolutely. After generating the QR, you can download it as PNG or SVG using the download buttons.",
  },
  {
    question: "Can I create QR codes for WiFi, UPI, and vCards?",
    answer: "Yes, we support multiple QR types including URL, WiFi, UPI, WhatsApp, SMS, vCard, PDF, Image, Video, and Barcode.",
  },
  {
    question: "Is this tool mobile-friendly?",
    answer: "Yes, our QR generator works perfectly on all screen sizes including mobile and tablets.",
  },
];

export default function FAQPage() {
  // Add structured data JSON-LD for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        }
      }))
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-blue-600">
        Frequently Asked Questions
      </h1>

      <p className="text-center text-slate-600 mb-12">
        Answers to the most common questions about our QR code generator.
      </p>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-white/50 backdrop-blur-md rounded-2xl border border-white/30 p-5 shadow-md transition hover:shadow-lg"
          >
            <summary className="cursor-pointer font-semibold text-lg text-slate-800">
              {faq.question}
            </summary>
            <p className="mt-3 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>

      {/* AdSense Slot */}
      <div className="mt-12 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", maxWidth: "728px", height: "90px" }}
          data-ad-client="ca-pub-XXXXXXXXXXXX" // replace with your AdSense client ID
          data-ad-slot="XXXXXXXXXX" // replace with your Ad slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <Script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}
