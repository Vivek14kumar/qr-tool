import QRPage from "@/components/QRPage";
import Script from "next/script"; // Import for the JSON-LD

export const metadata = {
  title: "Free UPI QR Code Generator | PhonePe, GPay, Paytm | No Fees",
  description: "Create free UPI QR codes for your shop or business. Accept payments via PhonePe, Google Pay, and Paytm with zero transaction fees. No login required.",
};

export default function UpiQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a free UPI QR Code for payments",
    "description": "Step-by-step guide to generating a UPI QR code for shops and personal use.",
    "step": [
      { "@type": "HowToStep", "text": "Enter your UPI ID (VPA) like name@upi." },
      { "@type": "HowToStep", "text": "Input the Payee Name (Your name or Business name)." },
      { "@type": "HowToStep", "text": "Customize colors and download the QR image." }
    ]
  };

  const blogContent = `
    <div className="seo-content mt-12 space-y-6">
      <h2>Free UPI QR Code Generator for Instant Payments</h2>
      <p>Accepting payments at your shop or for personal use has never been easier. Our <strong>UPI QR code generator</strong> creates a static QR code that works perfectly with <strong>PhonePe, Google Pay (GPay), Paytm, BHIM,</strong> and any other UPI-enabled banking app.</p>
      
      <h3>Why choose our UPI QR tool?</h3>
      <ul>
        <li><strong>0% Transaction Fees:</strong> Unlike payment gateways, UPI-to-UPI transfers are completely free for merchants and users.</li>
        <li><strong>Instant Settlement:</strong> Money is transferred directly into your bank account in real-time.</li>
        <li><strong>No Registration Required:</strong> Start generating codes instantly without providing email or phone numbers.</li>
      </ul>

      <h3>How to generate your UPI QR Code:</h3>
      <ol>
        <li><strong>Enter your UPI ID:</strong> This is your Virtual Payment Address (VPA) like <em>9876543210@ybl</em> or <em>name@okicici</em>.</li>
        <li><strong>Enter Payee Name:</strong> The name of the person or business receiving the money.</li>
        <li><strong>Generate & Download:</strong> Click generate, customize the design, and download it as a high-quality image.</li>
      </ol>

      <p><em>Pro Tip: Print this QR code and display it at your billing counter to allow customers to pay you in seconds!</em></p>
    </div>
  `;

  return (
    <>
      {/* Adding the JSON-LD Schema for Google Rich Results */}
      <Script
        id="upi-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="UPI QR Code Generator"
        description="Create secure UPI QR codes for PhonePe, GPay, and Paytm instantly."
        placeholderText="UPI QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}