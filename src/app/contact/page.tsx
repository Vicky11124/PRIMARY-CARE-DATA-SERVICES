"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_CONFIG } from "@/config/contactConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Healthcare Support",
    message: "",
  });
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `*New Inquiry from Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || "Not provided"}\n` +
      `*Company:* ${formData.company || "Not provided"}\n` +
      `*Service Area:* ${formData.service}\n\n` +
      `*Message:* ${formData.message || "Looking to discuss options."}`;

    if (channel === "whatsapp") {
      const waUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        formattedMessage
      )}`;
      window.open(waUrl, "_blank");
    } else {
      const mailtoUrl = `mailto:${CONTACT_CONFIG.emailAddress}?subject=${encodeURIComponent(
        `Website Inquiry: ${formData.service} - ${formData.name}`
      )}&body=${encodeURIComponent(formattedMessage)}`;
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
  };

  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#050B17] text-white">
        {/* ==================================================
            HERO SECTION with Brand Blue Gradient & Contact Visual
            ================================================== */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 hero-gradient text-white overflow-hidden border-b border-slate-800">
          {/* Subtle Grid & Light Orbs */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>DIRECT UK COMMUNICATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Let&apos;s Discuss Your Project &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                  Operations.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
                Connect with our UK team to discuss business support, healthcare practice management, custom software development, or dedicated virtual assistants.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>&lt; 24h Response SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>UK Business Hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="py-20 bg-[#070E1E]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Send an Inquiry
                </h2>
                <p className="text-slate-400 text-sm mb-8">
                  Fill in your details below. You can send directly via WhatsApp or Email.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Inquiry Initialized!</h3>
                    <p className="text-sm text-slate-300 mb-6">
                      Your message has been formatted. If your browser blocked the window, you can click below to reopen.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#00E5FF] text-[#050B17] font-bold text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.co.uk"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 7000 000000"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Organisation / Practice
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Practice or Company Name"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Primary Service Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#00E5FF] transition-colors text-sm"
                      >
                        {CONTACT_CONFIG.servicesList.map((cat) => (
                          <optgroup key={cat.category} label={cat.category} className="bg-[#0F172A] text-white">
                            {cat.services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Message / Project Scope
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your requirements or operational challenges..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Channel Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Preferred Routing Method
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setChannel("whatsapp")}
                          className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            channel === "whatsapp"
                              ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                              : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                          }`}
                        >
                          <span>WhatsApp Direct</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setChannel("email")}
                          className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            channel === "email"
                              ? "bg-blue-500/20 border-blue-500 text-blue-400"
                              : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                          }`}
                        >
                          <span>Email Direct</span>
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="specular-button w-full group"
                    >
                      <span className="specular-beam animate-beam-spin" />
                      <span className="specular-inner w-full py-4 text-sm font-black uppercase tracking-wider">
                        <span className="specular-shimmer-highlight animate-beam-shimmer" />
                        <span>{channel === "whatsapp" ? "Connect on WhatsApp Direct" : "Send Email Inquiry"}</span>
                      </span>
                    </button>
                  </form>
                )}
              </div>

              {/* Information Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0F172A] border border-slate-800 p-8 rounded-3xl">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                    OFFICIAL CONTACT
                  </span>
                  <h3 className="text-xl font-bold text-white mb-6">
                    Direct Contact Channels
                  </h3>

                  <div className="space-y-6 text-sm">
                    {/* Direct Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00E5FF] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Direct Telephone</div>
                        <a
                          href={CONTACT_CONFIG.phoneTel}
                          className="font-bold text-white hover:text-[#00E5FF] transition-colors text-base"
                        >
                          {CONTACT_CONFIG.phoneNumber}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp Direct</div>
                        <a
                          href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-white hover:text-emerald-400 transition-colors"
                        >
                          {CONTACT_CONFIG.phoneNumber}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Email Address</div>
                        <a
                          href={`mailto:${CONTACT_CONFIG.emailAddress}`}
                          className="font-bold text-white hover:text-blue-400 transition-colors"
                        >
                          {CONTACT_CONFIG.emailAddress}
                        </a>
                      </div>
                    </div>

                    {/* Address (commented out for now, preserved for future use) */}
                    {/*
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Office Address</div>
                        <div className="font-bold text-white">{CONTACT_CONFIG.address}</div>
                        <div className="text-xs text-slate-400">United Kingdom</div>
                      </div>
                    </div>
                    */}

                    {/* Working Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Working Hours</div>
                        <div className="font-bold text-white">Mon – Fri: 08:30 – 17:30 UK Time</div>
                        <div className="text-xs text-slate-400">Excluding UK Bank Holidays</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F172A] border border-slate-800 p-8 rounded-3xl">
                  <h4 className="text-base font-bold text-white mb-3">
                    What Happens Next?
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>Inquiries are reviewed by a UK specialist within 1 business day.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>We schedule an initial discovery conversation to clarify requirements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>You receive a clear scope of work and transparent execution plan.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
