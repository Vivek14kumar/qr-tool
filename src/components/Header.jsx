"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     bg-clip-text text-transparent"
        >
          QRGen
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/"
          className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-semibold text-white
                     bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition"
        >
          Generate QR 🚀
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full px-5 py-3 font-semibold text-white
                         bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Generate QR 🚀
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
