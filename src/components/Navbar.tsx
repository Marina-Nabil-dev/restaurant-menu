import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-light-green" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto font-semibold flex justify-between items-center p-4 text-white">
        <div className="text-2xl font-bold">Food Funday</div>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-200">
            <a href="#home">HOME</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#about">ABOUT US</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#menu">MENU</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#blog">BLOG</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#contact">CONTACT US</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#reservation-form">RESERVATION</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
