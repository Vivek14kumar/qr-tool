import QRPage from "@/components/QRPage";
import Script from "next/script";

export const metadata = {
  title: "Free Text QR Code Generator | Convert Plain Text to QR",
  description: "Create QR codes for plain text, notes, and raw data. 100% free, works offline, and requires no login. Perfect for sharing information instantly.",
};

export default function TextQR() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to generate a Text QR Code",
    "description": "A simple guide to converting any plain text into a scannable QR code.",
    "step": [
      { "@type": "HowToStep", "text": "Type or paste your text into the input field." },
      { "@type": "HowToStep", "text": "Click the Generate QR Code button to create the visual image." },
      { "@type": "HowToStep", "text": "Download and save the QR code for printing or digital sharing." }
    ]
  };

  const blogContent = `
    <div class="seo-content mt-12 space-y-6">
      <h2>The Most Versatile Plain Text QR Code Generator</h2>
      <p>Our <strong>Text QR Code Generator</strong> is the simplest way to share any written information without a URL. Whether you want to share a secret note, a serial number, or a set of instructions, converting <strong>text to QR code</strong> ensures that the data is transferred accurately to any smartphone with a single scan.</p>
      
      <h3>Creative Ways to Use Text QR Codes:</h3>
      <ul>
        <li><strong>Inventory & Labeling:</strong> Encode part numbers, bin locations, or serial numbers for easy warehouse tracking.</li>
        <li><strong>Event Scavenger Hunts:</strong> Hide clues or messages in QR codes for interactive games and team-building events.</li>
        <li><strong>Business Information:</strong> Share operating hours, promo codes, or physical addresses without needing a website.</li>
        <li><strong>Education:</strong> Teachers can use text QR codes to provide answer keys or extra notes on printed worksheets.</li>
      </ul>

      <h3>How to Create Your Text QR Code:</h3>
      <ol>
        <li><strong>Input Your Text:</strong> Enter anything from a single word to a short paragraph. Note that more text makes the QR code pattern denser.</li>
        <li><strong>Generate the Code:</strong> Click the button to instantly render your data into a scannable image.</li>
        <li><strong>Customize the Design:</strong> Adjust the colors to match your theme or brand identity.</li>
        <li><strong>Save & Use:</strong> Download the file in high resolution (PNG/SVG) for crystal-clear printing on any surface.</li>
      </ol>

      <p><em>Pro Tip: Keep your text concise. While QR codes can hold a lot of data, shorter text results in a "simpler" pattern that is easier for older phone cameras to scan quickly!</em></p>
    </div>
  `;

  return (
    <>
      {/* JSON-LD Schema for Text-to-QR Rich Results */}
      <Script
        id="text-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QRPage
        title="Plain Text QR Code Generator"
        description="Quickly convert any text message, note, or raw data into a scannable QR code."
        placeholderText="Text QR Generator Component"
        blogContent={blogContent}
      />
    </>
  );
}