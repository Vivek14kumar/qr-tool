"use client";

import { useState } from "react";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import BarcodeGenerator from "@/components/BarcodeGenerator";
import { buildQRData } from "@/lib/qrDataBuilders";
import Ads from "@/components/Ads";
import {
  Globe,
  Wifi,
  IndianRupee,
  MessageCircle,
  Type,
  Mail,
  Phone,
  Image as ImageIcon,
  Video,
  FileText,
  Contact,
  Sparkles,
  Barcode,
} from "lucide-react";
import WhyChooseUsPage from "@/components/WhyChooseUs";
import FAQPage from "@/components/Faqs";

const qrTypes = [
  { id: "url", label: "Website", icon: Globe },
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "upi", label: "UPI", icon: IndianRupee },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "sms", label: "SMS", icon: MessageCircle },
  { id: "text", label: "Text", icon: Type },
  { id: "email", label: "Email", icon: Mail },
  { id: "phone", label: "Phone", icon: Phone },
  { id: "video", label: "Video", icon: Video },
  { id: "image", label: "Image", icon: ImageIcon },
  { id: "pdf", label: "PDF", icon: FileText },
  { id: "vcard", label: "vCard", icon: Contact },
  { id: "barcode", label: "Barcode", icon: Barcode },
];

export default function HomePage() {
  const [type, setType] = useState("url");
  const [formData, setFormData] = useState({});
  const [qrData, setQrData] = useState("");

  const [options, setOptions] = useState({
    size: 300,
    color: "#000000",
    bgColor: "#ffffff",
    logo: "",
  });

  const generateQR = () => {
    const data = buildQRData(type, formData);
    setQrData(data);
  };

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">

      {/* ================= HERO ================= */}
      <section className="relative text-center max-w-4xl mx-auto mb-16">
        <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20" />

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          Free QR Code Generator
        </h1>

        <p className="text-slate-600 text-base sm:text-lg md:text-xl">
          Create QR codes for URL, WiFi, UPI, WhatsApp & more.
          <span className="font-semibold text-slate-800">
            {" "}No login. 100% free.
          </span>
        </p>
      </section>

      {/* ================= TOOL ================= */}
      <section className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border p-5 sm:p-8 md:p-12 grid lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>

          {/* QR TYPES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {qrTypes.map((q) => {
              const Icon = q.icon;
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setType(q.id);
                    setQrData("");
                    setFormData({});
                  }}
                  className={`flex items-center gap-2 justify-center px-4 py-3 rounded-xl text-sm font-semibold transition
                    ${
                      type === q.id
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "bg-white border hover:bg-slate-100"
                    }`}
                >
                  <Icon size={16} />
                  {q.label}
                </button>
              );
            })}
          </div>

          <InputFields type={type} setFormData={setFormData} formData={formData} />

          {/* ================= CUSTOMIZE ================= */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg transition-all hover:shadow-2xl">
            <h3 className="font-bold text-xl sm:text-2xl mb-6 flex items-center gap-3 text-blue-600">
              <Sparkles size={22} /> Customize Your QR
            </h3>
                
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* QR Color */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2 text-slate-700">QR Color</label>
                <input
                  type="color"
                  value={options.color}
                  onChange={(e) => setOptions({ ...options, color: e.target.value })}
                  className="w-full h-12  cursor-pointer transition hover:scale-105"
                />
              </div>
                
              {/* Background Color */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2 text-slate-700">Background Color</label>
                <input
                  type="color"
                  value={options.bgColor}
                  onChange={(e) => setOptions({ ...options, bgColor: e.target.value })}
                  className="w-full h-12 rounded-xl  cursor-pointer transition hover:scale-105"
                />
              </div>
                
              {/* Logo Upload */}
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-sm font-medium mb-2 text-slate-700">Logo (Optional)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        logo: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                    className="w-full text-sm file:p-1 file:mr-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-blue-500 file:to-indigo-500 file:text-white file:font-semibold hover:file:from-indigo-500 hover:file:to-blue-500 cursor-pointer transition"
                  />
                  {options.logo && (
                    <div className="relative w-12 h-12">
                      <img
                        src={options.logo}
                        alt="Logo Preview"
                        className="w-12 h-12 rounded-full object-cover border border-gray-200"
                      />
                      <button
                        onClick={() => setOptions({ ...options, logo: "" })}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-lg hover:bg-red-600 transition"
                      >
                        ×
                      </button>
                    </div>
                      )}
                  </div>
                </div>
                    
                {/* Size Slider */}
                <div className="sm:col-span-2 flex flex-col">
                  <label className="text-sm font-medium mb-2 text-slate-700">Size ({options.size}px)</label>
                  <input
                    type="range"
                    min="100"
                    max="350"
                    value={options.size}
                    onChange={(e) => setOptions({ ...options, size: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg accent-indigo-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

          <button
            onClick={generateQR}
            className="mt-8 w-full py-4 rounded-2xl font-bold text-white text-lg
                       bg-gradient-to-r from-blue-600 to-indigo-600
                       hover:scale-[1.02] active:scale-95 transition shadow-xl"
          >
            {type === "barcode"?("Generate Barcode 🚀"):("Generate QR Code 🚀")}
          </button>

          <div className="mt-8">
            <Ads />
          </div>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 sm:p-8 border">
          {qrData ? (
            <>
              <div className="bg-white p-5 rounded-2xl shadow-lg">
                {type === "barcode" ? (
                  <BarcodeGenerator value={qrData} />
                ) : (
                  <QRCodeGenerator data={qrData} options={options} />
                )}
              </div>
              <p className="text-sm text-slate-500 mt-4 text-center">
                Download PNG / SVG · Works on all devices
              </p>
            </>
          ) : (
            <p className="text-slate-400 text-center">
              Your QR code preview will appear here
            </p>
          )}
        </div>
      </section>
    </div>
    <WhyChooseUsPage/>
    <FAQPage/>
    </>
  );
}

/* ================= HELPERS ================= */

function ColorPicker({ label, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type="color"
        className="mt-2 w-full h-11 rounded-xl border"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InputFields({ type, setFormData, formData }) {
  const inputClass = "w-full input rounded-xl mb-4";

  if (type === "url")
    return (
      <input
        className={inputClass}
        placeholder="https://example.com"
        onChange={(e) => {setFormData({ url: e.target.value }); setQrData("");}}
      />
    );

  if (type === "text")
    return (
      <textarea
        className={`${inputClass} h-28`}
        placeholder="Enter your text"
        onChange={(e) => {setFormData({ text: e.target.value }); setQrData("");}}
      />
    );

  if (type === "phone")
    return (
      <input
        className={inputClass}
        placeholder="Phone number"
        onChange={(e) => {setFormData({ number: e.target.value }); setQrData("");}}
      />
    );

  if (type === "wifi")
    return (
      <>
        <input
          className={inputClass}
          placeholder="WiFi Name (SSID)"
          onChange={(e) => {setFormData({ ...formData, ssid: e.target.value }); setQrData("");}}
        />
        <input
          className={inputClass}
          placeholder="Password"
          onChange={(e) => {setFormData({ ...formData, password: e.target.value }); setQrData("");}}
        />
        <select
          className={inputClass}
          onChange={(e) => setFormData({ ...formData, security: e.target.value })}
        >
          <option value="WPA">WPA / WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">No Password</option>
        </select>
      </>
    );

  if (type === "upi")
    return (
      <>
        <input
          className={inputClass}
          placeholder="UPI ID (example@upi)"
          onChange={(e) => {setFormData({ ...formData, vpa: e.target.value }); setQrData("");}}
        />
        <input
          className={inputClass}
          placeholder="Payee Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </>
    );

  if (type === "whatsapp")
    return (
      <>
        <input
          className={inputClass}
          placeholder="Mobile number with country code"
          onChange={(e) => {setFormData({ ...formData, number: e.target.value }); setQrData("");}}
        />
        <input
          className={inputClass}
          placeholder="Message (optional)"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </>
    );

  if (type === "email")
    return (
      <>
        <input
          className={inputClass}
          placeholder="Email address"
          onChange={(e) => {setFormData({ ...formData, email: e.target.value });setQrData("");}}
        />
        <input
          className={inputClass}
          placeholder="Subject"
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
        <textarea
          className={`${inputClass} h-24`}
          placeholder="Message"
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
      </>
    );

    if (type === "sms")
  return (
    <>
      <input
        className={inputClass}
        placeholder="Phone number"
        onChange={(e) =>{{
          setFormData({ ...formData, number: e.target.value });
          setQrData("");
        }}}
      />
      <textarea
        className={`${inputClass} h-24`}
        placeholder="Message"
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
      />
    </>
  );

  if (["video", "image", "pdf"].includes(type))
  return (
    <input
      className={inputClass}
      placeholder="Paste file URL"
      onChange={(e) => {setFormData({ url: e.target.value }); setQrData("");}}
    />
  );

  if (type === "vcard")
  return (
    <>
      <input className={inputClass} placeholder="First Name"
        onChange={(e) => {setFormData({ ...formData, firstName: e.target.value }); setQrData("");}}
      />
      <input className={inputClass} placeholder="Last Name"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <input className={inputClass} placeholder="Phone"
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input className={inputClass} placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input className={inputClass} placeholder="Company"
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
    </>
  );

  if (type === "barcode")
  return (
    <input
      className={inputClass}
      placeholder="Enter barcode value"
      onChange={(e) => {setFormData({ code: e.target.value }); setQrData("");}}
    />
  );

  return null;
}
