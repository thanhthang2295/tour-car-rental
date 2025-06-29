import React from 'react';
import { FaShieldAlt, FaDollarSign, FaHeadset, FaThumbsUp } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt className="text-4xl text-ocean-blue mb-4" />,
    title: 'An Toàn & Đời Mới',
    description: 'Đội xe được bảo trì thường xuyên, đảm bảo an toàn tuyệt đối.',
  },
  {
    icon: <FaDollarSign className="text-4xl text-ocean-blue mb-4" />,
    title: 'Giá Cả Cạnh Tranh',
    description: 'Mức giá thuê xe minh bạch, không phụ phí ẩn.',
  },
  {
    icon: <FaHeadset className="text-4xl text-ocean-blue mb-4" />,
    title: 'Hỗ Trợ 24/7',
    description: 'Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc của bạn.',
  },
  {
    icon: <FaThumbsUp className="text-4xl text-ocean-blue mb-4" />,
    title: 'Thủ Tục Đơn Giản',
    description: 'Quy trình thuê xe nhanh chóng, tiết kiệm thời gian.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Tại Sao Chọn Chúng Tôi?</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
