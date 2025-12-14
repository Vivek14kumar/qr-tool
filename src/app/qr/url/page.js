import QRPage from "@/components/QRPage";

export const metadata = {
  title: "URL QR Code Generator | Free QR Code Generator",
  description: "Generate QR codes for any website or URL instantly and share easily."
};

export default function UrlQR() {
  const blogContent = `
    <p>QR codes for URLs make it easy to share websites or links with anyone.</p>
    <h2>How to generate URL QR Code:</h2>
    <ol>
      <li>Enter your website or URL</li>
      <li>Click Generate QR</li>
      <li>Download the QR code as PNG or SVG</li>
    </ol>
  `;

  return (
    <QRPage
      title="URL QR Code Generator"
      description="Create QR codes for any website or link quickly and share with ease."
      placeholderText="URL QR Generator Component"
      blogContent={blogContent}
    />
  );
}
