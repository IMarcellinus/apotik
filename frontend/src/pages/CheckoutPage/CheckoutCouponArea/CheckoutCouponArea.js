import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const CheckoutCouponArea = () => {
   const [show,setShow] = useState(false);
   const [couponShow, setCouponShow] = useState(false);
   const { passwordResetWithEmail} = useAuth();
   return (
      <>
         <section className="coupon-area pt-100 pb-30">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="coupon-accordion">
                        {/* <!-- ACCORDION START --> */}
                        <h3>Belum Login? <span onClick={() => setShow(!show)} id="showlogin">Klik di sini untuk login</span></h3>
                       {show && <div id="checkout-login" >
                           <div className="coupon-info">
                              <p className="coupon-text">Masukkan Username atau Email dan Password .</p>
                              <form action="#">
                                 <p className="form-row-first">
                                    <label>Username atau email <span className="required">*</span></label>
                                    <input type="text" />
                                 </p>
                                 <p className="form-row-last">
                                    <label>Password <span className="required">*</span></label>
                                    <input type="text" />
                                 </p>
                                 <p className="form-row">
                                    <Link to="/login"><button className="primary_btn theme-btn" type="button">Login</button></Link>
                                    <label>
                                       <input type="checkbox" className='me-2' />
                                       Username dan Password sudah sesuai
                                    </label>
                                 </p>
                                 <p className="lost-password">
                                    <button onClick={passwordResetWithEmail}>Lupa Password?</button>
                                 </p>
                              </form>
                           </div>
                        </div>}
                        {/* <!-- ACCORDION END --> */}
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="coupon-accordion">
                        {/* <!-- ACCORDION START --> */}
                        <h3>Punya Kupon? <span onClick={() => setCouponShow(!couponShow)} id="showcoupon">Klik di sini untuk memasukkan kode Anda</span></h3>
                        {couponShow && <div id="checkout_coupon">
                           <div className="coupon-info">
                              <form action="#">
                                 <p className="checkout-coupon">
                                    <input type="text" placeholder="Kode Kupon" />
                                    <button className="primary_btn theme-btn" type="button">Terapkan Kupon</button>
                                 </p>
                              </form>
                           </div>
                        </div>}
                        {/* <!-- ACCORDION END --> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CheckoutCouponArea;