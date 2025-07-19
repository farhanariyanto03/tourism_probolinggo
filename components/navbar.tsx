import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-400 to-orange-400 p-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo dan Judul */}
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/images/logo_wispro.png"
            alt="Logo Wispro"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-white font-bold text-xl">Wisata Probolinggo</h1>
        </div>

        {/* Menu */}
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-white hover:text-yellow-200 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-200 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-200 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
