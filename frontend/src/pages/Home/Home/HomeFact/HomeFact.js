import React from 'react';
import { Link } from 'react-router-dom';

const HomeFact = () => {
   return (
      <>
         <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h5>Pelayanan 24/7</h5>
                           <h1 className="white-color">Kami selalu ada untuk anda.</h1>
                        </div>
                     </div>
                     <div className="section-button section-button-left mb-30">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Hubungi kami</Link>
                     </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 col-md-8">
                     <div className="cta-satisfied">
                        <div className="single-satisfied mb-50">
                           <h1>1M+</h1>
                           <h5> <i className="fas fa-user"></i> Pengguna </h5>
                           <p>Lebih dari 1 juta pengguna yang menggunakan layanan kami.</p>
                        </div>
                        <div className="single-satisfied mb-50">
                           <h1>100+</h1>
                           <h5><i className="far fa-thumbs-up"></i> Kepuasan Pasien </h5>
                           <p>Lebih dari 100 pasien merasakan puas terhadap layanan kami.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFact;