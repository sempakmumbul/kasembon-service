import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Location from "@/components/sections/Location";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";

import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <WhyChooseUs />
    <Portfolio />
      <Testimonials />
      <Process />
      <Location />
      <CTA />
    

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}