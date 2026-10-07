"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceData } from "@/data/servicesData";
import { useContactModal } from "@/context/ContactModalContext";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const data = getServiceData(params.slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openContactModal } = useContactModal();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A]">
      <Navbar variant="dark" />

      {/* ==================================================
          01 — SERVICE HERO (Dark navy premium hero)
          ================================================== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient text-white overflow-hidden" id="top">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <span>›</span>
            <span className="text-white font-bold">{data.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>{data.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] mb-6">
                {data.heroHeadline} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
                  {data.heroHeadlineHighlight}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
                {data.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openContactModal(data.name)}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Get Started
                </button>

                <Link
                  href="#case-studies"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-sm font-semibold rounded-full border border-slate-700/80 hover:border-slate-500 transition-all duration-200 backdrop-blur-sm"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right Hero Visual / Device Mockup */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-[#0F172A] p-4 text-white">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">primarycaredataservices.uk</span>
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                    {data.heroPreviewBadge}
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={data.heroImage}
                    alt={data.name}
                    className="w-full h-64 sm:h-80 object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-[#080E1E]/40 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">
                      {data.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {data.heroPreviewTitle}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Bottom 4-Strip Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {data.heroStrip.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <div className="text-xs text-slate-400">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — WHAT'S INCLUDED (White section with 6 cards)
          ================================================== */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <div className="section-tag">
              <span>WHAT&apos;S INCLUDED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {data.includedTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.includedDescription}
            </p>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.includedFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between card-hover-effect group shadow-sm hover:shadow-md hover:bg-white"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={feat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — SERVICE OVERVIEW (Two-column section)
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img
                  src={data.overviewImage}
                  alt={data.name}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
                    Proven Delivery
                  </span>
                  <div className="text-lg font-bold">{data.name} Excellence</div>
                </div>
              </div>
            </div>

            {/* Right Overview Description & 4 Bullet Benefits */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="section-tag">
                <span>SERVICE OVERVIEW</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                {data.overviewHeading} <br />
                <span className="text-blue-600">{data.overviewHeadingHighlight}</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                {data.overviewDescription}
              </p>

              {/* 4 Bullet Benefits */}
              <div className="space-y-3.5 w-full">
                {data.overviewBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 — OUR PROCESS (5-step horizontal process)
          ================================================== */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <span>{data.processEyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {data.processHeading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our structured 5-step methodology ensures total clarity, speed to value, and consistent high standards.
            </p>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {data.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50/70 border border-slate-200 rounded-2xl relative flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      Step {step.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          05 — TECHNOLOGIES / TOOLS (Logo cards with badge tags)
          ================================================== */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <span>TECHNOLOGIES WE USE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              {data.toolsHeading}
            </h2>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {data.tools.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center text-center shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {tool.name.charAt(0)}
                </div>
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </span>
                {tool.badge && (
                  <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-1">
                    {tool.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          06 — CASE STUDIES (3 relevant case-study cards)
          ================================================== */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200" id="case-studies">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <div className="section-tag">
                <span>CASE STUDIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Real Results for Real Businesses.
              </h2>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>View All Case Studies</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider text-blue-700 shadow-sm">
                    {cs.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {cs.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xl font-extrabold text-slate-900">{cs.metric1.value}</div>
                      <div className="text-xs text-slate-500">{cs.metric1.label}</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-blue-600">{cs.metric2.value}</div>
                      <div className="text-xs text-slate-500">{cs.metric2.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          07 — FAQ (Two-column layout with accordion)
          ================================================== */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Header */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="section-tag">
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Got Questions? <br />
                We&apos;ve Got Answers.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Have a specific question about our {data.name.toLowerCase()} service or process? We&apos;re here to help.
              </p>
              <button
                type="button"
                onClick={() => openContactModal(data.name)}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>Ask our specialist team</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-3.5">
              {data.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:text-blue-600 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 ml-4">
                      {openFaq === idx ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          08 — FINAL CTA (Dark navy premium CTA)
          ================================================== */}
      <section className="py-24 md:py-32 cta-gradient text-white relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag section-tag-dark">
              <span>{data.ctaEyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              {data.ctaHeading}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
              {data.ctaSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openContactModal(data.name)}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Start a Project
              </button>

              <button
                type="button"
                onClick={() => openContactModal(data.name)}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 backdrop-blur-sm cursor-pointer"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
