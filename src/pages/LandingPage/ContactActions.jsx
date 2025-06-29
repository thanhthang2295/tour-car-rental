import React from 'react';
import { FaFacebookMessenger, FaPhoneAlt } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const ContactActions = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col space-y-3">
      {/* Zalo */}
      <a
        href="https://zalo.me/123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-500 shadow-lg rounded-full p-3 transition transform hover:scale-110 hover:shadow-xl"
        title="Zalo"
      >
        <SiZalo className="w-5 h-5" />
      </a>

      {/* Facebook */}
      <a
        href="https://m.me/yourfacebookpage"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 shadow-lg rounded-full p-3 transition transform hover:scale-110 hover:shadow-xl"
        title="Facebook Messenger"
      >
        <FaFacebookMessenger className="w-5 h-5" />
      </a>

      {/* Gọi điện với hiệu ứng "alo" */}
      <div className="relative flex items-center justify-center group">
        {/* Vòng phát sáng xung quanh */}
        <span
          className="absolute w-12 h-12 rounded-full border-2 border-green-400 animate-ping"
          style={{ animationDuration: '1.5s' }}
        ></span>
        <span
          className="absolute w-16 h-16 rounded-full border-2 border-green-300 opacity-50 animate-ping"
          style={{ animationDuration: '2.5s' }}
        ></span>

        {/* Nút gọi */}
        <a
          href="tel:+84898757515"
          className="relative z-10 bg-white text-green-500 shadow-lg rounded-full p-3 transition transform hover:scale-110 hover:shadow-xl"
          title="Gọi ngay"
        >
          <FaPhoneAlt className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ContactActions;
