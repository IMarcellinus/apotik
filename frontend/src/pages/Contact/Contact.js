import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';

const Contact = () => {
    return (
        <>
            <CommonPageHeader title="Hubungi Kami" subtitle="Hubungi Kami" />
            <ContactArea/>
            <ContactFormArea/>
            <Footer/>
        </>
    );
};

export default Contact;