import { useEffect } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import Pricing from './Pricing';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { services, features, plans } from './data';

const Landing = () => {
  useEffect(() => {
    if (document.body) document.body.classList.remove('authentication-bg');
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <Services services={services} />
      <Features features={features} />
      <Pricing plans={plans} />
      <ContactUs />
      <Footer />
    </>
  );
};

export { Landing };
