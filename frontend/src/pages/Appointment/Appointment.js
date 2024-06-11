import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import AppointmentArea from './AppointmentArea/AppointmentArea';
import BookAppoinment from './BookAppoinment/BookAppoinment';

const Appointment = () => {
    return (
        <>
            <CommonPageHeader title="Konsultasi Apoteker" subtitle="Konsultasi" />
            <AppointmentArea/>
            <BookAppoinment/>
            <Footer/>
        </>
    );
};

export default Appointment;