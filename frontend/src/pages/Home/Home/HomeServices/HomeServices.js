import React, { useEffect } from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';
import { useCategoriesContext } from '../../../../context/CategoriesContext/CategoriesContext';

const HomeServices = () => {
   const { categories, handleGetCategories } = useCategoriesContext()
   useEffect(() => {
      handleGetCategories()
   }, [])
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel home_ser_title">
                           <h5>Tentang Obat</h5>
                           <h1>Kategori Obat Berdasarkan Penyakit</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {categories.map((category) => (
                     <HomeSIngleService
                        key={category.id}
                        id={category.id}
                        title={category.name}
                     />
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;