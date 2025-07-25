import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </>
  );
}
