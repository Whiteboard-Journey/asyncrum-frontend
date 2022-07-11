// @flow
import React, { useEffect } from 'react';

// components
import NavBar from './NavBar';
import Hero from './Hero';
import Services from './Services';
import Layouts from './Layouts';
import Features from './Features';
import Pricing from './Pricing';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';

// dummy data
import { services, layouts, features, plans, rawFaqs } from './Data';

const Landing = (): React$Element<React$FragmentType> => {
    useEffect(() => {
        if (document.body) document.body.classList.remove('authentication-bg');
    }, []);

    return (
        <>
            {/* navbar */}
            <NavBar />

            {/* hero */}
            <Hero />

            {/* services */}
            <Services services={services} />

            {/* layouts */}
            <Layouts layouts={layouts} />

            {/* features */}
            <Features features={features} />

            {/* pricing */}
            <Pricing plans={plans} />

            {/* faqs */}
            <FAQ rawFaqs={rawFaqs} />

            {/* contact */}
            <ContactUs />

            {/* footer */}
            <Footer />
        </>
    );
};

export default Landing;
