"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/utils";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // TODO: wire to backend (e.g. POST /api/waitlist)
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-24 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-violet-900/30 to-[#080810]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-600/20 blur-[80px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Be the first to run an{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              always-on dev team
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Join developers who are rethinking how software gets built.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="you@yourcompany.com"
              required
              aria-invalid={!!error}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/15 transition-all aria-[invalid=true]:border-red-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:from-purple-500 hover:to-violet-400 transition-all duration-200 shadow-lg shadow-purple-500/30 whitespace-nowrap"
            >
              Join Waitlist
            </button>
            {error && (
              <p className="w-full text-sm text-red-400 text-left">{error}</p>
            )}
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 py-3">
            <span className="text-2xl">🎉</span>
            <p className="text-lg text-purple-300 font-semibold">You&apos;re on the list! We&apos;ll be in touch.</p>
          </div>
        )}

        <p className="text-sm text-gray-500">
          No credit card required. 14-day Pro trial for early access users.
        </p>
      </div>
    </section>
  );
}
