import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import { useAuthContext } from '../../../../context/AuthContext/AuthContext';

const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   const { user, isLogin, handleLogout } = useAuthContext()
   const { pathname } = useLocation()
   const pathIndex = pathname.split("/")[1]
   if (user.role === "admin" && pathIndex === "admin") {
      return null
   }
   
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <span><i className="fas fa-phone"></i>+6281 2345 6789</span>
                           <span><i className="fas fa-envelope"></i> heal@gmail.com</span>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           {!isLogin && (<><Link to="/register" className="primary_btn">Registrasi</Link>
                           <Link to="/login" className="primary_btn">Login</Link></>)}
                           {isLogin && <a className='primary_btn' onClick={handleLogout}>Logout</a>}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div className="logo logo-circle pos-rel">
                           <Link to="/"><img src="/img/logo/logo.png" alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           <div className="header-lang f-right pos-rel d-none d-lg-block">
                           </div>
                           <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="header__menu f-right">
                           <nav id="mobile-menu">
                              <ul>
                                 <Link to="/">Beranda</Link>
                                 <li><Link to="/brands">Brands</Link>
                                 </li>
                                 {/* <li><Link to="/doctorstwo">Dokter</Link>
                                 </li> */}
                                 <li><Link to="/shop">Shop</Link>
                                 </li>
                                 <li><a href="#">Halaman</a>
                                    <ul className="submenu">
                                       <li><Link to="/about">Tentang</Link></li>
                                       <li><Link to="/appoinment">Konsultasi Apoteker</Link></li>
                                       <li><Link to="/contact">Kontak</Link></li>
                                    </ul>
                                 </li>
                              </ul>
                           </nav>
                        </div>

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeHeader;