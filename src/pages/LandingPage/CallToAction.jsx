import React from 'react';
import bg_paralax from '../../assets/images/background-cta.jpg';

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="relative py-32 text-white text-center overflow-hidden bg-fixed bg-center bg-cover before:absolute before:inset-0 before:bg-black/75 before:content-[''] before:z-0"
      style={{ backgroundImage: `url(${bg_paralax})` }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Sẵn Sàng Cho Chuyến Đi Tuyệt Vời Tiếp Theo?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Liên hệ với chúng tôi ngay hôm nay để nhận báo giá và lựa chọn chiếc xe ưng ý nhất cho hành trình của bạn.
        </p>
        <a
          href="tel:+84898757515"
          className="bg-sandy-yellow hover:bg-yellow-400 text-dark-text font-bold py-4 px-10 rounded-full text-xl shadow-lg transform transition duration-300 hover:scale-105 inline-block"
        >
          Liên Hệ Đặt Xe Ngay!
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
