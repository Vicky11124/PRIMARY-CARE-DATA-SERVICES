import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesAccordionGallery from "@/components/ServicesAccordionGallery";
import Services from "@/components/Services";
import Growth from "@/components/Growth";
import VirtualAssistance from "@/components/VirtualAssistance";
import CaseStudies from "@/components/CaseStudies";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesAccordionGallery />
      <Services />
      <Growth />
      <VirtualAssistance />
      <CaseStudies />
      <FinalCta />
      <Footer />
    </>
  );
}
