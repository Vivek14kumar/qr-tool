import QRPage from "@/components/QRPage";

export const metadata = {
  title: "WhatsApp QR Code Generator | Free QR Code Generator",
  description: "Create WhatsApp QR codes to start chats instantly."
};

export default function WhatsappQR() {
  const blogContent = `
    <p>WhatsApp QR codes make it easy for users to message you instantly.</p>
    <h2>How to generate WhatsApp QR Code:</h2>
    <ol>
      <li>Enter your phone number with country code</li>
      <li>Add optional message</li>
      <li>Click Generate QR</li>
    </ol>
  `;

  return (
    <QRPage
      title="WhatsApp QR Code Generator"
      description="Generate WhatsApp QR codes to allow instant chats."
      placeholderText="WhatsApp QR Generator Component"
      blogContent={blogContent}
    />
  );
}
