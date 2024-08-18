import React, { useState } from 'react';

const CheckoutArea = () => {
   const [addressShow,setAddressShow] = useState(false);
   const [createAccountShow,setCreateAccoutShow] = useState(false);
   return (
      <>
         <section className="checkout-area pb-70">
            <div className="container">
               <form action="#">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="checkbox-form">
                           <h3>Detail Penagihan</h3>
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Nama Depan <span className="required">*</span></label>
                                    <input type="text" placeholder="Nama Depan" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Nama Belakang <span className="required">*</span></label>
                                    <input type="text" placeholder="Nama Belakang" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Alamat <span className="required">*</span></label>
                                    <input type="text" placeholder="Alamat Lengkap" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Kota/Kabupaten<span className="required">*</span></label>
                                    <input type="text" placeholder="Kota/Kabupaten" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Provinsi <span className="required">*</span></label>
                                    <input type="text" placeholder="Provinsi" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Kode Pos <span className="required">*</span></label>
                                    <input type="text" placeholder="Kode Pos" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Alamat Email<span className="required">*</span></label>
                                    <input type="email" placeholder="Email" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>No HP<span className="required">*</span></label>
                                    <input type="text" placeholder="No HP" />
                                 </div>
                              </div>
                           </div>
                           <div className="different-address">
                              <div className="ship-different-title">
                                 <h3 >
                                    <label>Kirim ke alamat yang berbeda?</label>
                                    <input onClick={() => setAddressShow(!addressShow)} id="ship-box" type="checkbox" />
                                 </h3>
                              </div>
                              {addressShow && <div id="" style={{transition:'0.5s'}}>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Nama Depan <span className="required">*</span></label>
                                          <input type="text" placeholder="Nama Depan" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Nama Belakang <span className="required">*</span></label>
                                          <input type="text" placeholder="Nama Belakang" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>Alamat<span className="required">*</span></label>
                                          <input type="text" placeholder="Alamat Lengkap" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>Kota/Kabupaten <span className="required">*</span></label>
                                          <input type="text" placeholder="Kota/Kabupaten" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Provinsi<span className="required">*</span></label>
                                          <input type="text" placeholder="Provinsi" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Kode Pos <span className="required">*</span></label>
                                          <input type="text" placeholder="Kode Pos" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Alamat Email <span className="required">*</span></label>
                                          <input type="email" placeholder="Alamat Email" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>No HP <span className="required">*</span></label>
                                          <input type="text" placeholder="No HP" />
                                       </div>
                                    </div>
                                 </div>
                              </div>}
                              <div className="order-notes">
                                 <div className="checkout-form-list">
                                    <label>Catatan Lainnya</label>
                                    <textarea id="checkout-mess" cols="30" rows="10"
                                       placeholder="Catatan tentang pesanan Anda, mis. catatan khusus untuk pengiriman."></textarea>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="your-order mb-30 ">
                           <h3>Pesanan Anda</h3>
                           <div className="your-order-table table-responsive">
                              <table>
                                 <thead>
                                    <tr>
                                       <th className="product-name">Produk</th>
                                       <th className="product-total">Total</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr className="cart_item">
                                       <td className="product-name">
                                          Paracetamol <strong className="product-quantity"> × 1</strong>
                                       </td>
                                       <td className="product-total">
                                          <span className="amount">$165.00</span>
                                       </td>
                                    </tr>
                                    <tr className="cart_item">
                                       <td className="product-name">
                                          Ibuprofen <strong className="product-quantity"> × 1</strong>
                                       </td>
                                       <td className="product-total">
                                          <span className="amount">$50.00</span>
                                       </td>
                                    </tr>
                                 </tbody>
                                 <tfoot>
                                    <tr className="cart-subtotal">
                                       <th>Subtotal Keranjang</th>
                                       <td><span className="amount">$215.00</span></td>
                                    </tr>
                                    <tr className="shipping">
                                       <th>Pengiriman</th>
                                       <td>
                                          <ul>
                                             <li>
                                                <input type="radio" />
                                                <label>
                                                   Reguler: <span className="amount">$7.00</span>
                                                </label>
                                             </li>
                                             <li>
                                                <input type="radio" />
                                                <label>
                                                   Express: <span className="amount">$10.00</span>
                                                </label>
                                             </li>
                                             <li></li>
                                          </ul>
                                       </td>
                                    </tr>
                                    <tr className="order-total">
                                       <th>Total Order</th>
                                       <td><strong><span className="amount">$215.00</span></strong>
                                       </td>
                                    </tr>
                                 </tfoot>
                              </table>
                           </div>

                           <div className="payment-method">
                              <div className="accordion" id="accordionExample">
                                 <div className="card">
                                    <div className="card-header" id="headingOne">
                                       <h5 className="mb-0">
                                          <button className="btn-link" type="button" data-toggle="collapse"
                                             data-target="#collapseOne" aria-expanded="true"
                                             aria-controls="collapseOne">
                                             Transfer Bank
                                          </button>
                                       </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                       data-parent="#accordionExample">
                                       <div className="card-body">
                                          Kirim ke rek BNI 123455667 A.N Heal Care
                                       </div>
                                    </div>
                                 </div>
                                 <div className="card">
                                    <div className="card-header" id="headingThree">
                                       <h5 className="mb-0">
                                          <button className="btn-link collapsed" type="button" data-toggle="collapse"
                                             data-target="#collapseThree" aria-expanded="false"
                                             aria-controls="collapseThree">
                                             PayPal
                                          </button>
                                       </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                       data-parent="#accordionExample">
                                       <div className="card-body">
                                       Bayar melalui PayPal; Anda dapat membayar dengan kartu kredit Anda jika Anda tidak memiliki akun PayPal.
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="order-button-payment mt-20">
                                 <button type="submit" className="primary_btn theme-btn">Pesan Sekarang</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </section>
      </>
   );
};

export default CheckoutArea;