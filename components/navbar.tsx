"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md p-4 z-[9999] transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10">
        {/* Logo and Title */}
        <Link href="#" className="flex items-center group">
          <div className="relative">
            <Image
              src="/assets/images/logo_wispro.png"
              alt="Logo Wispro"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <h1
            className="text-white text-xl ml-3 font-bold group-hover:text-orange-400 transition-colors duration-300"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Wisata Probolinggo
          </h1>
        </Link>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="#home"
              className="text-white hover:text-orange-400 transition duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="#destinasi"
              className="text-white hover:text-orange-400 transition duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Destinasi
            </Link>
          </li>
          <li>
            <Link
              href="#kuliner"
              className="text-white hover:text-orange-400 transition duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Kuliner
            </Link>
          </li>
          <li>
            <Link
              href="#tentang"
              className="text-white hover:text-orange-400 transition duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="#kontak"
              className="text-white border-2 border-white rounded-full px-6 py-2 hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-orange-400/25"
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-orange-400 transition-colors duration-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md z-[9998]">
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <Link
                href="#home"
                className="text-white hover:text-orange-400 transition duration-300 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="#destinasi"
                className="text-white hover:text-orange-400 transition duration-300 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinasi
              </Link>
            </li>
            <li>
              <Link
                href="#kuliner"
                className="text-white hover:text-orange-400 transition duration-300 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Kuliner
              </Link>
            </li>
            <li>
              <Link
                href="#tentang"
                className="text-white hover:text-orange-400 transition duration-300 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="#kontak"
                className="text-white border border-white rounded-full px-4 py-2 hover:bg-orange-400 hover:border-orange-400 transition-all duration-300 font-medium inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
