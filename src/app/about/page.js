export const metadata = {
  title: "About Us | Free QR Code Generator",
  description: "Learn more about our free QR code generator platform."
};

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      
      <section className="max-w-4xl w-full bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          About Us
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            We provide a <span className="font-semibold text-blue-600">fast</span>, 
            <span className="font-semibold text-indigo-600"> simple</span>, and 
            <span className="font-semibold text-green-600"> completely free</span> QR Code Generator for
            businesses, students, and individuals.
          </p>

          <p>
            Our tool supports QR codes for 
            <span className="font-medium"> websites</span>, 
            <span className="font-medium"> WiFi</span>, 
            <span className="font-medium"> WhatsApp</span>, 
            <span className="font-medium"> UPI payments</span>, 
            <span className="font-medium"> contacts</span>, and more — 
            <span className="text-blue-600 font-semibold"> without requiring sign-up</span>.
          </p>

          <p>
            Our mission is to keep QR code creation 
            <span className="font-semibold text-indigo-600"> accessible</span>, 
            <span className="font-semibold text-blue-600"> secure</span>, and 
            <span className="font-semibold text-green-600"> effortless</span> for everyone.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 flex justify-center">
          <a
            href="/"
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform shadow-lg"
          >
            Generate QR Code 🚀
          </a>
        </div>

      </section>
    </main>
  );
}
