import QRPage from "@/components/QRPage";

export const metadata = {
  title: "vCard QR Code Generator | Free QR Code Generator",
  description: "Generate QR codes for sharing contact information instantly."
};

export default function VcardQR() {
  const blogContent = `
    <p>vCard QR codes let you share contact info quickly and easily.</p>
    <h2>How to generate vCard QR Code:</h2>
    <ol>
      <li>Enter your name, phone, email, and address</li>
      <li>Click Generate QR</li>
      <li>Share the QR code with others</li>
    </ol>
  `;

  return (
    <QRPage
      title="vCard QR Code Generator"
      description="Create QR codes to share contact details easily."
      placeholderText="vCard QR Generator Component"
      blogContent={blogContent}
    />
  );
}
