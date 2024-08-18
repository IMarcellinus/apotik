import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import Appointment from './pages/Appointment/Appointment';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Contact from './pages/Contact/Contact';
import DoctorDetails from './pages/Doctors/DoctorDetails/DoctorDetails';
import DoctorsTwo from './pages/Doctors/DoctorsTwo/DoctorsTwo';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ServicesOne from './pages/Services/ServicesOne/ServicesOne';
import ShopDetails from './pages/ShopDetails/ShopDetails/ShopDetails';
import ShopPage from './pages/ShopPage/ShopPage/ShopPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import AuthContextProvider from './context/AuthContext/AuthContext';
import AdminPages from './AdminPages/AdminPages';
import ProductPage from './AdminPages/ProductPage/ProductPage';
import CategoryPage from './AdminPages/CategoryPage/CategoryPage';
import OrderPage from './AdminPages/OrderPage/OrderPage';
import SupplierPage from './AdminPages/SupplierPage/SupplierPage';
import HomeHeader from './pages/Home/Home/HomeHeader/HomeHeader';


function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
        <AuthContextProvider>
          <ScrollTop />
          <HomeHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/brands" element={<ServicesOne />} />
            <Route path="/doctorsTwo" element={<DoctorsTwo />} />
            <Route path="/doctorDetails" element={<DoctorDetails />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shopDetails/:id" element={<ShopDetails />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/appoinment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="/admin" element={<AdminPages />}>
              <Route path='obat' element={<ProductPage />} />
              <Route path='kategori-obat' element={<CategoryPage />} />
              <Route path='pemesanan' element={<OrderPage />} />
              <Route path='supplier' element={<SupplierPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
