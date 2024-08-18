import React from 'react';
import { FaCapsules } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomeSIngleService = ({ id, title, border_class}) => {
   const navigate = useNavigate()

   const handleClick = () => {
      navigate(`/shop?id=${id}&name=${title}`)
   }
   return (
      <>
         <div onClick={handleClick} className="col-xl-4 col-lg-6 col-md-6 cursor-pointer">
            <div className={border_class ? `service-box ${border_class} text-center mb-30` : 'service-box text-center mb-30'}>
               <div className="service-thumb">
                  <FaCapsules size={40} color='red' />
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