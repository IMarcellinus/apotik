import React from 'react';
import AboutSingleCounter from '../../../components/AboutSingleCounter/AboutSingleCounter';

const AboutCounter = () => {
   return (
      <>
         <section className="counter-wraper pt-120 pb-90 gray-bg">
            <div className="container">
               <div className="row">

                  <AboutSingleCounter icon="1" counter="358" title="Cabang di Seluruh Dunia" />
                  <AboutSingleCounter icon="2" counter="358" title="Kerjasama Rumah Sakit" />
                  <AboutSingleCounter icon="3" counter="238" title="Partner" />

               </div>
            </div>
         </section>
      </>
   );
};

export default AboutCounter;