import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeFact from '../../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import DoctorsTwoTeamArea from './DoctorsTwoTeamArea/DoctorsTwoTeamArea';

const DoctorsTwo = () => {
    return (
        <>
            <CommonPageHeader title="Dokter" subtitle="Dokter" />
            <DoctorsTwoTeamArea/>
            <HomeFact />
            <Footer/>
        </>
    );
};

export default DoctorsTwo;