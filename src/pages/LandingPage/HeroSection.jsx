import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import heroCarImage from '../../assets/images/banner_1.png';

const HeroSection = () => {
  return (
    <section className="pt-25 relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-[#0277ff] to-[#bff5fe] overflow-hidden">
      {/* Left: Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white drop-shadow-md">
          Chuyến Đi Hoàn Hảo <span className="text-yellow-200">Bắt Đầu Từ Đây</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Thuê xe du lịch cao cấp, đa dạng lựa chọn và dịch vụ tận tâm cho mọi hành trình của bạn.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-white bg-blue-700 hover:bg-blue-800 transition duration-300 font-semibold text-lg"
          >
            Đặt Xe Ngay
          </a>
          <a
            href="tel:+84898757515"
            className="px-6 py-3 rounded-lg text-blue-700 bg-white border border-blue-700 hover:bg-blue-100 transition duration-300 font-semibold text-lg flex items-center justify-center"
          >
            <FaPhoneAlt className="mr-2" />
            Gọi Ngay: 0898757515
          </a>
        </div>
      </div>

      {/* Right: Car Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
        <img
          src={heroCarImage}
          alt="Modern Car Rental"
          className="w-full object-contain transform transition-transform duration-500 drop-shadow-lg"
        />
        {/* Blur background glow */}
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
