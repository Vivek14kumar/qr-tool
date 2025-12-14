import QRPage from "@/components/QRPage";

export const metadata = {
  title: "Email QR Code Generator | Free QR Code Generator",
  description: "Generate QR codes for sending emails quickly."
};

export default function EmailQR() {
  const blogContent = `
    <p>Email QR codes allow users to send prefilled emails instantly.</p>
    <h2>How to generate Email QR Code:</h2>
    <ol>
      <li>Enter recipient email</li>
      <li>Enter subject and message</li>
      <li>Click Generate QR</li>
    </ol>
  `;

  return (
    <QRPage
      title="Email QR Code Generator"
      description="Generate QR codes for quick email sending."
      placeholderText="Email QR Generator Component"
      blogContent={blogContent}
    />
  );
}
