import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free WhatsApp QR Code Generator | Chat Link Creator",
  description: "Generate custom WhatsApp QR codes with pre-filled messages. Let customers chat with you instantly without saving your number. 100% Free.",
};

export default function WhatsappQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a WhatsApp QR Code for instant chat",
    "description": "A step-by-step guide to generating a QR code that opens a WhatsApp chat window automatically.",
    "step": [
      { "@type": "HowToStep", "text": "Enter your phone number starting with the country code (e.g., +91 for India)." },
      { "@type": "HowToStep", "text": "Add an optional custom message that users can send to you instantly." },
      { "@type": "HowToStep", "text": "Download your QR code and use it on your website, business card, or social media." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Grow Your Business with WhatsApp QR Codes</h2>
      <p>Our <strong>WhatsApp QR Code Generator</strong> is designed to remove friction between you and your customers. Instead of forcing users to manually save your phone number to their contacts, they can simply scan your code and start a conversation in seconds. This is the ultimate tool for customer support, sales inquiries, and professional networking.</p>
      
      <h3>Top Benefits of Using WhatsApp QR Codes:</h3>
      <ul>
        <li><strong>Instant Connection:</strong> Users skip the "Save Contact" step, leading to 3x higher engagement rates.</li>
        <li><strong>Pre-filled Messages:</strong> Know exactly what the customer wants by setting a default message like "I'm interested in your product."</li>
        <li><strong>Perfect for Marketing:</strong> Use these codes on Instagram stories, Facebook ads, or printed flyers to drive direct traffic to your WhatsApp Business.</li>
        <li><strong>Free to Use:</strong> Create unlimited codes for different marketing campaigns without any subscription fees.</li>
      </ul>

      <h3>How to Generate Your WhatsApp QR Code:</h3>
      <ol>
        <li><strong>Phone Number:</strong> Input your full mobile number. Important: Always include the <strong>country code</strong> (e.g., +91, +1, +44) without the plus sign for the link to work globally.</li>
        <li><strong>Custom Message (Optional):</strong> Write a short greeting or inquiry. This will appear in the user's text box as soon as they scan.</li>
        <li><strong>Generate & Style:</strong> Click generate to see your code. Customize the colors to match your brand's aesthetic.</li>
        <li><strong>Test & Share:</strong> Scan the code yourself to ensure it opens the correct chat before you print it on your business cards or signage.</li>
      </ol>

      <p><em>Pro Tip: Place a WhatsApp QR code on your website's "Contact Us" page. Mobile users find it much easier to scan a code than to copy-paste a phone number!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for WhatsApp Rich Results */}
      <Script
        id="whatsapp-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="WhatsApp QR Code Generator"
        description="Allow anyone to message you instantly without saving your phone number. Create your scan-to-chat QR code for free."
        placeholderText="WhatsApp QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}