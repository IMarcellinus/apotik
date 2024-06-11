import React from 'react';
import { useProductContext } from '../../../../context/ProductContext/ProductContext';

const ShopDetailsDesc = () => {
   const { oneProduct } = useProductContext();
   return (
      <>
         <section className="product-desc-area pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="bakix-details-tab">
                        <ul className="nav text-center justify-content-center pb-30 mb-50" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="desc-tab" data-bs-toggle="tab" href="#id-desc" role="tab"
                                 aria-controls="home" aria-selected="true">Deskripsi </a>
                           </li>
                           {/* <li className="nav-item">
                              <a className="nav-link" id="id-add-in" data-bs-toggle="tab" href="#id-add" role="tab"
                                 aria-controls="profile" aria-selected="false">Informasi Tambahan</a>
                           </li> */}
                        </ul>
                     </div>
                     <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="id-desc" role="tabpanel" aria-labelledby="desc-tab">
                           <div className="event-text mb-40">
                              <p>{oneProduct.description}</p>
                              {/* <p>Nama: Paracetamol</p>
                              <p>Deskripsi: Obat penurun panas dan pereda nyeri ringan hingga sedang, seperti sakit kepala, nyeri otot, nyeri gigi, dan nyeri menstruasi.</p>
                              <p>Dosis: 500 mg per tablet.</p>
                              <p>Efek Samping: Efek samping yang umum termasuk mual, muntah, dan ruam kulit.</p>
                              <p>Instruksi Penggunaan: Dewasa dan anak di atas 12 tahun: 1-2 tablet setiap 4-6 jam. Dosis maksimal 4 gram per hari.</p>
                              <p>Stok: 1000 (botol).</p>
                              <p>Satuan: Tablet.</p> */}
                           </div>
                        </div>
                        {/* <div className="tab-pane fade" id="id-add" role="tabpanel" aria-labelledby="id-add-in">
                           <div className="additional-info">
                              <div className="table-responsive">
                                 <h4>Additional information</h4>
                                 <table className="table">
                                    <tbody>
                                       <tr>
                                          <th>Dosis</th>
                                          <td className="product_weight">200 mg per tablet</td>
                                       </tr>
                                       <tr>
                                          <th>Stok</th>
                                          <td className="product_dimensions">800 (botol)</td>
                                       </tr>
                                       <tr>
                                          <th>Satuan</th>
                                          <td className="product_dimensions">Tablet</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopDetailsDesc;