import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free Email QR Code Generator | Scan to Email Tool",
  description: "Create QR codes that automatically open a prefilled email with recipient, subject, and body. Perfect for customer support and feedback.",
};

export default function EmailQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to generate a Free Email QR Code",
    "description": "A guide to creating QR codes that trigger a pre-composed email when scanned.",
    "step": [
      { "@type": "HowToStep", "text": "Enter the recipient's email address, subject line, and default message." },
      { "@type": "HowToStep", "text": "Click Generate QR Code to create your custom scan-to-email link." },
      { "@type": "HowToStep", "text": "Download the high-resolution QR image and add it to your contact page or business card." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Professional Scan-to-Email QR Code Generator</h2>
      <p>Our <strong>Email QR code generator</strong> is a powerful way to simplify communication. When someone scans your QR code, their default mail app (like Gmail or Outlook) opens automatically with your email address, subject, and message already filled in. This eliminates typing errors and encourages more people to reach out to you.</p>
      
      <h3>Key Benefits of Email QR Codes:</h3>
      <ul>
        <li><strong>Customer Feedback:</strong> Place QR codes on receipts or menus so customers can email feedback instantly.</li>
        <li><strong>Support Requests:</strong> Help users contact your support team without searching for your email address.</li>
        <li><strong>RSVPs & Events:</strong> Allow guests to send registration emails by simply scanning a poster.</li>
        <li><strong>100% Free:</strong> No hidden costs, no expiration dates, and no registration required.</li>
      </ul>

      <h3>How to Create Your Email QR Code:</h3>
      <ol>
        <li><strong>Email Address:</strong> Enter the primary email where you want to receive messages.</li>
        <li><strong>Subject Line:</strong> Add a clear subject like "Support Request" or "Inquiry" so you can filter your inbox easily.</li>
        <li><strong>Message Body:</strong> Provide a template message for the user to complete.</li>
        <li><strong>Download:</strong> Save your QR code in PNG or SVG format for high-quality printing.</li>
      </ol>

      <p><em>Pro Tip: Use an Email QR code on your "Contact Us" signage to provide a modern, touchless way for clients to get in touch!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for Email "How-To" Rich Results */}
      <Script
        id="email-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="Email QR Code Generator"
        description="Simplify communication by creating QR codes that pre-compose emails for your users."
        placeholderText="Email QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}