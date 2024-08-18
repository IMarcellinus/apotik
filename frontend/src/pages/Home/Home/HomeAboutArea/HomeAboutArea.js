import React from 'react';

const HomeAboutArea = () => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5 about_left">
                     <div className="medical-icon-brand-2">
                        <img src="img/about/medical-brand-icon-border.png" alt=""/>
                     </div>
                     <div className="about-left-side pos-rel mb-30">
                        <div className="about-front-img">
                           <img src="img/about/about-img.jpg" alt=""/>
                        </div>
                        <div className="about-shape">
                           <img src="img/about/about-shape.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>Tentang Kami </h5>
                           <h1>Cerita Tentang Heal Care.</h1>
                        </div>
                        <div className="about-text">
                           <p>Heal Care adalah apotek modern yang berfokus pada pelayanan kesehatan masyarakat dengan menyediakan beragam produk farmasi dan layanan kesehatan yang berkualitas. Berlokasi strategis di pusat kota, Heal Care menjadi destinasi utama bagi pelanggan yang mencari solusi kesehatan yang lengkap dan terpercaya.</p><br/>
                        </div>
                        <div className="about-author d-flex align-items-center">
                           <div className="author-ava">
                              <img src="img/about/author-ava.png" alt=""/>
                           </div>
                           <div className="author-desination">
                              <h4>Monkey D. Luffy</h4>
                              <h6>founder</h6>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAboutArea;