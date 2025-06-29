import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo_2_1 from '../../assets/images/logo_2_1_black.png';

const Footer = () => {
  return (
    <footer className="bg-white text-dark-text py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Company Info */}
        <div>
          <div className="mb-4 flex justify-center md:justify-start">
            <img
              src={logo_2_1}
              alt="Thuê Xe Du Lịch"
              className="h-14 object-contain"
            />
          </div>
          <p className="text-gray-600 mb-1">Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
          <p className="text-gray-600 mb-1">Điện thoại: (012) 345-6789</p>
          <p className="text-gray-600">Email: info@thuexedulich.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="text-gray-600 hover:text-ocean-blue transition duration-300">Dịch vụ</a></li>
            <li><a href="#why-us" className="text-gray-600 hover:text-ocean-blue transition duration-300">Về chúng tôi</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-ocean-blue transition duration-300">Đánh giá</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-ocean-blue transition duration-300">Liên hệ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ocean-blue transform hover:scale-110 transition duration-300"
            >
              <FaFacebook className="text-3xl sm:text-4xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ocean-blue transform hover:scale-110 transition duration-300"
            >
              <FaInstagram className="text-3xl sm:text-4xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ocean-blue transform hover:scale-110 transition duration-300"
            >
              <FaTwitter className="text-3xl sm:text-4xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Thuê Xe Du Lịch. Mọi quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;
