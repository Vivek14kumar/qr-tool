import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free URL QR Code Generator | Link to Website & Social Media",
  description: "Create free, permanent QR codes for any website URL. No expiration, no login, and high-resolution downloads for printing. Perfect for marketing.",
};

export default function UrlQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a QR code for a Website URL",
    "description": "Learn how to convert any link or website address into a scannable QR code for free.",
    "step": [
      { "@type": "HowToStep", "text": "Copy the URL of the website you want to share." },
      { "@type": "HowToStep", "text": "Paste the link into the URL QR generator field above." },
      { "@type": "HowToStep", "text": "Generate and download your custom QR code in PNG or SVG format." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>The Best Tool to Convert Website Links to QR Codes</h2>
      <p>Our <strong>URL QR Code Generator</strong> is a professional-grade tool that allows you to turn any website address, landing page, or social media profile into a scannable image. These are <strong>Static QR codes</strong>, meaning they never expire and will work forever without any subscription fees.</p>
      
      <h3>Effective Ways to Use Website QR Codes:</h3>
      <ul>
        <li><strong>Business Cards:</strong> Link directly to your LinkedIn profile or portfolio website.</li>
        <li><strong>Marketing Materials:</strong> Add QR codes to flyers and posters to lead customers to your specific promotion or shop.</li>
        <li><strong>Social Media Growth:</strong> Link to your Instagram, TikTok, or YouTube channel to gain followers instantly.</li>
        <li><strong>Contactless Menus & Forms:</strong> Connect users to online menus, Google Forms, or survey links without typing a long URL.</li>
      </ul>

      <h3>How to Generate Your URL QR Code:</h3>
      <ol>
        <li><strong>Enter the Link:</strong> Copy the full URL from your browser (including https://) and paste it into the box.</li>
        <li><strong>Click Generate:</strong> Our system converts the link into a high-density QR pattern instantly.</li>
        <li><strong>Customize Design:</strong> Personalize your QR code with custom colors and even add your brand logo.</li>
        <li><strong>Download & Print:</strong> Save your code as a high-quality file. For professional printing, we recommend the SVG format for infinite scalability.</li>
      </ol>

      <p><em>Pro Tip: Always use the full URL including 'https://'. If you want to track how many people scan your code, use a URL shortener before generating the QR code!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for URL-to-QR Rich Results */}
      <Script
        id="url-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="URL QR Code Generator"
        description="Easily convert any website address or online link into a professional, high-resolution QR code."
        placeholderText="URL QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}