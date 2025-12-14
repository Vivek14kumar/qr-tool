import QRPage from "@/components/QRPage";

export const metadata = {
  title: "UPI QR Code Generator | Free QR Code Generator",
  description: "Generate UPI QR codes for shops, businesses, or personal use."
};

export default function UpiQR() {
  const blogContent = `
    <p>UPI QR codes allow instant payments for shops or personal use.</p>
    <h2>How to generate UPI QR Code:</h2>
    <ol>
      <li>Enter your UPI ID (example@upi)</li>
      <li>Enter Payee Name</li>
      <li>Click Generate QR</li>
      <li>Download and display your QR code</li>
    </ol>
  `;

  return (
    <QRPage
      title="UPI QR Code Generator"
      description="Create UPI QR codes quickly and securely for payments."
      placeholderText="UPI QR Generator Component"
      blogContent={blogContent}
    />
  );
}
