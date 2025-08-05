import Image from "next/image";
import { Utensils, Heart, Award, Flame, Clock, MapPin } from "lucide-react";

const culinaryItems = [
  {
    id: 1,
    name: "Rujak Cingur",
    description:
      "Rujak khas Jawa Timur dengan campuran sayuran segar dan cingur yang gurih",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 15.000 - 25.000",
    category: "Makanan Tradisional",
    spicyLevel: 3,
    cookTime: "15 menit",
    featured: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Soto Probolinggo",
    description:
      "Soto khas dengan kuah bening yang segar dan daging sapi yang empuk",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 12.000 - 18.000",
    category: "Soto",
    spicyLevel: 2,
    cookTime: "30 menit",
    featured: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Tape Bondowoso",
    description:
      "Tape singkong manis yang difermentasi dengan cita rasa khas Jawa Timur",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 8.000 - 12.000",
    category: "Makanan Manis",
    spicyLevel: 0,
    cookTime: "5 menit",
    featured: false,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Rawon Probolinggo",
    description: "Rawon dengan kuah hitam pekat dan daging sapi yang lezat",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 18.000 - 25.000",
    category: "Makanan Berkuah",
    spicyLevel: 2,
    cookTime: "45 menit",
    featured: true,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Kerupuk Rambak",
    description: "Kerupuk kulit sapi renyah yang menjadi camilan favorit",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 10.000 - 15.000",
    category: "Camilan",
    spicyLevel: 1,
    cookTime: "10 menit",
    featured: false,
    rating: 4.4,
  },
  {
    id: 6,
    name: "Es Dawet Ireng",
    description: "Minuman segar dengan cendol hitam dan santan yang creamy",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 8.000 - 12.000",
    category: "Minuman",
    spicyLevel: 0,
    cookTime: "5 menit",
    featured: false,
    rating: 4.6,
  },
];

const SpicyIndicator = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      <Flame className="w-4 h-4 text-red-500" />
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < level ? "bg-red-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function Culinary() {
  const featuredItems = culinaryItems.filter((item) => item.featured);
  const regularItems = culinaryItems.filter((item) => !item.featured);

  return (
    <section
      id="kuliner"
      className="py-20 bg-gradient-to-br from-orange-50 via-red-50/30 to-yellow-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Utensils className="w-4 h-4" />
            Kuliner Autentik
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Cita Rasa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Nusantara
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Nikmati kelezatan kuliner khas Probolinggo yang menggugah selera dan
            menghangatkan hati
          </p>
        </div>
      </div>
    </section>
  );
}
