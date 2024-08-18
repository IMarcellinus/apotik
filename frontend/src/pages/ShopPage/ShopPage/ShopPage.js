import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ShopBanner from './ShopBanner/ShopBanner';
import ProductContextProvider from '../../../context/ProductContext/ProductContext';
import OrderContextProvider from '../../../context/OrderContext/OrderContext';

const ShopPage = () => {
    return (
        <ProductContextProvider>
            <OrderContextProvider>
            <CommonPageHeader title="Shop Page" subtitle="Shop" />
            <ShopBanner/>
            <Footer/>
            </OrderContextProvider>
        </ProductContextProvider>
    );
};

export default ShopPage;