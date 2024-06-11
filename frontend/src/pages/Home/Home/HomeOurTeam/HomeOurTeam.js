import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';

const HomeOurTeam = () => {
   return (
      <>
         <section className="team-area pt-115 pb-55">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Tim Dokter Kami </h5>
                           <h1>Profesional dan Tersertifikasi</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="row">

                  <HomeSingleTeam image="1" title="Monkey D. Luffy" subtitle="Founder" />
                  <HomeSingleTeam image="2" title="Roronoa Zoro" subtitle="bedah neurologi" />
                  <HomeSingleTeam image="3" title="Nami" subtitle="pasca operasi" />
                  <HomeSingleTeam image="4" title="Usopp" subtitle="spesialis gigi" />
                  <HomeSingleTeam image="5" title="Sanji" subtitle="spesialis mata" />
                  <HomeSingleTeam image="6" title="Tony Tony Chopper" subtitle="kanker" />

               </div> */}
            </div>
         </section>
      </>
   );
};

export default HomeOurTeam;