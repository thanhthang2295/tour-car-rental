import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Nguyễn Văn Nam',
    title: 'Khách Du Lịch',
    quote: 'Dịch vụ thuê xe vượt xa mong đợi! Xe sạch sẽ, tài xế thân thiện và chuyên nghiệp. Chắc chắn sẽ quay lại!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder avatar
  },
  {
    name: 'Trần Thị Mai',
    title: 'Doanh Nhân',
    quote: 'Giải pháp di chuyển tuyệt vời cho công tác. Xe đúng giờ, tiện nghi và giúp tôi tiết kiệm rất nhiều thời gian.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder avatar
  },
  {
    name: 'Lê Thanh Tùng',
    title: 'Nhiếp Ảnh Gia',
    quote: 'Tôi cần một chiếc xe rộng rãi cho thiết bị và đây là lựa chọn hoàn hảo. Dịch vụ hỗ trợ rất nhanh chóng.',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg', // Placeholder avatar
  },
  {
    name: 'Phạm Thị Hương',
    title: 'Quản Lý Sự Kiện',
    quote: 'Thuê xe cho sự kiện lớn chưa bao giờ dễ dàng đến thế. Đội ngũ tư vấn rất nhiệt tình và hỗ trợ tận tâm.',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg', // Placeholder avatar
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-sandy-yellow">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-dark-text">
          Khách Hàng <span className="text-ocean-blue">Đánh Giá</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white p-10 rounded-xl shadow-2xl relative">
            <FaQuoteLeft className="absolute top-6 left-6 text-ocean-blue text-5xl opacity-20" />
            <p className="text-xl italic text-gray-text leading-relaxed mb-8 mt-4 md:mt-0">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-ocean-blue shadow-md mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-dark-text">{testimonials[currentIndex].name}</h4>
                <p className="text-md text-gray-text">{testimonials[currentIndex].title}</p>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sandy-yellow w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-ocean-blue hover:bg-ocean-blue hover:text-white transition duration-300 transform -translate-x-full md:-translate-x-1/2 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-ocean-blue hover:bg-ocean-blue hover:text-white transition duration-300 transform translate-x-full md:translate-x-1/2 focus:outline-none"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-ocean-blue w-6' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
