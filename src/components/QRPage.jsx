import Link from "next/link";

export default function QRPage({
  title,
  description,
  blogContent,
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16">
      <article className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          {title}
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
            {description}
          </p>
        )}

        {/* BLOG CONTENT */}
        {blogContent && (
          <div
            className="prose prose-lg max-w-none text-gray-800 mb-12"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
        )}

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            ← Back to Blog
          </Link>

          <Link
            href="/"
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform shadow-lg"
          >
            Generate QR / Barcode 🚀
          </Link>
        </div>

      </article>
    </main>
  );
}
