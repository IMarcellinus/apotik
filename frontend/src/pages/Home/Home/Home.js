import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeCta from './HomeCta/HomeCta';
import HomeFact from './HomeFact/HomeFact';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <>
            <HomeHeroSection/>
            <HomeAboutArea/>
            <HomeServices/>
            <HomeOurTeam/>
            <HomeFact/>
            <HomeCta/>
            <Footer/>
        </>
    );
};

export default Home;