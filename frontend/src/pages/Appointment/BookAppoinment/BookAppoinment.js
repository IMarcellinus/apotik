import React from 'react';

const BookAppoinment = () => {
   return (
      <>
         <section className="appointment-area appointment-area-3 appointment_page_bg pos-rel pt-115 pb-120"
            data-background="img/appoinment/appointment-bg.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <div className="calculate-box white-bg">
                        <div className="calculate-content">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="about-title news-letter-title mb-70">
                                    <h5 className="pink-color">Konsultasi</h5>
                                    <h1>Konsultasi Dokter</h1>
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <select className="form-select select_style" aria-label="Default select example">
                                    <option defaultValue={'Department'}>Spesialis</option>
                                    <option defaultValue="1">Pasca Operasi</option>
                                    <option defaultValue="2">Spesialis Gigi</option>
                                    <option defaultValue="3">Spesialis Mata</option>
                                    <option defaultValue="4">Kanker</option>
                                    <option defaultValue="5">Bedah Neurologi</option>
                                    <option defaultValue="6">Masalah Alergi</option>
                                 </select>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <select className="form-select select_style" aria-label="Default select example">
                                    <option defaultValue={'Doctor'}>Dokter</option>
                                    <option defaultValue="1">Nami</option>
                                    <option defaultValue="2">Usopp</option>
                                    <option defaultValue="3">Sanji</option>
                                    <option defaultValue="4">Tony Tony Chopper</option>
                                    <option defaultValue="5">Roronoa Zoro</option>
                                    <option defaultValue="2">Monkey D. Luffy</option>
                                 </select>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <input type="text" placeholder="Nama"/>
                                 </form>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <input type="text" placeholder="Nomor HP"/>
                                 </form>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <input type="text" placeholder="Tanggal"/>
                                 </form>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <input type="text" placeholder="Waktu"/>
                                 </form>
                              </div>
                              <div className="col-xl-12">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <textarea name="Special request" cols="30" rows="10" placeholder="Keluhan"></textarea>
                                    <i className="far fa-edit"></i>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <a href="/login" className="primary_btn mt-40">Kirim Permintaan</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BookAppoinment;