import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero.jpeg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Konten (opsional) */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Selamat Datang</h1>
      </div>
    </section>
  );
}
