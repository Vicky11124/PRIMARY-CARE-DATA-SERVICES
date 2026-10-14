import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomepageHealthcareServices from "@/components/HomepageHealthcareServices";
import HomepageHealthcareOps from "@/components/HomepageHealthcareOps";
import HomepageTechSolutions from "@/components/HomepageTechSolutions";
import HomepageHowItWorks from "@/components/HomepageHowItWorks";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Primary Care Data Services Ltd | Healthcare Administration & Technology",
  description:
    "Specialist healthcare administration, clinical document processing, medical coding, records summarisation, and technology solutions for UK GP practices, primary care networks, and businesses.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      {/* 1. Hero — preserved exactly as-is */}
      <Hero />
      {/* 2. Healthcare Services — primary offering */}
      <HomepageHealthcareServices />
      {/* 3. Healthcare Operations — capabilities and how we support clients */}
      <HomepageHealthcareOps />
      {/* 4. Technology Solutions — secondary offering */}
      <HomepageTechSolutions />
      {/* 5. How It Works — three-step enquiry and service process */}
      <HomepageHowItWorks />
      {/* 6. Contact CTA */}
      <FinalCta />
      <Footer />
    </>
  );
}

