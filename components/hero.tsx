import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Gambar Latar */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero.jpeg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-md animate-fade-in-up">
          Jelajahi Keindahan Indonesia
        </h1>
        <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-xl animate-fade-in-up delay-200">
          Temukan surga tersembunyi, budaya kaya, dan pengalaman tak terlupakan di berbagai destinasi wisata tanah air.
        </p>
        <a
          href="#destinasi"
          className="mt-6 bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 animate-fade-in-up delay-300"
        >
          Lihat Destinasi
        </a>
      </div>
    </section>
  );
}
