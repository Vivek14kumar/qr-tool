"use client";

import { useRef } from "react";
import Barcode from "react-barcode";

export default function BarcodeGenerator({ value }) {
  const svgRef = useRef(null);

  const downloadBarcode = () => {
    if (!svgRef.current) return;

    const svg = svgRef.current.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      
      const link = document.createElement("a");
      link.href = pngFile;
      link.download = "barcode.png";
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgString);
  };

  return (
    <div className="flex flex-col items-center">
      <div ref={svgRef}>
        <Barcode value={value} />
      </div>
      <button
        onClick={downloadBarcode}
        className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Download Barcode
      </button>
    </div>
  );
}
