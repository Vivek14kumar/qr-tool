export function buildQRData(type, data) {
  switch (type) {
    case "url":
      return data.url;

    case "text":
      return data.text;

    case "phone":
      return `tel:${data.number}`;

    case "sms":
      return `SMSTO:${data.number}:${data.message || ""}`;

    case "email":
      return `mailto:${data.email}?subject=${data.subject || ""}&body=${data.body || ""}`;

    case "wifi":
      return `WIFI:T:${data.security};S:${data.ssid};P:${data.password};;`;

    case "upi":
      return `upi://pay?pa=${data.vpa}&pn=${data.name}`;

    case "whatsapp":
      return `https://wa.me/${data.number}?text=${encodeURIComponent(
        data.message || ""
      )}`;

    case "video":
    case "image":
    case "pdf":
      return data.url; // link to file

    case "vcard":
      return `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName}
FN:${data.firstName} ${data.lastName}
TEL:${data.phone}
EMAIL:${data.email}
ORG:${data.company}
END:VCARD`;

    case "barcode":
      return data.code;

    default:
      return "";
  }
}
