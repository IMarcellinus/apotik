import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
               <div className="container">
                  <div className="row align-items-center" style={{ position: 'relative', zIndex: '9999' }}>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-contact-info footer-contact-info-3 mb-40">
                           <div className="footer-logo mb-35">
                              <Link to="/"><img src="img/logo/footer-logo-3.png" alt="" /></Link>
                           </div>
                           <div className="footer-contact-content mb-25">
                              <p>Apotek online pertama di Indonesia. Buka 24 jam untuk melayani anda. Solusi terpercaya kesehatan keluarga anda.</p>
                           </div>
                           <div className="footer-emailing">
                              <ul>
                                 <li><i className="far fa-envelope"></i>healcare@gmail.com</li>
                                 <li><i className="far fa-clone"></i>healcare.com</li>
                                 <li><i className="far fa-flag"></i>Jember, Indonesia</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-widget mb-40">
                           <div className="footer-title">
                              <h3>Halaman</h3>
                           </div>
                           <div className="footer-menu footer-menu-2">
                              <ul>
                                 <li><Link to="/#">Beranda</Link></li>
                                 <li><Link to="/services">Brands</Link></li>
                                 <li><Link to="/doctorstwo">Dokter</Link></li>
                                 <li><Link to="/shop">Shop</Link></li>
                                 <li><Link to="/about">Tentang Kami</Link></li>
                                 <li><Link to="/appoinment">Konsultasi</Link></li>
                                 <li><Link to="/contact">Kontak</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom pt-25 pb-20">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="footer-copyright footer-copyright-3 text-center">
                           <p>Copyright Heal Care Team - 2024</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;