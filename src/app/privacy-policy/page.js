export const metadata = {
  title: "Privacy Policy | Free QR Code Generator",
  description: "Privacy policy of our free QR code generator tool."
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-16">
      
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-8">
          Privacy Policy
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-10"></div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
          
          <p>
            We respect your privacy. This website does <strong>not</strong> require users to
            register or provide personal information to generate QR codes.
          </p>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Cookies & Advertising
            </h2>
            <p>
              We use <strong>Google AdSense</strong> to display advertisements. Google may use
              cookies (such as the <em>DoubleClick cookie</em>) to show ads based on your visits
              to this and other websites.
            </p>
            <p className="mt-3">
              You can opt out of personalized advertising by visiting
              <span className="font-semibold text-blue-600"> Google Ads Settings</span>.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              QR Code Data
            </h2>
            <p>
              All QR code generation happens <strong>locally in your browser</strong>.
              We do not store, collect, or transmit your QR data to any server.
            </p>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-500 pt-6 border-t">
            By using our website, you agree to this Privacy Policy.
          </p>
        </div>

      </section>
    </main>
  );
}
