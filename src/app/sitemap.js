export default function sitemap() {
  const baseUrl = "https://freeqrgen.online";
  const types = ["url", "wifi", "upi", "whatsapp", "email", "phone", "text", "sms", "vcard", "pdf", "image", "video", "barcode"];

  const qrRoutes = types.map((type) => ({
    url: `${baseUrl}/qr/${type}`,
    lastModified: new Date(),
    changeFrequency: 'daily', // Change 'weekly' to 'daily'
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...qrRoutes,
  ];
}