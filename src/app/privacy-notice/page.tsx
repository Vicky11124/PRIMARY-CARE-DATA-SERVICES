import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Notice | Primary Care Data Services Ltd",
  description:
    "Official Privacy Notice for Primary Care Data Services Ltd. Details on how we collect, use, store, and protect personal information under UK GDPR and the Data Protection Act 2018.",
  alternates: {
    canonical: "/privacy-notice",
  },
};

const sections = [
  { id: "section-1", num: "1", title: "Introduction" },
  { id: "section-2", num: "2", title: "Personal Information We Collect" },
  { id: "section-3", num: "3", title: "How We Use Personal Information" },
  { id: "section-4", num: "4", title: "Lawful Bases for Processing" },
  { id: "section-5", num: "5", title: "Independent Service Providers and Referrals" },
  { id: "section-6", num: "6", title: "Healthcare and Patient Information" },
  { id: "section-7", num: "7", title: "Who We May Share Information With" },
  { id: "section-8", num: "8", title: "International Data Transfers" },
  { id: "section-9", num: "9", title: "Data Security" },
  { id: "section-10", num: "10", title: "Data Retention" },
  { id: "section-11", num: "11", title: "Cookies and Website Analytics" },
  { id: "section-12", num: "12", title: "Marketing Communications" },
  { id: "section-13", num: "13", title: "Your Data Protection Rights" },
  { id: "section-14", num: "14", title: "Complaints" },
  { id: "section-15", num: "15", title: "External Websites" },
  { id: "section-16", num: "16", title: "Changes to This Notice" },
  { id: "section-17", num: "17", title: "Contact Us" },
];

export default function PrivacyNoticePage() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        {/* ==================================================
            HERO SECTION — Dark Premium Theme
            ================================================== */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#060B18] text-white overflow-hidden border-b border-slate-850">
          {/* Subtle Grid and Glow Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container-custom relative z-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-white font-bold">Privacy Notice</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>UK GDPR & DATA PROTECTION ACT 2018</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
                Privacy Notice
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium mb-3">
                Primary Care Data Services Ltd
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 mb-8">
                <span className="inline-flex items-center gap-1.5 text-slate-300 font-semibold">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Last updated: 12 October 2026
                </span>
                <span className="text-slate-600">•</span>
                <span>Company No: 17506485</span>
                <span className="text-slate-600">•</span>
                <span>17 Numbered Sections</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="/privacy-notice-pcds.pdf"
                  download="privacy-notice-pcds.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Privacy Notice (PDF)</span>
                </a>

                <a
                  href="/privacy-notice-pcds.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open PDF in Tab</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            MAIN CONTENT AREA
            ================================================== */}
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Navigation & Quick Info (Desktop) */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents Card */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Document Navigation
                    </h2>
                    <span className="text-[11px] font-semibold text-slate-500">17 Sections</span>
                  </div>

                  <nav aria-label="Privacy Notice Sections" className="max-h-[60vh] overflow-y-auto pr-1 space-y-1 text-xs">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="group flex items-start gap-2.5 py-1.5 px-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
                      >
                        <span className="font-mono font-bold text-slate-400 group-hover:text-blue-600 shrink-0 w-5">
                          {sec.num}.
                        </span>
                        <span className="line-clamp-1 group-hover:underline">{sec.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* PDF Download Card */}
                <div className="bg-gradient-to-br from-slate-900 to-[#0F172A] rounded-2xl p-5 text-white border border-slate-800 shadow-md">
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">Official PDF Document</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Privacy notice - PCDS.pdf (267 KB)</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Download the exact signed version of our UK GDPR and Data Protection Notice for your offline compliance records.
                  </p>
                  <a
                    href="/privacy-notice-pcds.pdf"
                    download="privacy-notice-pcds.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download PDF Copy</span>
                  </a>
                </div>

                {/* Quick Contact Card */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm text-xs space-y-3">
                  <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-slate-500">
                    Data Protection Enquiries
                  </h3>
                  <div>
                    <div className="text-[11px] text-slate-500 mb-0.5">Direct Email</div>
                    <a
                      href="mailto:Admin@primarycaredataservices.co.uk"
                      className="text-blue-600 hover:underline font-semibold break-all"
                    >
                      Admin@primarycaredataservices.co.uk
                    </a>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 mb-0.5">Telephone</div>
                    <a href="tel:07387500109" className="text-slate-800 font-semibold hover:text-blue-600">
                      07387 500109
                    </a>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 mb-0.5">Registered Office</div>
                    <p className="text-slate-700 leading-relaxed">
                      128 City Road, London, EC1V 2NX, United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Document Content (Right Column) */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              {/* Top Banner Notice */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-bold text-slate-900">Official Notice: </span>
                  This electronic notice reproduces the full text of our formal Privacy Notice (dated 12 October 2026). You can also{" "}
                  <a
                    href="/privacy-notice-pcds.pdf"
                    download="privacy-notice-pcds.pdf"
                    className="text-blue-700 font-bold hover:underline"
                  >
                    download the original document in PDF format
                  </a>
                  .
                </div>
              </div>

              {/* 1. Introduction */}
              <section id="section-1" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Introduction</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Primary Care Data Services Ltd (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) is committed to protecting personal information
                    and respecting the privacy of individuals who visit our website, contact us or use our services.
                  </p>
                  <p>
                    This Privacy Notice explains how we collect, use, store, disclose and protect personal information in
                    accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018
                    and applicable privacy legislation.
                  </p>

                  <div className="mt-5 p-5 bg-slate-50 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider">
                      Company information
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Legal name:</strong> Primary Care Data Services Ltd</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Company registration number:</strong> 17506485</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Registered office:</strong> 128 City Road, London, EC1V 2NX, United Kingdom</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          <strong>Website:</strong>{" "}
                          <a
                            href="https://www.primarycaredataservices.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            https://www.primarycaredataservices.co.uk/
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          <strong>Email:</strong>{" "}
                          <a href="mailto:Admin@primarycaredataservices.co.uk" className="text-blue-600 hover:underline">
                            Admin@primarycaredataservices.co.uk
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          <strong>Telephone:</strong>{" "}
                          <a href="tel:07387500109" className="text-blue-600 hover:underline">
                            07387 500109
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    For personal information collected through our own website and business enquiries, Primary Care
                    Data Services Ltd will generally act as the data controller.
                  </p>
                  <p>
                    Where we process information on behalf of a healthcare practice or another client, our role may
                    instead be that of a data processor, depending on the services and contractual arrangements.
                  </p>
                </div>
              </section>

              {/* 2. Personal Information We Collect */}
              <section id="section-2" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Personal Information We Collect</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>Depending on your interactions with us, we may collect:</p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Name, job title and organisation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Business email address and telephone number</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Information submitted through website contact forms</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Enquiry details, correspondence and service requirements</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Contractual, billing and transaction information</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Technical information such as IP address, browser type and website usage information</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Information provided during business discussions and service delivery</span>
                    </li>
                  </ul>

                  <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
                    <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="font-medium">
                      We ask visitors not to submit patient records, medical histories or other sensitive personal
                      information through general website enquiry forms.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. How We Use Personal Information */}
              <section id="section-3" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How We Use Personal Information</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>We may process personal information to:</p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Respond to enquiries and requests for quotations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Provide information about our services</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Communicate with prospective and existing customers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Prepare proposals and manage commercial contracts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Deliver agreed business and administrative services</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Coordinate relevant referrals to independent service providers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Maintain website functionality, security and performance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Comply with legal, regulatory and accounting obligations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Send marketing communications where permitted by law</span>
                    </li>
                  </ul>

                  <p className="pt-2">
                    We will not use personal information for purposes incompatible with those for which it was collected
                    unless permitted by law.
                  </p>
                </div>
              </section>

              {/* 4. Lawful Bases for Processing */}
              <section id="section-4" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Lawful Bases for Processing</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>We rely on the following lawful bases, as applicable:</p>

                  <div className="space-y-3.5 pt-1">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-slate-900">Legitimate interests: </span>
                      <span>
                        Responding to business enquiries, managing customer relationships,
                        maintaining website security and conducting proportionate business development, where these
                        interests are not overridden by individuals&apos; rights.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-slate-900">Contract: </span>
                      <span>
                        Taking steps requested before entering into a contract and fulfilling contractual obligations
                        with individuals.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-slate-900">Legal obligation: </span>
                      <span>
                        Maintaining records or disclosing information where required by applicable law.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-slate-900">Consent: </span>
                      <span>
                        Where consent is required, including for certain marketing activities and non-essential
                        cookies or tracking technologies.
                      </span>
                    </div>
                  </div>

                  <p className="pt-2">
                    Where we rely on consent, it may be withdrawn at any time without affecting earlier lawful
                    processing.
                  </p>
                </div>
              </section>

              {/* 5. Independent Service Providers and Referrals */}
              <section id="section-5" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Independent Service Providers and Referrals
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Primary Care Data Services Ltd collaborates with independent service providers, including Tia
                    Software Solutions, to help respond to enquiries relating to technology, software development and
                    digital services.
                  </p>
                  <p>
                    Where an enquiry would be more appropriately handled by an independent provider, we may offer
                    to introduce the prospective customer.
                  </p>
                  <p>
                    We will explain the proposed referral and obtain any permission required before sharing contact
                    details.
                  </p>
                  <p>
                    Information shared will be limited to what is reasonably necessary for the introduction, such as the
                    customer&apos;s name, business contact information and relevant service requirements.
                  </p>
                  <p>
                    An independent provider may act as a separate data controller for information it receives and will be
                    responsible for its own privacy obligations.
                  </p>
                  <div className="p-3.5 rounded-xl bg-slate-100 font-semibold text-slate-800 text-xs sm:text-sm">
                    We do not sell customer contact databases.
                  </div>
                </div>
              </section>

              {/* 6. Healthcare and Patient Information */}
              <section id="section-6" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Healthcare and Patient Information
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Our services may include healthcare administration, clinical document processing, medical coding,
                    records summarisation and related operational support.
                  </p>
                  <p>
                    Where we are appointed by a healthcare organisation to process patient information on its behalf,
                    we will only process that information under appropriate documented instructions and contractual
                    arrangements.
                  </p>
                  <p>
                    The healthcare organisation will generally determine the purposes and lawful basis for processing
                    patient information.
                  </p>
                  <p>
                    Any processing of health information must meet the applicable requirements of UK GDPR, including
                    a valid Article 6 lawful basis and Article 9 condition where required.
                  </p>
                  <p>
                    Access to patient information will be restricted to appropriately authorised personnel and governed
                    by relevant confidentiality and security requirements.
                  </p>
                  <p className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-600 italic">
                    This website privacy notice does not replace any specific privacy information required for patient-data
                    processing carried out on behalf of a healthcare client.
                  </p>
                </div>
              </section>

              {/* 7. Who We May Share Information With */}
              <section id="section-7" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Who We May Share Information With
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>Where necessary and lawful, we may share relevant information with:</p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Authorised employees and contractors</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Website hosting, IT and email service providers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Professional advisers, including accountants and legal advisers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Independent service providers where a relevant introduction is authorised</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Public authorities or regulators where legally required</span>
                    </li>
                  </ul>

                  <p className="pt-2">
                    We require appropriate confidentiality and data protection safeguards when third parties process
                    information on our behalf.
                  </p>
                </div>
              </section>

              {/* 8. International Data Transfers */}
              <section id="section-8" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">International Data Transfers</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Some technology providers may store or access information outside the United Kingdom.
                  </p>
                  <p>
                    Where international transfers of personal data occur, we will assess the applicable legal requirements
                    and use an appropriate transfer mechanism, such as UK adequacy regulations or approved
                    contractual safeguards, where required.
                  </p>
                  <p>
                    Information about relevant transfers and safeguards may be requested using the contact details
                    above.
                  </p>
                </div>
              </section>

              {/* 9. Data Security */}
              <section id="section-9" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data Security</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We take reasonable technical and organisational measures designed to protect personal information
                    against unauthorised access, alteration, disclosure, loss and destruction.
                  </p>
                  <p>
                    Measures may include access controls, account authentication, security updates, encrypted
                    communications where appropriate, staff confidentiality obligations and secure data handling
                    procedures.
                  </p>
                  <p className="text-slate-500 italic">
                    No internet transmission or storage system can be guaranteed to be completely secure.
                  </p>
                </div>
              </section>

              {/* 10. Data Retention */}
              <section id="section-10" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data Retention</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We retain personal information only for as long as reasonably necessary for its intended purposes,
                    including legal, accounting and regulatory requirements.
                  </p>
                  <p>
                    Retention periods depend on the nature of the information, the purpose of processing and any
                    applicable contractual or statutory obligations.
                  </p>
                  <p>
                    When information is no longer required, we will securely delete, anonymise or otherwise dispose of
                    it, subject to lawful retention requirements.
                  </p>
                </div>
              </section>

              {/* 11. Cookies and Website Analytics */}
              <section id="section-11" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Cookies and Website Analytics</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Our website may use cookies or similar technologies for functionality, security, analytics and website
                    performance.
                  </p>
                  <p>
                    Strictly necessary technologies may be used without consent where permitted by law.
                  </p>
                  <p>
                    Where consent is legally required for non-essential cookies or similar technologies, we will request it
                    before using them and provide a way to manage preferences.
                  </p>
                  <p>
                    Details of the technologies actually used, their providers, purposes and retention periods will be
                    provided in our cookie information or consent interface.
                  </p>
                </div>
              </section>

              {/* 12. Marketing Communications */}
              <section id="section-12" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Marketing Communications</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We may communicate with business contacts about relevant services where permitted under
                    applicable data protection and electronic marketing laws.
                  </p>
                  <p>
                    Where consent is required, we will obtain it before sending marketing communications.
                  </p>
                  <p>
                    Recipients may opt out of marketing at any time by contacting us or using an unsubscribe mechanism
                    where provided.
                  </p>
                </div>
              </section>

              {/* 13. Your Data Protection Rights */}
              <section id="section-13" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Your Data Protection Rights</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>Subject to applicable legal conditions and exemptions, individuals may have the right to:</p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Access their personal information</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Request correction of inaccurate information</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Request erasure of information</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Request restriction of processing</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Object to certain processing, including direct marketing</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Request data portability where applicable</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Withdraw consent where processing relies on consent</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>Challenge certain solely automated decisions with legal or similarly significant effects</span>
                    </li>
                  </ul>

                  <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="font-semibold text-slate-900 text-sm mb-1.5">To exercise your rights, contact:</p>
                    <a
                      href="mailto:Admin@primarycaredataservices.co.uk"
                      className="text-blue-600 font-bold hover:underline text-sm break-all"
                    >
                      Admin@primarycaredataservices.co.uk
                    </a>
                    <p className="text-xs text-slate-500 mt-2">
                      We will respond in accordance with applicable legal time limits.
                    </p>
                  </div>
                </div>
              </section>

              {/* 14. Complaints */}
              <section id="section-14" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Complaints</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    If you have concerns about how we handle personal information, please contact us first so we can
                    investigate.
                  </p>
                  <p>
                    You also have the right to complain to the UK Information Commissioner&apos;s Office (ICO).
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="font-bold text-slate-900 text-sm block">Information Commissioner&apos;s Office (ICO)</span>
                      <span className="text-xs text-slate-500">UK Supervisory Authority for Data Protection</span>
                    </div>
                    <a
                      href="https://ico.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-100 transition-colors"
                    >
                      <span>Visit https://ico.org.uk/</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>

              {/* 15. External Websites */}
              <section id="section-15" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    15
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">External Websites</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Our website may contain links to third-party websites and services.
                  </p>
                  <p>
                    We are not responsible for the privacy practices of independently operated websites. Visitors should
                    review the relevant third party&apos;s privacy information before providing personal details.
                  </p>
                </div>
              </section>

              {/* 16. Changes to This Notice */}
              <section id="section-16" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    16
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Changes to This Notice</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We may update this Privacy Notice to reflect changes to our services, technology, legal obligations or
                    data handling practices.
                  </p>
                  <p>
                    The latest version will be published on our website with an updated revision date.
                  </p>
                </div>
              </section>

              {/* 17. Contact Us */}
              <section id="section-17" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    17
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Us</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>For questions about this Privacy Notice or the handling of personal information:</p>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200 space-y-3">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                      Primary Care Data Services Ltd
                    </h3>
                    <p className="text-slate-700">
                      128 City Road, London, EC1V 2NX
                    </p>
                    <div className="pt-2 space-y-1.5 text-sm">
                      <div>
                        <span className="text-slate-500 font-medium">Email: </span>
                        <a
                          href="mailto:Admin@primarycaredataservices.co.uk"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          Admin@primarycaredataservices.co.uk
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-500 font-medium">Telephone: </span>
                        <a href="tel:07387500109" className="text-slate-800 font-bold hover:text-blue-600">
                          07387 500109
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-500 font-medium">Website: </span>
                        <a
                          href="https://www.primarycaredataservices.co.uk/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          https://www.primarycaredataservices.co.uk/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* End of Document Sign-Off Banner */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-slate-400 font-bold block mb-1">
                    Document Complete
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    End of Privacy Notice — Primary Care Data Services Ltd
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Company Registration No: 17506485 • Effective: 12 October 2026
                  </p>
                </div>
                <a
                  href="/privacy-notice-pcds.pdf"
                  download="privacy-notice-pcds.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF Document</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
