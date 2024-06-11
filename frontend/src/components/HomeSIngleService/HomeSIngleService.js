import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, title, border_class}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={border_class ? `service-box ${border_class} text-center mb-30` : 'service-box text-center mb-30'}>
               <div className="service-thumb">
                  <img src={`img/services/spesialis${icon}.png`} alt=""/>
               </div>
               <div className="service-content">
                  <h3>{title}</h3>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;