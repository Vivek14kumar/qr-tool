import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free Video QR Code Generator | Link YouTube & TikTok to QR",
  description: "Convert any video link into a scannable QR code. Perfect for YouTube videos, TikToks, Reels, and tutorials. 100% free with no login required.",
};

export default function VideoQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a QR code for a Video",
    "description": "A step-by-step guide to generating a QR code that opens a video link on YouTube, Vimeo, or social media.",
    "step": [
      { "@type": "HowToStep", "text": "Copy the URL of your video from YouTube, TikTok, or your hosting provider." },
      { "@type": "HowToStep", "text": "Paste the video link into the generator field above." },
      { "@type": "HowToStep", "text": "Download the generated QR code and use it on posters, packaging, or invites." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>Bring Your Content to Life with Video QR Codes</h2>
      <p>Our <strong>Video QR Code Generator</strong> allows you to bridge the gap between physical products and digital storytelling. By converting a video link into a scannable QR code, you can provide your audience with instant access to tutorials, product demos, or personalized video messages. It’s a powerful tool for marketers, educators, and content creators.</p>
      
      <h3>Creative Ways to Use Video QR Codes:</h3>
      <ul>
        <li><strong>Product Tutorials:</strong> Place a QR code on packaging that leads to a "How-To" video on YouTube.</li>
        <li><strong>Real Estate Tours:</strong> Add QR codes to property flyers so buyers can take a virtual video tour instantly.</li>
        <li><strong>Wedding & Event Invites:</strong> Link to a "Save the Date" video or a personalized greeting for your guests.</li>
        <li><strong>Education & Training:</strong> Teachers can add QR codes to textbooks that link to relevant educational videos or lectures.</li>
      </ul>

      <h3>How to Generate Your Video QR Code:</h3>
      <ol>
        <li><strong>Get Your Video Link:</strong> Copy the URL of your video. This tool works perfectly with <strong>YouTube, Vimeo, TikTok, Instagram Reels,</strong> and direct MP4 links.</li>
        <li><strong>Paste & Generate:</strong> Paste the link into the generator box above. Our tool instantly creates a high-density QR code optimized for video links.</li>
        <li><strong>Customize:</strong> Change the colors or add a play-button logo to the center of your QR code to signal to users that it leads to a video.</li>
        <li><strong>Download & Share:</strong> Save your code as a PNG or SVG and place it on your marketing materials.</li>
      </ol>

      <p><em>Pro Tip: When linking to YouTube, use the "Share" link format (youtu.be/...) to ensure the video opens directly in the YouTube app on most smartphones!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for Video-to-QR Rich Results */}
      <Script
        id="video-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="Video QR Code Generator"
        description="Transform any video link into a professional QR code. Support for YouTube, TikTok, and more."
        placeholderText="Video QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}