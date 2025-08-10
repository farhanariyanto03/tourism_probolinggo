import Image from "next/image"
import { MapPin, Clock, Star, Camera, Heart } from "lucide-react"
import LeafletMap, { type MarkerData } from "./leaflet-map"

type Destination = {
  id: number
  name: string
  description: string
  image: string
  rating: number
  duration: string
  category: string
  price: string
  featured: boolean
  position: [number, number]
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Gunung Bromo",
    description:
      "Nikmati sunrise spektakuler di kawah aktif yang paling terkenal di Indonesia",
    image: "/assets/images/bromo1.jpg",
    rating: 4.9,
    duration: "1-2 hari",
    category: "Gunung",
    price: "Rp 150.000",
    featured: true,
    position: [-7.9425, 112.953],
  },
  {
    id: 2,
    name: "Pantai Bentar",
    description: "Jembatan kayu eksotis dengan pemandangan sunset yang memukau",
    image: "/assets/images/bromo1.jpg",
    rating: 4.7,
    duration: "3-4 jam",
    category: "Pantai",
    price: "Rp 25.000",
    featured: false,
    position: [-7.7317, 113.2801],
  },
  {
    id: 3,
    name: "Air Terjun Madakaripura",
    description:
      "Air terjun tertinggi di Jawa Timur dengan keindahan alam yang menakjubkan",
    image: "/assets/images/bromo1.jpg",
    rating: 4.8,
    duration: "4-5 jam",
    category: "Air Terjun",
    price: "Rp 35.000",
    featured: true,
    position: [-7.8489, 113.0429],
  },
  {
    id: 4,
    name: "Bukit Teletubbies",
    description: "Padang rumput hijau yang menyerupai setting film Teletubbies",
    image: "/assets/images/hero.jpeg",
    rating: 4.6,
    duration: "2-3 jam",
    category: "Bukit",
    price: "Rp 20.000",
    featured: false,
    position: [-7.912, 112.979],
  },
  {
    id: 5,
    name: "Kawah Ijen",
    description:
      "Fenomena blue fire yang langka dan danau kawah berwarna tosca",
    image: "/assets/images/bromo1.jpg",
    rating: 4.9,
    duration: "1-2 hari",
    category: "Kawah",
    price: "Rp 200.000",
    featured: true,
    position: [-8.0581, 114.242],
  },
  {
    id: 6,
    name: "Ranu Pani",
    description:
      "Danau alami di kaki Gunung Semeru dengan pemandangan yang menenangkan",
    image: "/assets/images/bromo1.jpg",
    rating: 4.5,
    duration: "5-6 jam",
    category: "Danau",
    price: "Rp 45.000",
    featured: false,
    position: [-8.0117, 112.9561],
  },
]

export default function Destinations() {
  const featuredDestinations = destinations.filter((dest) => dest.featured)
  const regularDestinations = destinations.filter((dest) => !dest.featured)

  const markers: MarkerData[] = destinations.map((d) => ({
    id: d.id,
    name: d.name,
    category: d.category,
    description: d.description,
    position: d.position,
  }))

  return (
    <section id="destinasi" className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Destinasi Terpopuler
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Jelajahi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Keajaiban</span>{" "}
            Alam
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Temukan destinasi menakjubkan yang akan memukau mata dan menyentuh jiwa Anda
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
                    <p className="text-gray-200 mb-4 line-clamp-2">{destination.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Probolinggo</span>
                        </div>
                      </div>
                      <div className="text-orange-300 font-bold">{destination.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Destinations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Destinasi Lainnya</h3>
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
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="text-orange-600 font-bold">{destination.price}</div>
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
            <p className="text-gray-600 text-sm">
              Lihat lokasi destinasi unggulan di sekitar Probolinggo langsung pada peta interaktif
            </p>
          </div>
          <LeafletMap markers={markers} height={480} />
        </div>
      </div>
    </section>
  )
}
