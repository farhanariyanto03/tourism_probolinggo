import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-10">
        {/* Logo and Title */}
        <a href="#" className="flex items-center">
          <Image
            src="/assets/images/logo_wispro.png"
            alt="Logo Wispro"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-white text-xl ml-2" style={{ fontFamily: "Pacifico" }}>
            Wisata Probolinggo
          </h1>
        </a>

        {/* Navigation Menu */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-white hover:text-orange-400 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-orange-400 transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-orange-400 transition duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#explore" className="text-white border border-white rounded-lg px-3 py-2 hover:bg-white hover:text-blue-600 transition duration-500">Explore</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
