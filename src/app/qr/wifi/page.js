import QRPage from "@/components/QRPage";

export const metadata = {
  title: "WiFi QR Code Generator | Free QR Code Generator",
  description: "Generate WiFi QR codes for guests or customers to connect instantly."
};

export default function WifiQR() {
  const blogContent = `
    <p>WiFi QR codes allow guests to connect without manually entering passwords.</p>
    <h2>How to generate WiFi QR Code:</h2>
    <ol>
      <li>Enter WiFi network name (SSID)</li>
      <li>Enter password</li>
      <li>Select security type</li>
      <li>Click Generate QR</li>
    </ol>
  `;

  return (
    <QRPage
      title="WiFi QR Code Generator"
      description="Share your WiFi network instantly using a QR code."
      placeholderText="WiFi QR Generator Component"
      blogContent={blogContent}
    />
  );
}
