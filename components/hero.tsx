import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/destination/hero.jpeg"
          alt="Pemandangan Gunung Bromo Probolinggo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up">
            Jelajahi Keajaiban
            <span className="block text-orange-400 mt-2">Probolinggo</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl lg:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 mb-8">
            Dari puncak Gunung Bromo yang memukau hingga kelezatan kuliner khas yang menggugah selera. Temukan pesona
            alam dan cita rasa autentik Probolinggo yang tak terlupakan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link
              href="#destinasi"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Jelajahi Destinasi
            </Link>
            <Link
              href="#kuliner"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Cicipi Kuliner
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown className="text-white w-8 h-8" />
        </a>
        </div>
      </div>
    </section>
  )
}
