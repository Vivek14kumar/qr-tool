import QRPage from "@/components/QRPage";

export const metadata = {
  title: "Image QR Code Generator | Free QR Code Generator",
  description: "Generate QR codes to link images instantly."
};

export default function ImageQR() {
  const blogContent = `
    <p>Image QR codes allow users to view images by scanning QR codes.</p>
    <h2>How to generate Image QR Code:</h2>
    <ol>
      <li>Upload or provide image URL</li>
      <li>Click Generate QR</li>
      <li>Download and share the QR code</li>
    </ol>
  `;

  return (
    <QRPage
      title="Image QR Code Generator"
      description="Create QR codes for images quickly."
      placeholderText="Image QR Generator Component"
      blogContent={blogContent}
    />
  );
}
