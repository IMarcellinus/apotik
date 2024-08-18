import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const ServicesOneABout = () => {
    return (
        <>
          <section className="about-area pt-120 pb-90">
             <div className="container">
                <div className="row ">
                   <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                         <div className="section-icon">
                            <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt=""/>
                         </div>
                         <div className="section-text section-text-small pos-rel">
                            <h5>Brand yang berkerja sama </h5>
                            <h1>Beberapa brand terkenal yang bekerja sama dengan kami</h1>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="row">
                   <HomeSIngleService icon="01" title="Paramex" border_className="service-box-border" />
                   <HomeSIngleService icon="02" title="Bodrex" border_className="service-box-border" />
                   <HomeSIngleService icon="03" title="CDR" border_className="service-box-border" />
                   <HomeSIngleService icon="04" title="Cetaphil" border_className="service-box-border" />
                   <HomeSIngleService icon="05" title="Cap Lang" border_className="service-box-border" />
                   <HomeSIngleService icon="06" title="Antangin" border_className="service-box-border" />
                   
                </div>
             </div>
          </section>
        </>
    );
};

export default ServicesOneABout;