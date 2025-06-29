import React from 'react';
import Header from '../../components/layouts/Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from '../../components/layouts/Footer';
import ContactActions from './ContactActions';

function LandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased text-dark-text bg-mint-500">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <ContactActions />
      <Footer />
    </div>
  );
}

export default LandingPage;
