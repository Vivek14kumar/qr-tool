import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free vCard QR Code Generator | Digital Business Card Tool",
  description: "Generate vCard QR codes to share your name, phone, email, and company instantly. The perfect digital business card for professional networking.",
};

export default function VcardQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a vCard QR Code",
    "description": "Learn how to generate a digital business card QR code that saves your contact info directly to a phone.",
    "step": [
      { "@type": "HowToStep", "text": "Fill in your contact details including Name, Phone, Email, and Company." },
      { "@type": "HowToStep", "text": "Click Generate to create your personalized vCard QR code." },
      { "@type": "HowToStep", "text": "Download the image and add it to your phone wallpaper or printed business cards." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Professional Digital Business Card QR Generator</h2>
      <p>Our <strong>vCard QR Code Generator</strong> is the ultimate tool for modern networking. Instead of handing out paper cards that get lost, a vCard QR code allows anyone to scan and save your contact information directly into their smartphone's address book. It is the fastest, most eco-friendly way to share your professional identity.</p>
      
      <h3>Why Use vCard QR Codes for Networking?</h3>
      <ul>
        <li><strong>Zero Typing Required:</strong> Your name, phone number, email, and website are populated instantly in the user's contacts.</li>
        <li><strong>Eco-Friendly:</strong> Reduce paper waste by using a digital business card on your phone's lock screen.</li>
        <li><strong>Always Updated:</strong> You can generate a new code anytime your contact details change without reprinting thousands of cards.</li>
        <li><strong>Perfect for Events:</strong> Use it at conferences, trade shows, and meetups to stand out from the crowd.</li>
      </ul>

      <h3>How to Generate Your Digital Business Card:</h3>
      <ol>
        <li><strong>Enter Your Details:</strong> Provide your full name, mobile number, professional email, and company name.</li>
        <li><strong>Add More Info:</strong> You can even include your website URL and physical address for a complete profile.</li>
        <li><strong>Customize:</strong> Personalize the QR code colors to match your personal or corporate brand.</li>
        <li><strong>Save & Share:</strong> Download the file. For best results, save it on your phone so you can show it to anyone, anywhere.</li>
      </ol>

      <p><em>Pro Tip: Place your vCard QR code on the back of your physical business card or as your Zoom background to make it incredibly easy for people to reach you!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for vCard Rich Results */}
      <Script
        id="vcard-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="vCard QR Code Generator"
        description="Transform your contact details into a professional digital business card that anyone can scan and save instantly."
        placeholderText="vCard QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}