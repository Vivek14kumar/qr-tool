"use client";

import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

export default function QRCodeGenerator({ data, options }) {
  if (!data) return null;

  // Dynamically scale QR based on viewport
  const getResponsiveSize = () => {
    if (typeof window === "undefined") return options.size;
    const width = window.innerWidth;
    if (width < 480) return Math.min(options.size, 200); // Mobile
    if (width < 768) return Math.min(options.size, 250); // Tablet
    return options.size; // Desktop
  };

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-4 w-full max-w-full"
    >
      {/* QR CODE CONTAINER */}
      <div className="relative w-full flex justify-center">
        <QRCodeCanvas
          id="qr-canvas"
          value={data}
          size={getResponsiveSize()}
          fgColor={options.color}
          bgColor={options.bgColor}
          level="H"
          imageSettings={
            options.logo
              ? {
                  src: options.logo,
                  height: Math.min(60, getResponsiveSize() * 0.2), // 20% of QR size
                  width: Math.min(60, getResponsiveSize() * 0.2),
                  excavate: true,
                }
              : undefined
          }
        />
      </div>

      {/* DOWNLOAD BUTTONS */}
      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <button
          onClick={() => downloadPNG()}
          className="px-4 py-2 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Download PNG
        </button>

        <button
          onClick={() => downloadSVG(data, options)}
          className="px-4 py-2 text-sm rounded-full border hover:bg-slate-100 transition"
        >
          Download SVG
        </button>
      </div>
    </motion.div>
  );
}

/* ---------------- DOWNLOAD HELPERS ---------------- */

function downloadPNG() {
  const canvas = document.getElementById("qr-canvas");
  if (!canvas) return;

  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  const link = document.createElement("a");
  link.href = pngUrl;
  link.download = "qr-code.png";
  link.click();
}

function downloadSVG(data, options) {
  const svg = document.createElement("div");
  svg.innerHTML = ` 
    <svg xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        ${document.getElementById("qr-canvas")?.outerHTML || ""}
      </foreignObject>
    </svg>
  `;

  const blob = new Blob([svg.innerHTML], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "qr-code.svg";
  link.click();
}
