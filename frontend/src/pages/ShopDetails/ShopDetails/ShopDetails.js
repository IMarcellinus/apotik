import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ShopDetailsBanner from './ShopDetailsBanner/ShopDetailsBanner';
import ShopDetailsDesc from './ShopDetailsDesc/ShopDetailsDesc';
import ProductContextProvider from '../../../context/ProductContext/ProductContext';
import OrderContextProvider from '../../../context/OrderContext/OrderContext';

const ShopDetails = () => {
    return (
        <ProductContextProvider>
        <OrderContextProvider>
            <CommonPageHeader title="Product Details" subtitle="Details" />
            <ShopDetailsBanner/>
            <ShopDetailsDesc/>
            <Footer/>
        </OrderContextProvider>
        </ProductContextProvider>
    );
};

export default ShopDetails;