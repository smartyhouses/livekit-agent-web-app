"use client";

import { useRef } from "react";

export default function HomePage() {
  const iframeCode = `<iframe src="https://yourdomain.com/embed" style="width:220px; height:220px; border:none;"></iframe>`;
  const codeRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = () => {
    if (codeRef.current) {
      codeRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
          Voice AI Agent for Your Website
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-6">
          Engage your visitors instantly with real-time voice conversations.
          Easy to integrate, no coding hassle, works in any modern browser.
        </p>
        <a
          href="#demo"
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Try Live Demo
        </a>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 py-16 bg-gray-900">
        {[
          {
            title: "Lightning Fast",
            desc: "Connect and talk with AI in less than 1 second latency.",
          },
          {
            title: "Simple Integration",
            desc: "Just one iframe tag to embed anywhere.",
          },
          {
            title: "Fully Customizable",
            desc: "Adjust size, style, and voice to match your brand.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Live Demo */}
      <section
        id="demo"
        className="flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">Live Demo</h2>
        <iframe
          src="/embed"
          style={{
            width: "220px",
            height: "220px",
            border: "none",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        ></iframe>

        <p className="text-gray-400 mt-8 mb-2">Embed code:</p>
        <div className="flex items-center gap-2 w-full max-w-xl">
          <textarea
            ref={codeRef}
            value={iframeCode}
            readOnly
            className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 text-sm"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Copy
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Voice AI Agent. All rights reserved.
      </footer>
    </div>
  );
}
