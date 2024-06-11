import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeroSingleSlide = ({ bg_className}) => {
   return (
      <>
         <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="hero-text">
                        <div className="hero-slider-caption ">
                           <h5>Apotek online pertama di Indonesia</h5>
                           <h1>Perawatan & Dokter Terpercaya.</h1>
                           <p>Apotek terpercaya keluarga Nusantara.</p>
                        </div>
                        <div className="hero-slider-btn">
                           <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Hubungi Kami</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeHeroSingleSlide;