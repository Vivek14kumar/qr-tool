export const metadata = {
  title: "Contact Us | Free QR Code Generator",
  description: "Contact us for support or feedback."
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4">
      
      <section className="max-w-3xl w-full bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Contact Us
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full mb-8"></div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center">
          <p>
            Have questions, feedback, or suggestions?  
            We’d love to hear from you.
          </p>

          {/* Contact Card */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-md inline-block">
            <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">
              Email Support
            </p>
            <p className="text-xl font-semibold text-indigo-600">
              viktechzweb@gmail.com
            </p>
          </div>

          <p className="text-sm text-gray-500">
            We usually reply within <span className="font-semibold">24–48 hours</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="/"
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 transition-transform shadow-lg"
          >
            Back to QR Generator 🚀
          </a>
        </div>

      </section>
    </main>
  );
}
