import QRPage from "@/components/QRPage";

export const metadata = {
  title: "SMS QR Code Generator | Free QR Code Generator",
  description: "Create QR codes that send prefilled SMS messages instantly."
};

export default function SmsQR() {
  const blogContent = `
    <p>SMS QR codes allow users to send a prefilled message quickly.</p>
    <h2>How to generate SMS QR Code:</h2>
    <ol>
      <li>Enter recipient number</li>
      <li>Enter your message</li>
      <li>Click Generate QR</li>
    </ol>
  `;

  return (
    <QRPage
      title="SMS QR Code Generator"
      description="Generate SMS QR codes for quick message sharing."
      placeholderText="SMS QR Generator Component"
      blogContent={blogContent}
    />
  );
}
