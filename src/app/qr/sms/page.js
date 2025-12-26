import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free SMS QR Code Generator | Scan to Text Message Tool",
  description: "Generate QR codes that automatically open a prefilled SMS message. Ideal for marketing, registrations, and customer support. 100% free.",
};

export default function SmsQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create an SMS QR Code",
    "description": "Step-by-step instructions to generate a QR code that triggers a pre-filled text message.",
    "step": [
      { "@type": "HowToStep", "text": "Input the destination mobile phone number with country code." },
      { "@type": "HowToStep", "text": "Type the pre-defined message you want the user to send." },
      { "@type": "HowToStep", "text": "Generate the QR code and download it as an image for your marketing materials." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Simplify Mobile Communication with SMS QR Codes</h2>
      <p>Our <strong>SMS QR Code Generator</strong> allows you to bridge the gap between physical media and mobile messaging. When a user scans your QR code, their phone's messaging app opens instantly with your target phone number and a pre-written message already filled out. It’s the perfect way to increase engagement for marketing campaigns and support services.</p>
      
      <h3>Smart Ways to Use SMS QR Codes:</h3>
      <ul>
        <li><strong>Text-to-Join Marketing:</strong> Let customers join your loyalty program or newsletter by sending a "JOIN" keyword via scan.</li>
        <li><strong>Service Appointments:</strong> Allow clients to request a callback or book a service by scanning a code on your storefront.</li>
        <li><strong>Event Registrations:</strong> Simplify sign-ups for events—users just scan, hit send, and they're registered.</li>
        <li><strong>Contactless Support:</strong> Provide a "Text for Help" option on product packaging or in hotel rooms.</li>
      </ul>

      <h3>How to Generate Your SMS QR Code:</h3>
      <ol>
        <li><strong>Enter Mobile Number:</strong> Provide the recipient phone number. For global compatibility, always include the country code (e.g., +91 for India).</li>
        <li><strong>Write Your Message:</strong> Draft the message you want the user to send (e.g., "Interested in the summer sale"). Keep it concise.</li>
        <li><strong>Create & Customize:</strong> Click the generate button to see your code. You can change colors to match your brand.</li>
        <li><strong>Test Your Code:</strong> Scan the generated QR code with your own phone to ensure it triggers the messaging app correctly before printing.</li>
      </ol>

      <p><em>Pro Tip: Use SMS QR codes on real estate signs or yard signs to allow potential buyers to request property details instantly via text!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for SMS-to-QR Rich Results */}
      <Script
        id="sms-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="SMS QR Code Generator"
        description="Encourage instant mobile engagement by creating QR codes that pre-fill text messages for your users."
        placeholderText="SMS QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}