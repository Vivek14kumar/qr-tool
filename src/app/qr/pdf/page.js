import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free PDF QR Code Generator | Link Documents to QR",
  description: "Create QR codes for PDF files instantly. Perfect for digital menus, product manuals, and resumes. 100% free with high-resolution downloads.",
};

export default function PdfQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a QR code for a PDF file",
    "description": "A comprehensive guide to generating a QR code that opens a PDF document when scanned.",
    "step": [
      { "@type": "HowToStep", "text": "Upload your PDF to a cloud storage service like Google Drive or Dropbox." },
      { "@type": "HowToStep", "text": "Ensure the file is set to 'Public' and copy the shareable link." },
      { "@type": "HowToStep", "text": "Paste the PDF URL into our generator and click Generate QR Code." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Convert PDF Documents to Scannable QR Codes</h2>
      <p>Our <strong>PDF QR Code Generator</strong> provides a touchless way to share important documents. By linking a PDF to a QR code, you can distribute menus, instruction manuals, or event programs without the need for physical printing. It’s the perfect solution for businesses looking to go paperless and provide instant information to their customers.</p>
      
      <h3>Top Use Cases for PDF QR Codes:</h3>
      <ul>
        <li><strong>Contactless Menus:</strong> Most restaurants now use QR codes to link to a PDF menu for a safer dining experience.</li>
        <li><strong>Product Manuals:</strong> Include a small QR code on your product packaging that links to a full PDF instruction guide.</li>
        <li><strong>Resumes & Portfolios:</strong> Add a QR code to your printed resume so employers can instantly view your digital portfolio or full CV.</li>
        <li><strong>Real Estate Brochures:</strong> Give potential buyers instant access to property details and high-quality floor plans.</li>
      </ul>

      <h3>How to Generate Your PDF QR Code:</h3>
      <ol>
        <li><strong>Upload Your File:</strong> Since QR codes store data as a link, upload your PDF to a service like Google Drive, iCloud, or your own website.</li>
        <li><strong>Get the Link:</strong> Make sure the sharing settings are set to "Anyone with the link can view." Copy that URL.</li>
        <li><strong>Create the Code:</strong> Paste the link into the field above. Our tool will instantly create your custom PDF QR code.</li>
        <li><strong>Download & Test:</strong> Download the image and scan it with your phone to ensure the PDF opens correctly before you print it.</li>
      </ol>

      <p><em>Pro Tip: Use a URL shortener if your PDF link is very long; this keeps the QR code pattern simple and easier for older smartphones to scan!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for PDF-to-QR Rich Results */}
      <Script
        id="pdf-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="PDF QR Code Generator"
        description="Make your documents easily accessible by converting your PDF links into professional QR codes."
        placeholderText="PDF QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}