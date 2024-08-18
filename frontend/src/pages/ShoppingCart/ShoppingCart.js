import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ShoppingCartArea from './ShoppongCartArea/ShoppingCartArea';

const ShoppingCart = () => {
    return (
        <>
            <CommonPageHeader title="Keranjang" subtitle="Keranjang" />
            <ShoppingCartArea/>
            <Footer/>
        </>
    );
};

export default ShoppingCart;