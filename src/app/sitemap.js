export default function sitemap() {
  const baseUrl = "https://freeqrgen.online";

  const staticRoutes = [
    "",
    "/blog",
    "/features",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/about",

    // QR Pages
    "/qr/url",
    "/qr/wifi",
    "/qr/upi",
    "/qr/whatsapp",
    "/qr/email",
    "/qr/phone",
    "/qr/text",
    "/qr/sms",
    "/qr/vcard",
    "/qr/pdf",
    "/qr/image",
    "/qr/video",
    "/qr/barcode",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
