import Link from "next/link";
import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Wisata Probolinggo
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Jelajahi keindahan alam dan kelezatan kuliner khas Probolinggo
              bersama kami. Pengalaman wisata tak terlupakan menanti Anda.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/wisata"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Tempat Wisata
                </Link>
              </li>
              <li>
                <Link
                  href="/kuliner"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Kuliner
                </Link>
              </li>
              <li>
                <Link
                  href="/akomodasi"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Akomodasi
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Destinasi Populer</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/wisata/gunung-bromo"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Gunung Bromo
                </Link>
              </li>
              <li>
                <Link
                  href="/wisata/pantai-bentar"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Pantai Bentar
                </Link>
              </li>
              <li>
                <Link
                  href="/wisata/air-terjun-madakaripura"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Air Terjun Madakaripura
                </Link>
              </li>
              <li>
                <Link
                  href="/wisata/cemoro-lawang"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Cemoro Lawang
                </Link>
              </li>
              <li>
                <Link
                  href="/kuliner/rujak-soto"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Rujak Soto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Jl. Soekarno Hatta No. 123,
                  <br />
                  Kota Probolinggo, Jawa Timur
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+62 335 421 123</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  info@wisataprobolinggo.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Wisata Probolinggo. Semua hak dilindungi.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
