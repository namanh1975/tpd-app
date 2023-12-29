import ModeToggle from "@/components/ModeToggle";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Benefits from "../components/benefits";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import { benefitOne, benefitTwo } from "../components/data";

export default function Home() {
  return (
    <div className=" container px-2 mx-auto ">
      <Header />
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Footer />
    </div>
  );
}
