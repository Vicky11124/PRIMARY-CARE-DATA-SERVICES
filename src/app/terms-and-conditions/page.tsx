import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Primary Care Data Services Ltd",
  description:
    "Official Terms and Conditions for Primary Care Data Services Ltd. Governing the use of our website, enquiries, consultation bookings, and remote healthcare support services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const sections = [
  { id: "section-1", num: "1", title: "Introduction" },
  { id: "section-2", num: "2", title: "Our Services" },
  { id: "section-3", num: "3", title: "Free Consultations and Bookings" },
  { id: "section-4", num: "4", title: "Service Agreements" },
  { id: "section-5", num: "5", title: "Confidentiality and Data Protection" },
  { id: "section-6", num: "6", title: "Professional Responsibilities" },
  { id: "section-7", num: "7", title: "Fees and Payments" },
  { id: "section-8", num: "8", title: "Website Information" },
  { id: "section-9", num: "9", title: "Intellectual Property" },
  { id: "section-10", num: "10", title: "Liability" },
  { id: "section-11", num: "11", title: "Changes to These Terms" },
  { id: "section-12", num: "12", title: "Governing Law" },
  { id: "section-13", num: "13", title: "Contact Information" },
];

export default function TermsAndConditionsPage() {
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
              <span className="text-white font-bold">Terms and Conditions</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>HEALTHCARE TERMS & CONDITIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
                Terms and Conditions
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium mb-3">
                Primary Care Data Services Ltd
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 mb-8">
                <span className="inline-flex items-center gap-1.5 text-slate-300 font-semibold">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Effective date: 19 October 2026
                </span>
                <span className="text-slate-600">•</span>
                <span>Company No: 17506485</span>
                <span className="text-slate-600">•</span>
                <span>13 Numbered Sections</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="/terms-and-conditions.pdf"
                  download="terms-and-conditions-pcds.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Terms & Conditions (PDF)</span>
                </a>

                <a
                  href="/terms-and-conditions.pdf"
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
                    <span className="text-[11px] font-semibold text-slate-500">13 Sections</span>
                  </div>

                  <nav aria-label="Terms and Conditions Sections" className="max-h-[60vh] overflow-y-auto pr-1 space-y-1 text-xs">
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
                      <p className="text-xs text-slate-400 mt-0.5">Healthcare Terms and Conditions (3 Pages)</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Download the exact official terms document for your records or procurement compliance review.
                  </p>
                  <a
                    href="/terms-and-conditions.pdf"
                    download="terms-and-conditions-pcds.pdf"
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
                    Direct Contact
                  </h3>
                  <div>
                    <div className="text-[11px] text-slate-500 mb-0.5">Direct Email</div>
                    <a
                      href="mailto:admin@primarycaredataservices.co.uk"
                      className="text-blue-600 hover:underline font-semibold break-all"
                    >
                      admin@primarycaredataservices.co.uk
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
                  This electronic document reproduces the full text of our official Healthcare Terms and Conditions (effective 19 October 2026). You can also{" "}
                  <a
                    href="/terms-and-conditions.pdf"
                    download="terms-and-conditions-pcds.pdf"
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
                    Welcome to Primary Care Data Services Ltd (Company Registration Number: 17506485), a UK-registered
                    company providing administrative and clinical data support services to healthcare organisations.
                  </p>
                  <p>
                    These Terms and Conditions govern the use of our website, enquiries, consultation bookings and preliminary
                    discussions about our services.
                  </p>
                  <p>
                    By using our website or booking a consultation, you agree to these terms. Any subsequent service engagement
                    will be subject to a separate written agreement.
                  </p>
                </div>
              </section>

              {/* 2. Our Services */}
              <section id="section-2" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Services</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We provide UK-based remote support services to healthcare organisations, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Medical coding and clinical document processing</li>
                    <li>Clinical record summarisation</li>
                    <li>Scanning and digitisation of healthcare records</li>
                    <li>Reception and telephone support</li>
                    <li>Administrative backlog management</li>
                    <li>Ongoing administrative support</li>
                    <li>Quality assurance and document processing reviews</li>
                  </ul>
                  <p className="text-slate-600 italic pt-2">
                    Services are subject to availability, agreed scope and applicable regulatory requirements.
                  </p>
                </div>
              </section>

              {/* 3. Free Consultations and Bookings */}
              <section id="section-3" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Free Consultations and Bookings</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We offer complimentary introductory consultations to discuss the requirements of healthcare organisations.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Consultations are free of charge and normally last 20 minutes.</li>
                    <li>Appointments are conducted through Microsoft Teams unless otherwise agreed.</li>
                    <li>Clients may request to reschedule or cancel their appointments.</li>
                    <li>We reserve the right to reschedule appointments where reasonably necessary.</li>
                    <li>Booking a consultation does not create a binding service contract.</li>
                  </ul>
                </div>
              </section>

              {/* 4. Service Agreements */}
              <section id="section-4" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Service Agreements</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Before commencing paid services, Primary Care Data Services Ltd and the healthcare organisation will agree in
                    writing on the scope of work, responsibilities, fees, service levels and applicable contractual terms.
                  </p>
                  <p>
                    Where personal data is processed on behalf of a healthcare organisation, an appropriate Data Processing
                    Agreement must be established before processing begins.
                  </p>
                </div>
              </section>

              {/* 5. Confidentiality and Data Protection */}
              <section id="section-5" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Confidentiality and Data Protection</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We recognise the importance of protecting confidential healthcare information.
                  </p>
                  <p>
                    We are committed to complying with applicable UK data protection legislation, including the UK GDPR and Data
                    Protection Act 2018.
                  </p>
                  <p>
                    Personal information submitted through our website or booking system will be handled in accordance with our{" "}
                    <Link href="/privacy-notice" className="text-blue-600 hover:underline font-semibold">
                      Privacy Notice
                    </Link>
                    .
                  </p>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                    <strong>Important Safeguard:</strong> Healthcare organisations must not submit identifiable patient records,
                    medical histories or other sensitive clinical information through our general website enquiry forms or consultation booking fields.
                  </div>
                  <p>
                    Any processing of patient information will be undertaken only through appropriately authorised and secure
                    arrangements.
                  </p>
                </div>
              </section>

              {/* 6. Professional Responsibilities */}
              <section id="section-6" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Professional Responsibilities</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Our services provide administrative and clinical information processing support.
                  </p>
                  <p>
                    We do not independently provide medical diagnosis, treatment or clinical decision-making.
                  </p>
                  <p>
                    Healthcare organisations remain responsible for clinical oversight, patient care decisions and reviewing outputs
                    where professional clinical judgement is required.
                  </p>
                </div>
              </section>

              {/* 7. Fees and Payments */}
              <section id="section-7" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Fees and Payments</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Any applicable service fees will be communicated and agreed before paid work begins.
                  </p>
                  <p>
                    Payment arrangements, invoicing schedules and contractual charges will be documented in the relevant service
                    agreement.
                  </p>
                  <p>
                    Introductory consultations are provided free of charge.
                  </p>
                </div>
              </section>

              {/* 8. Website Information */}
              <section id="section-8" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Website Information</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We aim to ensure that information published on our website is accurate and up to date.
                  </p>
                  <p>
                    However, website content is provided for general information and does not constitute medical, legal or
                    professional advice.
                  </p>
                  <p>
                    We may update website content and service descriptions from time to time.
                  </p>
                </div>
              </section>

              {/* 9. Intellectual Property */}
              <section id="section-9" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Intellectual Property</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Unless otherwise stated, the website&apos;s branding, logos, original text and other proprietary materials belong to
                    Primary Care Data Services Ltd or their respective licensors.
                  </p>
                  <p>
                    Unauthorised reproduction or commercial use is prohibited without appropriate permission.
                  </p>
                </div>
              </section>

              {/* 10. Liability */}
              <section id="section-10" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Liability</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Nothing in these Terms and Conditions excludes or restricts liability that cannot lawfully be excluded, including
                    liability for fraud, fraudulent misrepresentation or death or personal injury caused by negligence.
                  </p>
                  <p>
                    Any limitations of liability relating to paid services will be addressed in the relevant written service agreement.
                  </p>
                </div>
              </section>

              {/* 11. Changes to These Terms */}
              <section id="section-11" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Changes to These Terms</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We may update these Terms and Conditions to reflect changes in our services, operational requirements or
                    applicable legislation.
                  </p>
                  <p>
                    The latest version will be published on our website.
                  </p>
                </div>
              </section>

              {/* 12. Governing Law */}
              <section id="section-12" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Governing Law</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    These Terms and Conditions are governed by the laws of England and Wales.
                  </p>
                </div>
              </section>

              {/* 13. Contact Information */}
              <section id="section-13" className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Information</h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <p className="font-bold text-slate-900 text-base">Primary Care Data Services Ltd</p>
                    <p className="text-slate-600">Company Registration Number: 17506485</p>
                    <p className="text-slate-600">Registered Office: 128 City Road, London, EC1V 2NX, United Kingdom</p>
                    <p className="text-slate-600">
                      Email:{" "}
                      <a href="mailto:admin@primarycaredataservices.co.uk" className="text-blue-600 hover:underline font-medium">
                        admin@primarycaredataservices.co.uk
                      </a>
                    </p>
                    <p className="text-slate-600">
                      Website:{" "}
                      <a href="https://www.primarycaredataservices.co.uk" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                        https://www.primarycaredataservices.co.uk
                      </a>
                    </p>
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
                    End of Terms and Conditions — Primary Care Data Services Ltd
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Company Registration No: 17506485 • Effective: 19 October 2026
                  </p>
                </div>
                <a
                  href="/terms-and-conditions.pdf"
                  download="terms-and-conditions-pcds.pdf"
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
