import QRPage from "@/components/QRPage";

export const metadata = {
  title: "Barcode Generator | Free QR & Barcode Generator",
  description: "Generate barcodes for products, inventory, or other purposes."
};

export default function BarcodePage() {
  const blogContent = `
    <p>Barcodes are widely used for products, inventory, and tracking.</p>
    <h2>How to generate Barcode:</h2>
    <ol>
      <li>Enter the text or number for the barcode</li>
      <li>Click Generate Barcode</li>
      <li>Download the barcode as PNG or SVG</li>
    </ol>
  `;

  return (
    <QRPage
      title="Barcode Generator"
      description="Generate barcodes quickly for products or inventory."
      placeholderText="Barcode Generator Component"
      blogContent={blogContent}
    />
  );
}
