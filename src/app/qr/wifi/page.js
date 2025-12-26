import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free WiFi QR Code Generator | Scan to Connect Tool",
  description: "Share your WiFi network without giving out your password. Generate a secure WiFi QR code for guests, cafes, and AirBnB. 100% Free & Secure.",
};

export default function WifiQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a WiFi QR Code for guests",
    "description": "Learn how to generate a QR code that allows users to scan and connect to your WiFi network instantly without typing a password.",
    "step": [
      { "@type": "HowToStep", "text": "Enter your network name (SSID) exactly as it appears on your router." },
      { "@type": "HowToStep", "text": "Input your WiFi password and select the security type (usually WPA/WPA2)." },
      { "@type": "HowToStep", "text": "Click Generate and print your QR code for guests to scan." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>The Safest Way to Share Your WiFi Network</h2>
      <p>Tired of repeating your complex WiFi password to every guest? Our <strong>WiFi QR Code Generator</strong> allows you to create a secure, scannable image that lets guests join your network instantly. No more typing errors, no more manual entries—just scan and connect.</p>
      
      <h3>Why Every Business & Home Needs a WiFi QR Code:</h3>
      <ul>
        <li><strong>AirBnB Hosts:</strong> Place a QR code in your welcome guide to make your guests feel at home immediately.</li>
        <li><strong>Restaurants & Cafes:</strong> Reduce the workload on your staff by letting customers scan a code on their table for internet access.</li>
        <li><strong>Improved Security:</strong> Guests don't need to see or type your actual password, reducing the risk of it being shared further.</li>
        <li><strong>Touchless Experience:</strong> Provide a modern, professional way for visitors to access your services.</li>
      </ul>

      <h3>How to Generate Your WiFi QR Code:</h3>
      <ol>
        <li><strong>Network Name (SSID):</strong> Enter the name of your WiFi. It must be exact, including capital letters and spaces.</li>
        <li><strong>Password:</strong> Enter the WiFi password. Don't worry, our tool is <strong>Privacy-First</strong>—your password is never sent to our servers; the code is generated locally.</li>
        <li><strong>Security Type:</strong> Most modern routers use <strong>WPA/WPA2/WPA3</strong>. If your network has no password, select 'None'.</li>
        <li><strong>Download & Print:</strong> Save your QR code and display it in a visible spot like your living room, reception desk, or guest bedroom.</li>
      </ol>

      <p><em>Pro Tip: If your WiFi network is "Hidden," make sure to check your router settings. Most smartphones can still connect to a hidden network via QR code if the SSID is entered correctly!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for WiFi-to-QR Rich Results */}
      <Script
        id="wifi-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="WiFi QR Code Generator"
        description="Let your guests join your network instantly. Create a secure WiFi QR code for your home, office, or business."
        placeholderText="WiFi QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}