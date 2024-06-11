import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import RegisteArea from './RegisteArea/RegisteArea';

const Register = () => {
    return (
        <>
            <CommonPageHeader title="Registrasi" subtitle="Registrasi" />
            <RegisteArea/>
            <Footer/>
        </>
    );
};

export default Register;