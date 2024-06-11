import React from 'react';
import { Link } from 'react-router-dom';

const AboutAppoinment = () => {
   return (
      <>
         <section className="appoinment-section pt-120 pb-120" data-background="img/bg/appointment.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="appoinment-box white">
                        <div className="appoinment-content">
                           <span className="small-text">Tentang Kami</span>
                           <h1>"Tersenyumlah dengan Kesehatan Bersama Heal Care!"</h1>
                           <p>Kami di Heal Care hadir untuk menjadi mitra setia Anda dalam perjalanan kesehatan. Dengan layanan apotek online kami, kesehatan Anda menjadi prioritas utama. Kami tidak hanya menyediakan obat-obatan berkualitas, tetapi juga memberikan perawatan yang hangat dan penuh perhatian.</p>
                           <ul className="professinals-list pt-30">
                              <li>
                                 <i className="fa fa-check"></i>
                                 Pelayanan Kesehatan yang Terpercaya.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Kemudahan Akses.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Konsultasi Kesehatan Online.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Komitmen Terhadap Kesejahteraan.
                              </li>
                           </ul>
                        </div>
                        <Link to="/login" className="primary_btn mt-40">Konsultasi Apoteker</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutAppoinment;