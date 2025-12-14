"use client";

import {
  ShieldCheck,
  Zap,
  Smartphone,
  Download,
  Sparkles,
  Lock,
  Globe,
  Smile,
} from "lucide-react";

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "100% Free Forever",
      desc: "Generate unlimited QR codes without registration, subscriptions, or hidden costs.",
      icon: ShieldCheck,
    },
    {
      title: "Instant QR Generation",
      desc: "Create QR codes in real-time with lightning-fast performance.",
      icon: Zap,
    },
    {
      title: "Mobile & Print Friendly",
      desc: "QR codes work perfectly on mobile devices and are print-ready in high quality.",
      icon: Smartphone,
    },
    {
      title: "Multiple QR Types",
      desc: "URL, WiFi, UPI, WhatsApp, SMS, vCard, PDF, Image, MP3, Video & more.",
      icon: Globe,
    },
    {
      title: "High Quality Downloads",
      desc: "Download QR codes in PNG & SVG formats with crystal-clear resolution.",
      icon: Download,
    },
    {
      title: "Custom Design Options",
      desc: "Change colors, background, and add logos to match your brand identity.",
      icon: Sparkles,
    },
    {
      title: "Privacy Focused",
      desc: "We don’t store your data. Everything is generated instantly in your browser.",
      icon: Lock,
    },
    {
      title: "Easy to Use",
      desc: "Simple, clean, and beginner-friendly interface with no learning curve.",
      icon: Smile,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Why Choose Our QR Code Generator?
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          We provide a fast, secure, and completely free way to create
          professional QR codes for personal and business use.
        </p>
      </section>

      {/* FEATURES GRID */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group bg-white rounded-2xl p-6 shadow-md border
                         hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div
                className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600
                           flex items-center justify-center mb-4
                           group-hover:bg-blue-600 group-hover:text-white transition"
              >
                <Icon size={24} />
              </div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
          Ready to Create Your QR Code?
        </h2>
        <p className="text-white/90 mb-6">
          No sign-up required. Generate your QR code in seconds.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-blue-600 font-bold
                     px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Generate QR Now 🚀
        </a>
      </section>
    </div>
  );
}
