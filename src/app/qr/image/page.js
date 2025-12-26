import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free Image to QR Code Generator | Convert Photos to QR",
  description: "Convert your images and photos into QR codes. Perfect for digital menus, portfolios, and sharing photos instantly. 100% free with no expiration.",
};

export default function ImageQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to convert an Image to a QR Code",
    "description": "A step-by-step guide to generating a QR code that links directly to an image or photo online.",
    "step": [
      { "@type": "HowToStep", "text": "Upload your image to a hosting service or provide a direct image URL." },
      { "@type": "HowToStep", "text": "Paste the image link into our Image QR generator field." },
      { "@type": "HowToStep", "text": "Click Generate and download your high-quality QR code image." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Transform Photos into Scannable QR Codes</h2>
      <p>Our <strong>Image QR Code Generator</strong> is the fastest way to share visual content. By converting an image URL into a QR code, you allow anyone to view your photos, infographics, or digital flyers simply by pointing their smartphone camera. This is an essential tool for modern marketing and contact-free information sharing.</p>
      
      <h3>Popular Uses for Image QR Codes:</h3>
      <ul>
        <li><strong>Digital Restaurant Menus:</strong> Replace physical menus with a scan-to-view digital version to save on printing costs.</li>
        <li><strong>Event Posters:</strong> Link to event maps or schedules directly from a promotional flyer.</li>
        <li><strong>Art Portfolios:</strong> Artists can place QR codes next to their work to lead viewers to a high-res gallery.</li>
        <li><strong>Real Estate:</strong> Realtors can use QR codes on "For Sale" signs to show interior photos of a property instantly.</li>
      </ul>

      <h3>How to Create Your Image QR Code:</h3>
      <ol>
        <li><strong>Host Your Image:</strong> Ensure your image is uploaded to a cloud service (like Google Drive, Dropbox, or your website) and is set to 'Public'.</li>
        <li><strong>Paste the Link:</strong> Copy the direct image URL and paste it into the generator box above.</li>
        <li><strong>Customize & Generate:</strong> Choose your brand colors, add a logo, and click the generate button.</li>
        <li><strong>Test & Share:</strong> Always scan the code yourself to ensure the image loads correctly before printing.</li>
      </ol>

      <p><em>Pro Tip: Use high-resolution images but ensure they are optimized for web so they load quickly when users scan your code!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for Image-to-QR Rich Results */}
      <Script
        id="image-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="Image to QR Code Generator"
        description="Share your photos, menus, and flyers instantly by converting them into a scannable QR code."
        placeholderText="Image QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}