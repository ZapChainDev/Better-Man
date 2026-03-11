import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import RealityCheck from "@/components/RealityCheck";
import WhatWeOffer from "@/components/WhatWeOffer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <RealityCheck />
      <WhatWeOffer />
      <Footer />
    </main>
  );
}
