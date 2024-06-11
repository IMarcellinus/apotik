import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductContext } from '../../../../context/ProductContext/ProductContext';
import { useAuthContext } from '../../../../context/AuthContext/AuthContext';
import { useOrderContext } from '../../../../context/OrderContext/OrderContext';
import ModalOrder from './Modal';

const ShopDetailsBanner = () => {
   const { oneProduct, handleGetProductById } = useProductContext()
   const { id } = useParams()
   const navigate = useNavigate()
   const { isLogin } = useAuthContext()
   const { handleOpenOrder: handleOrder } = useOrderContext()
   const handleOpenOrder = (id, price) => {
      if (!isLogin) {
         navigate('/login')
         return
      }
      handleOrder(id, price)
   }

   useEffect(() => {
      handleGetProductById(id)
   }, [id])
   return (
      <>
         <section className="shop-banner-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7">
                     <div className="shop-thumb-tab mb-30">
                        <ul className="nav" id="myTab2" role="tablist">
                           {oneProduct.imageUrl && oneProduct.imageUrl.map((item, index) => (
                              <li className="nav-item" key={index}>
                                 <a className={`nav-link ${index === 0 ? 'active' : ''}`} id={`home-tab${index}`} data-bs-toggle="tab"
                                    href={`#home${index}`} role="tab" aria-selected="true"><img
                                    src={item} alt=""/></a>
                              </li>
                           ))}
                           {/* <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                 aria-selected="true"><img src="/img/shop/details/thumb1.jpg" alt=""/> </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                 aria-selected="false"><img src="/img/shop/details/thumb2.jpg" alt=""/></a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="profile-tab2" data-bs-toggle="tab" href="#profile1" role="tab"
                                 aria-selected="false"><img src="/img/shop/details/thumb3.jpg" alt=""/></a>
                           </li> */}
                        </ul>
                     </div>
                     <div className="product-details-img mb-30">
                        <div className="tab-content" id="myTabContent2">
                           {oneProduct.imageUrl && oneProduct.imageUrl.map((item, index) => (
                              <div className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={`home${index}`} role="tabpanel"
                                 key={index}>
                                 <img src={item} alt=""/>
                              </div>
                           ))}
                           {/* <div className="tab-pane fade show active" id="home" role="tabpanel">
                              <div className="product-large-img">
                                 <img src="/img/shop/details/large1.jpg" alt=""/>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="profile" role="tabpanel">
                              <div className="product-large-img">
                                 <img src="/img/shop/details/large2.jpg" alt=""/>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="profile1" role="tabpanel">
                              <div className="product-large-img">
                                 <img src="/img/shop/details/large3.jpg" alt=""/>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="product-details mb-30">
                        <div className="product-details-title">
                           <p>Obat</p>
                           <h1>{oneProduct.name}</h1>
                           <div className="price details-price pb-30 mb-20">
                              <span>Rp. {oneProduct.price}</span>
                           </div>
                        </div>
                        <div className="product-cat mt-30 mb-30">
                           <span>Category: </span>
                           {oneProduct.categories && oneProduct.categories.map((item, index) => (
                              <a key={index}>{item.name}, </a>
                           ))}
                        </div>
                        <div className="product-details-action">
                           <form action="#">
                               <a onClick={() => handleOpenOrder(oneProduct.name, oneProduct.price)} className="primary_btn btn-black" type="button">Checkout</a>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <ModalOrder />
      </>
   );
};

export default ShopDetailsBanner;