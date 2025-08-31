import Link from 'next/link';
import { Youtube, Twitter, Instagram, Facebook } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Wisata Probolinggo
            </h3>
            <p className="text-gray-400 mb-6">
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
        </div>
      </div>
    </footer>
  );
}
