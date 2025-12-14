import QRPage from "@/components/QRPage";

export const metadata = {
  title: "PDF QR Code Generator | Free QR Code Generator",
  description: "Generate QR codes for linking to PDF files instantly."
};

export default function PdfQR() {
  const blogContent = `
    <p>PDF QR codes allow quick access to PDF documents via scanning.</p>
    <h2>How to generate PDF QR Code:</h2>
    <ol>
      <li>Upload or provide PDF URL</li>
      <li>Click Generate QR</li>
      <li>Download and share the QR code</li>
    </ol>
  `;

  return (
    <QRPage
      title="PDF QR Code Generator"
      description="Generate QR codes for PDF files quickly."
      placeholderText="PDF QR Generator Component"
      blogContent={blogContent}
    />
  );
}
