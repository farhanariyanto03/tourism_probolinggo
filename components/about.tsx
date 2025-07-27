import Image from "next/image";
import { Users, MapPin, Award, Camera, icons } from "lucide-react";

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
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Tentang <span className="text-orange-500">Probolinggo</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
