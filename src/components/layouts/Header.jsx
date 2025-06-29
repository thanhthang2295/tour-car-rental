import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo_2_1_black from '../../assets/images/logo_2_1_black.png';
import logo_2_1_white from '../../assets/images/logo_2_1_white.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto flex flex-col md:flex-row items-center px-6 py-2 transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <a href="/" className="block">
            <img
              src={isScrolled ? logo_2_1_black : logo_2_1_white}
              alt="Logo"
              className={`transition-all duration-300 ease-in-out ${isScrolled ? 'h-14' : 'h-24'}`}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 p-4">
          {['Dịch vụ', 'Về chúng tôi', 'Đánh giá'].map((label, i) => (
            <li key={i}>
              <a
                href={`#${label.toLowerCase().replace(/\s/g, '-')}`}
                className={`font-semibold text-lg transition-colors duration-300 ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-yellow-200'
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="mt-2 md:mt-0 ml-auto">
          <a
            href="#contact"
            className={`hidden md:inline-block px-6 py-2 rounded-full font-semibold transition-all duration-300 ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-yellow-400 text-dark-text hover:bg-yellow-300'
              }`}
          >
            Liên hệ
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
