import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-300 bg-black text-white shadow-md ${
          scrolled ? "fixed" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img
              src="assets/logos/logo.png"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-[#d04713]">Home</Link>
            <Link to="/about" className="hover:text-[#d04713]">About</Link>
            <Link to="/courses" className="hover:text-[#d04713]">Courses</Link>
            <Link to="/contact" className="hover:text-[#d04713]">Contact</Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </header>
      {scrolled && <div className="h-20 md:h-[72px]" />}
      <div
        className={`fixed inset-0 bg-black/90 z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={closeMenu} aria-label="Close menu">
            <FiX className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 p-4">
          <Link to="/" onClick={closeMenu} className="hover:text-[#d04713]">Home</Link>
          <Link to="/about" onClick={closeMenu} className="hover:text-[#d04713]">About</Link>
          <Link to="/courses" onClick={closeMenu} className="hover:text-[#d04713]">Courses</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-[#d04713]">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
