import About from "@/components/about";
import Destinations from "@/components/destinations";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="destinations"> 
        <Destinations />
      </section>
    </>
  );
}

