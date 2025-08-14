import Image from "next/image";
import { Utensils, Star, Clock, Flame, Tag, MapPin, Heart } from "lucide-react";
// import LeafletMap, { type MarkerData } from "./leaflet-map";

type Item = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  spicyLevel: 0 | 1 | 2 | 3;
  cookTime: string;
  rating: number;
  featured: boolean;
  tags: string[];
  // position: [number, number];
};

const items: Item[] = [
  {
    id: 1,
    name: "Rujak Cingur",
    description:
      "Paduan sayuran segar, petis, dan cingur gurih dengan cita rasa pedas legit.",
    image: "/assets/images/makanan/rujak-cingur.jpg",
    price: "Rp 20.000 - 30.000",
    category: "Makanan Tradisional",
    spicyLevel: 1,
    cookTime: "15 menit",
    rating: 4.8,
    featured: true,
    tags: ["Gurih", "Pedas", "Autentik"],
    // position: [-7.941558241556708, 112.95331253555966],
  },
  {
    id: 2,
    name: "Rawon Nguling",
    description:
      "Kuah hitam kluwek yang kaya rasa dengan potongan daging sapi empuk.",
    image: "/assets/images/makanan/rawon-nguling.jpg",
    price: "Rp 15.000 - 20.000",
    category: "Makanan Berkuah",
    spicyLevel: 2,
    cookTime: "30 menit",
    rating: 4.7,
    featured: true,
    tags: ["Hangat", "Rempah", "Segar"],
    // position: [-7.941558241556708, 112.95331253555966],
  },
  {
    id: 3,
    name: "Ketan Kratok",
    description:
      "Ketan pulut dengan campuran kelapa parut dan gula merah, disajikan hangat.",
    image: "/assets/images/makanan/ketan kratok.jpg",
    price: "Rp 20.000 - 30.000",
    category: "Makanan Berkuah",
    spicyLevel: 0,
    cookTime: "45 menit",
    rating: 4.9,
    featured: false,
    tags: ["Gurih", "Manis"],
    // position: [-7.941558241556708, 112.95331253555966],
  },
  {
    id: 4,
    name: "Bakso Eddy Probolinggo",
    description:
      "Bakso daging sapi kenyal dengan kuah segar, disajikan dengan mie dan sayuran.",
    image: "/assets/images/makanan/bakso eddy.jpg",
    price: "Rp 15.000 - 25.000",
    category: "Makanan Kuah",
    spicyLevel: 0,
    cookTime: "5 menit",
    rating: 4.5,
    featured: false,
    tags: ["Hangat", "Gurih"],
    // position: [-7.941558241556708, 112.95331253555966],
  },
  {
    id: 5,
    name: "Bebek Goreng Bu Lely",
    description:
      "Bebek goreng crispy dengan sambal khas, disajikan dengan nasi dan lalapan.",
    image: "/assets/images/makanan/bebek goreng.jpg",
    price: "Rp 25.000 - 35.000",
    category: "Makanan Berat",
    spicyLevel: 2,
    cookTime: "10 menit",
    rating: 4.4,
    featured: false,
    tags: ["Rempah", "Gurih"],
    // position: [-7.941558241556708, 112.95331253555966],
  },
  {
    id: 6,
    name: "Soto Ayam Pak Koya",
    description:
      "Kuah bening dengan potongan ayam, sayuran, dan bumbu rempah yang kaya.",
    image: "/assets/images/makanan/soto ayam.jpeg",
    price: "Rp 15.000 - 20.000",
    category: "Makanan Berkuah",
    spicyLevel: 0,
    cookTime: "5 menit",
    rating: 4.6,
    featured: false,
    tags: ["Gurih", "Rempah", "Hangat"],
    // position: [-7.778439874654684, 113.27668722811634],
  },
];

function Rating({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < full ? "fill-yellow-400 text-yellow-400" : "text-yellow-400/40"
          }`}
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-gray-700">
        {value.toFixed(1)}
      </span>
    </div>
  );
}

function Spice({ level }: { level: Item["spicyLevel"] }) {
  return (
    <div className="flex items-center gap-2">
      <Flame className="w-4 h-4 text-red-500" />
      <div className="flex gap-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-6 rounded-full ${
              i < level
                ? "bg-gradient-to-r from-red-500 to-orange-500"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Culinary() {
  const featured = items.filter((item) => item.featured); // makanan unggulan
  const regular = items.filter((item) => !item.featured); // makanan biasa

  // const markers: MarkerData[] = items.map((c) => ({
  //   id: c.id,
  //   name: c.name,
  //   category: c.category,
  //   description: c.description,
  //   position: c.position,
  // }));

  return (
    <section
      id="kuliner"
      className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Utensils className="w-4 h-4" />
            Kuliner Khas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sajian <span className="text-orange-500">Favorit</span> Probolinggo
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Tata letak mirip Destinasi, namun dengan detail kuliner: level
            pedas, waktu saji, dan tag rasa.
          </p>
        </div>

        {/* Featured grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Menu Unggulan
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featured.map((item, idx) => (
              <article
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                  idx === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    idx === 0 ? "h-96 lg:h-[28rem]" : "h-96"
                  } overflow-hidden`}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      {item.category}
                    </span>
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow">
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-400" />
                        {item.rating}
                      </span>
                    </span>
                  </div>

                  {/* Circular price badge */}
                  <div className="absolute -bottom-6 right-6 z-10">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl flex items-center justify-center text-center p-3 border-4 border-white">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider">
                          Mulai
                        </div>
                        <div className="text-sm font-extrabold leading-tight">
                          {item.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-200 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Body with culinary-specific details */}
                <div className="bg-white p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        {item.cookTime}
                      </span>
                      <Spice level={item.spicyLevel} />
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        Probolinggo
                      </span>
                    </div>
                    <Rating value={item.rating} />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold border border-orange-100"
                      >
                        <Tag className="w-3 h-3" />
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-[1.02]">
                      Cicipi Sekarang
                    </button>
                    <button className="px-5 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition">
                      Detail
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Regular grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Pilihan Lainnya
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="bg-black/50 backdrop-blur text-white px-2 py-1 rounded-md text-xs">
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        {item.rating}
                      </span>
                    </span>
                    <span className="w-28 h-7 rounded-xl bg-white/90 backdrop-blur text-gray-900 flex items-center justify-center text-[10px] font-bold shadow border border-white">
                      {item.price}
                    </span>
                  </div>

                  {/* Small heart (non-interaktif) */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4 text-orange-500" />
                        {item.cookTime}
                      </span>
                      <Spice level={item.spicyLevel} />
                    </div>
                    <div className="text-orange-600 font-bold">
                      {item.price}
                    </div>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 text-[11px] font-medium border border-orange-100"
                      >
                        <Tag className="w-3 h-3" />
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                    Cicipi
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Map section */}
          {/* <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Peta Destinasi
              </h3>
            </div>
            <LeafletMap markers={markers} height={480} />
          </div> */}
        </div>
      </div>
    </section>
  );
}
