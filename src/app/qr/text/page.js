import QRPage from "@/components/QRPage";

export const metadata = {
  title: "Text QR Code Generator | Free QR Code Generator",
  description: "Generate QR codes for plain text instantly."
};

export default function TextQR() {
  const blogContent = `
    <p>Text QR codes allow sharing any textual information via QR code.</p>
    <h2>How to generate Text QR Code:</h2>
    <ol>
      <li>Enter your text</li>
      <li>Click Generate QR</li>
    </ol>
  `;

  return (
    <QRPage
      title="Text QR Code Generator"
      description="Create QR codes for plain text easily."
      placeholderText="Text QR Generator Component"
      blogContent={blogContent}
    />
  );
}
