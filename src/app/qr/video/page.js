import QRPage from "@/components/QRPage";

export const metadata = {
  title: "Video QR Code Generator | Free QR Code Generator",
  description: "Generate QR codes for linking videos instantly."
};

export default function VideoQR() {
  const blogContent = `
    <p>Video QR codes allow users to watch videos instantly via QR scan.</p>
    <h2>How to generate Video QR Code:</h2>
    <ol>
      <li>Provide video URL (YouTube, MP4, etc.)</li>
      <li>Click Generate QR</li>
      <li>Download and share the QR code</li>
    </ol>
  `;

  return (
    <QRPage
      title="Video QR Code Generator"
      description="Create QR codes for videos quickly."
      placeholderText="Video QR Generator Component"
      blogContent={blogContent}
    />
  );
}
