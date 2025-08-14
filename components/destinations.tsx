import Image from "next/image";
import { MapPin, Clock, Star, Camera, Heart } from "lucide-react";
import LeafletMap, { type MarkerData } from "./leaflet-map";

type Destination = {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  duration: string;
  category: string;
  price: string;
  featured: boolean;
  position: [number, number];
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "Gunung Bromo",
    description:
      "Nikmati sunrise spektakuler di kawah aktif yang paling terkenal di Indonesia",
    image: "/assets/images/destination/bromo1.jpg",
    rating: 4.9,
    duration: "1.5 - 2 jam",
    category: "Gunung",
    price: "Rp 29.000 - Rp 220.000",
    featured: true,
    position: [-7.941558241556708, 112.95331253555966],
  },
  {
    id: 2,
    name: "Pantai Bentar",
    description: "Jembatan kayu eksotis dengan pemandangan sunset yang memukau",
    image: "/assets/images/destination/hero.jpeg",
    rating: 4.7,
    duration: "30 menit",
    category: "Pantai",
    price: "Rp 25.000",
    featured: false,
    position: [-7.778439874654684, 113.27668722811634],
  },
  {
    id: 3,
    name: "Air Terjun Madakaripura",
    description:
      "Air terjun tertinggi di Jawa Timur dengan keindahan alam yang menakjubkan",
    image: "/assets/images/destination/madakalipura.jpg",
    rating: 4.8,
    duration: "1 jam",
    category: "Air Terjun",
    price: "Rp 22.000",
    featured: true,
    position: [-7.8474064210698105, 113.01605618086427],
  },
  {
    id: 4,
    name: "Bukit Teletubbies",
    description: "Padang rumput hijau yang menyerupai setting film Teletubbies",
    image: "/assets/images/destination/bukit teletubbis.jpg",
    rating: 4.6,
    duration: "1.5 - 2 jam",
    category: "Bukit",
    price: "Rp 29.000 - Rp 220.000",
    featured: false,
    position: [-7.974237366217066, 112.95557050903705],
  },
  {
    id: 5,
    name: "Seruni Point",
    description:
      "Nikmati pemandangan spektakuler dari Seruni Point, salah satu titik pandang terbaik untuk menikmati keindahan Gunung Bromo dan sekitarnya. Cocok untuk fotografi dan menikmati sunrise yang memukau",
    image: "/assets/images/destination/seruni.jpg",
    rating: 4.9,
    duration: "1.5 jam",
    category: "Bukit",
    price: "Rp 10.000",
    featured: true,
    position: [-7.9107382703162035, 112.9511280936914],
  },
  {
    id: 6,
    name: "Songa Adventure",
    description:
      "Songa Adventure adalah salah satu kegiatan rafting yang menguji adrenalin Anda.",
    image: "/assets/images/destination/songa.jpg",
    rating: 4.5,
    duration: "45 - 1 jam",
    category: "Rafting",
    price: "Rp -",
    featured: false,
    position: [-7.908199475734222, 113.35188368205382],
  },
  {
    id: 7,
    name: "Air terjun Purba Tirai Bidadari",
    description:
      "Air terjun Purba Tirai Bidadari adalah salah satu air terjun tersembunyi yang menakjubkan di Probolinggo.",
    image: "/assets/images/destination/bidadari.jpg",
    rating: 4.5,
    duration: "1 - 1.5 jam",
    category: "Air Terjun",
    price: "Rp 5.000 - 10.000",
    featured: false,
    position: [-7.929681340944191, 113.3698514820541],
  },
];

export default function Destinations() {
  const featuredDestinations = destinations.filter((dest) => dest.featured);
  const regularDestinations = destinations.filter((dest) => !dest.featured);

  const markers: MarkerData[] = destinations.map((d) => ({
    id: d.id,
    name: d.name,
    category: d.category,
    description: d.description,
    position: d.position,
  }));

  return (
    <section
      id="destinasi"
      className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Destinasi Terpopuler
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Jelajahi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Keajaiban
            </span>{" "}
            Alam
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Temukan destinasi menakjubkan yang akan memukau mata dan menyentuh
            jiwa Anda
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Star className="w-6 h-6 text-orange-500 fill-orange-500" />
            Destinasi Unggulan
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {destination.category}
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {destination.rating}
                    </div>
                  </div>

                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {destination.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Dari Kota Probolinggo</span>
                        </div>
                      </div>
                      <div className="text-orange-300 font-bold">
                        {destination.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Destinations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Destinasi Lainnya
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {destination.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="text-orange-600 font-bold">
                      {destination.price}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Peta Destinasi</h3>
          </div>
          <LeafletMap markers={markers} height={480} />
        </div>
      </div>
    </section>
  );
}
