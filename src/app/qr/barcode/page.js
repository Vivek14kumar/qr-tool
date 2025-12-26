import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free Barcode Generator Online | Create Barcodes for Inventory",
  description: "Generate high-quality barcodes for products, retail, and inventory management. 100% free, no login required, and print-ready results.",
};

export default function BarcodePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to generate a free Barcode online",
    "description": "Step-by-step guide to creating barcodes for products and inventory tracking.",
    "step": [
      { "@type": "HowToStep", "text": "Enter the text or numeric value for your barcode." },
      { "@type": "HowToStep", "text": "Click the Generate Barcode button to create the visual code." },
      { "@type": "HowToStep", "text": "Download the barcode as a high-resolution PNG or SVG file for printing." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Professional Online Barcode Generator for Business</h2>
      <p>Our <strong>free barcode generator</strong> is a powerful tool designed for small businesses, retailers, and warehouse managers. Unlike other tools that charge for high-resolution downloads, our service allows you to create <strong>print-ready barcodes</strong> for tracking, inventory management, and retail use at zero cost.</p>
      
      <h3>Why use our Barcode Generator?</h3>
      <ul>
        <li><strong>Inventory Ready:</strong> Ideal for creating SKU labels, asset tags, and shelf labels.</li>
        <li><strong>High-Resolution Downloads:</strong> Get crisp, clear images that scan perfectly every time.</li>
        <li><strong>Privacy First:</strong> Your barcode data is processed in your browser—we never store your private information.</li>
        <li><strong>No Limits:</strong> Generate an unlimited number of barcodes without any registration or login.</li>
      </ul>

      <h3>How to Generate Your Barcode:</h3>
      <ol>
        <li><strong>Enter Data:</strong> Type the number or text string you want to encode (e.g., Product ID or Serial Number).</li>
        <li><strong>Click Generate:</strong> Our tool instantly creates a standardized barcode based on your input.</li>
        <li><strong>Customize & Save:</strong> Adjust the size to fit your labels and download the file.</li>
      </ol>

      <p><em>Pro Tip: For best results, print your barcodes using a laser printer or a dedicated thermal label printer to ensure the lines remain sharp for scanners.</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for Barcode "How-To" Rich Results */}
      <Script
        id="barcode-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="Barcode Generator"
        description="Create professional barcodes for retail, products, and inventory management instantly."
        placeholderText="Barcode Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}