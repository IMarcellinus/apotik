import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';

const ServicesOne = () => {
   return (
      <>
         <CommonPageHeader title="Brand yang Bekerja Sama dengan Kami" subtitle="Brands" />
         <ServicesOneABout/>
         <Footer/>
      </>
   );
};

export default ServicesOne;