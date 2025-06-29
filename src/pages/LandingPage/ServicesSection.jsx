import React from 'react';
import { FaCar, FaUserTie, FaBuilding, FaPlaneDeparture } from 'react-icons/fa'; // Thêm icon
import service_1 from '../../assets/images/service/service_1.jpg';
import service_2 from '../../assets/images/service/service_2.jpg';
import service_3 from '../../assets/images/service/service_3.jpg';
import service_4 from '../../assets/images/service/service_4.jpg';
// Mẫu dữ liệu cho các loại xe và dịch vụ
const carServices = [
  {
    title: 'Xe hợp đồng',
    description: 'Dịch vụ chất lượng cao, giá hợp lý.',
    price: 'Từ 500.000 VNĐ/ngày',
    image: service_1
  },
  {
    title: 'Tour tỉnh',
    description: 'Tận hưởng chuyến đi an toàn, thoải mái với đội ngũ tài xế giàu kinh nghiệm, nhiệt tình.',
    price: 'Từ 800.000 VNĐ/chuyến',
    image: service_2
  },
  {
    title: 'Đưa Đón Sân Bay',
    description: 'Dịch vụ đưa đón sân bay nhanh chóng, đúng giờ, an toàn và tiện lợi.',
    price: 'Từ 350.000 VNĐ/lượt',
    image: service_3
  },
  {
   
    title: 'Theo giờ',
    description: 'Giải pháp di chuyển tối ưu cho các sự kiện, công tác, đón tiếp đối tác.',
    price: 'Liên hệ báo giá',
    image: service_4
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-16 text-dark-text">
          Dịch Vụ & Bảng Giá <span className="text-ocean-blue">Của Chúng Tôi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {carServices.map((service, index) => (
            <div
              key={index}
              className="bg-light-gray rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row transform hover:scale-[1.02] transition duration-300 ease-in-out"
            >
              <div className="sm:w-1/2 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3 text-ocean-blue">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-dark-text">{service.title}</h3>
                  </div>
                  <p className="text-gray-text mb-4 text-left">{service.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-bold text-ocean-blue">{service.price}</span>
                  <a href="#contact" className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 font-semibold text-lg">
                    Đặt Ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
