import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeOurTeam from '../Home/Home/HomeOurTeam/HomeOurTeam';
import AboutAppoinment from './AboutAppoinment/AboutAppoinment';
import AboutArea from './AboutArea/AboutArea';
import AboutCounter from './AboutCounter/AboutCounter';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';

const AboutUs = () => {
   return (
      <>
         <CommonPageHeader title="Tentang Kami" subtitle="Tentang Kami" />
         <AboutArea/>
         <AboutCounter/>
         <AboutAppoinment/>
         <HomeOurTeam/>
         <HomeFact/>
         <AboutTestimonial/>
         <Footer/>
      </>
   );
};

export default AboutUs;