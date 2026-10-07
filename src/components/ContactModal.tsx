"use client";

import React, { useState, useEffect, useId } from "react";
import { CONTACT_CONFIG } from "@/config/contactConfig";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ContactModal({ isOpen, onClose, initialService }: ContactModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    timeline: "Within 1 month",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedChannel, setSubmittedChannel] = useState<"whatsapp" | "email" | null>(null);

  // Sync initial service if supplied
  useEffect(() => {
    if (initialService) {
      setSelectedServices((prev) => (prev.includes(initialService) ? prev : [...prev, initialService]));
    }
  }, [initialService]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmittedChannel(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.contact = "Please provide either an email address or phone number";
    } else if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMessageBody = (isPlainForEmail = false) => {
    const servicesListStr = selectedServices.length > 0 ? selectedServices.join(", ") : "General Enquiry / Not specified";

    if (isPlainForEmail) {
      return (
        `Hi ${CONTACT_CONFIG.companyName} Team,\n\n` +
        `I would like to start a conversation regarding your services.\n\n` +
        `--- MY DETAILS ---\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email || "Not provided"}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Company / Practice: ${formData.company || "Not provided"}\n\n` +
        `--- ENQUIRY DETAILS ---\n` +
        `Services Required: ${servicesListStr}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Message / Requirements:\n` +
        `${formData.message ? formData.message : "Looking forward to hearing from you."}\n\n` +
        `Best regards,\n` +
        `${formData.name}`
      );
    }

    // WhatsApp formatted with markdown
    return (
      `*New Conversation Request - ${CONTACT_CONFIG.companyName}*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email || "N/A"}\n` +
      `📞 *Phone:* ${formData.phone || "N/A"}\n` +
      `🏢 *Company / Practice:* ${formData.company || "N/A"}\n` +
      `⏱️ *Timeline:* ${formData.timeline}\n\n` +
      `📌 *Selected Services:*\n${selectedServices.length > 0 ? selectedServices.map((s) => `• ${s}`).join("\n") : "• General Enquiry"}\n\n` +
      `💬 *Message:*\n${formData.message ? formData.message : "Hello, I'd like to discuss working together."}`
    );
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateMessageBody(false);
    const cleanNumber = CONTACT_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    setSubmittedChannel("whatsapp");
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Enquiry from ${formData.name} - ${selectedServices.slice(0, 2).join(", ") || CONTACT_CONFIG.companyName}`;
    const body = generateMessageBody(true);
    const mailtoUrl = `mailto:${CONTACT_CONFIG.emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmittedChannel("email");
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = () => {
    const text = generateMessageBody(true);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Flattened or filtered services
  const categories = ["All", ...CONTACT_CONFIG.servicesList.map((cat) => cat.category)];
  const displayServices =
    selectedCategory === "All"
      ? CONTACT_CONFIG.servicesList.flatMap((c) => c.services.map((s) => ({ service: s, category: c.category })))
      : CONTACT_CONFIG.servicesList
          .find((c) => c.category === selectedCategory)
          ?.services.map((s) => ({ service: s, category: selectedCategory })) || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-3xl bg-[#0B132B] border border-slate-700/60 text-white rounded-2xl shadow-2xl shadow-black/60 overflow-hidden my-auto z-10 transition-all duration-300 flex flex-col max-h-[92vh]"
      >
        {/* Decorative Top Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />

        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-slate-800 flex items-start justify-between gap-4 bg-[#080E1E]/80">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              START A CONVERSATION
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Let&apos;s Find Your Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select the services you need, enter your contact details, and connect directly via WhatsApp or Email.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-sm">
          {/* Notification on action */}
          {submittedChannel && (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm">
                    {submittedChannel === "whatsapp" ? "Redirecting to WhatsApp..." : "Opening your Email Client..."}
                  </p>
                  <p className="text-xs text-emerald-300/80">
                    Your details and service preferences have been pre-formatted for instant submission.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="shrink-0 text-xs px-2.5 py-1.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 font-medium transition-colors"
              >
                {copied ? "Copied!" : "Copy Summary"}
              </button>
            </div>
          )}

          {/* SECTION 1: Service Selection */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <label className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-2">
                <span>1. Select Services of Interest</span>
                {selectedServices.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                    {selectedServices.length} selected
                  </span>
                )}
              </label>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[11px] px-2.5 py-1 rounded-full transition-all ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white font-medium shadow-sm"
                        : "bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2 max-h-44 overflow-y-auto p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              {displayServices.map(({ service, category }) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-150 flex items-center gap-1.5 text-left ${
                      isSelected
                        ? "bg-blue-600 border-blue-500 text-white font-medium shadow-md shadow-blue-600/20"
                        : "bg-slate-800/50 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                    }`}
                  >
                    <span>{isSelected ? "✓" : "+"}</span>
                    <span>{service}</span>
                    <span className="text-[10px] opacity-60 ml-0.5 hidden sm:inline">({category})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: Contact Information */}
          <div className="space-y-4">
            <label className="block text-xs sm:text-sm font-semibold text-slate-200">
              2. Your Contact Information
            </label>

            {errors.contact && (
              <p className="text-xs text-rose-400 font-medium bg-rose-950/40 border border-rose-500/30 p-2 rounded-lg">
                ⚠️ {errors.contact}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Name */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Alex Morgan / Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-sm ${
                    errors.name ? "border-rose-500" : "border-slate-700 hover:border-slate-600"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@organisation.co.uk"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email || errors.contact) setErrors({ ...errors, email: "", contact: "" });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-sm ${
                    errors.email ? "border-rose-500" : "border-slate-700 hover:border-slate-600"
                  }`}
                />
                {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +44 7123 456789"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.contact) setErrors({ ...errors, contact: "" });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-sm"
                />
              </div>

              {/* Company / Practice */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">Company / Practice Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Health Clinic / NHS Trust"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Timeline & Message */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="sm:col-span-1">
                <label className="block text-xs text-slate-400 mb-1">Estimated Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-600 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-sm cursor-pointer"
                >
                  <option value="Urgent (< 1 week)">Urgent (&lt; 1 week)</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1 - 3 months">1 - 3 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs text-slate-400 mb-1">
                  How can we help? (Optional notes)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us a bit about your current requirements, challenges or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-sm resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer - Dual Channels Action */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#080E1E] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 flex items-center gap-1.5 self-start sm:self-center">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Direct instant connection. No spam.</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {/* WhatsApp Submit Button */}
            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Chat via WhatsApp</span>
            </button>

            {/* Email Submit Button */}
            <button
              type="button"
              onClick={handleEmailRedirect}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Send via Email</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
