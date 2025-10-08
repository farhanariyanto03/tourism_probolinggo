"use client"

import Image from "next/image";
import { Users, MapPin, Award, Camera } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    number: "50+",
    label: "Destinasi Wisata",
    description: "Lokasi menakjubkan",
  },
  {
    icon: Users,
    number: "100K+",
    label: "Wisatawan",
    description: "Setiap tahunnya",
  },
  {
    icon: Award,
    number: "25+",
    label: "Kuliner Khas",
    description: "Cita rasa autentik",
  },
  {
    icon: Camera,
    number: "1M+",
    label: "Foto Dibagikan",
    description: "Di media sosial",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Tentang <span className="text-orange-500" style={{ fontFamily: "Pacifico, cursive" }}>Probolinggo</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Probolinggo adalah kota yang memukau di Jawa Timur, terkenal
              sebagai gerbang menuju Gunung Bromo yang legendaris. Kota ini
              menawarkan perpaduan sempurna antara keindahan alam yang
              menakjubkan dan kekayaan kuliner yang menggugah selera.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dari sunrise spektakuler di Bromo hingga kelezatan rujak cingur
              yang autentik, Probolinggo memberikan pengalaman wisata yang tak
              terlupakan bagi setiap pengunjung yang datang untuk menjelajahi
              pesona Jawa Timur.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-orange-500" aria-hidden />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/bromo1.jpg"
                alt="Pemandangan Probolinggo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-500/60 hover:bg-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Destinasi Terfavorit</div>
                  <div className="text-sm text-gray-600">Jawa Timur 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
