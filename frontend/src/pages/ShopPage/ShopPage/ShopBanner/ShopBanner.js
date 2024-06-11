import React, { useEffect, useMemo } from 'react';
import SingleShop from '../../../../components/SingleShop/SingleShop';
import AsyncSelect from 'react-select/async';
import { getCategory } from '../../../../services/Category/api';
import { useProductContext } from '../../../../context/ProductContext/ProductContext';
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd';
import { useOrderContext } from '../../../../context/OrderContext/OrderContext';
import ModalOrder from './Modal';
import { useAuthContext } from '../../../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../../../../hooks/useDebounce';

const ShopBanner = () => {
   const { setCategories, products, categories, handleGetProducts } = useProductContext()
   const { handleOpenResep: openResep } = useOrderContext()
   const { isLogin } = useAuthContext()
   const searchParams = useMemo(() => new URLSearchParams(window.location.search), [])
   console.log(searchParams.get("id"))
   const navigate = useNavigate()
   const handleOpenResep = () => {
      if (!isLogin) {
         navigate('/login')
         return
      }
      openResep()
   }
   const loadOptionsKategori = async(inputValue) => {
      try {
        const response = await getCategory({
          name: inputValue
        })
        return response.map((item) => ({ label: item.name, value: item.id }))
      } catch (error) {
        console.log(error)
      }
    }
    const onChangeKategori = (value) => {
      if (!value) {
         setCategories("")
         return
      }
      setCategories(value)
    }
  useDebounce(handleGetProducts, 500, [categories]);

    useEffect(() => {
      setCategories({
        label: searchParams.get("name"),
        value: searchParams.get("id")
      })
    }, [searchParams])
   return (
      <>
         <section className="shop-banner-area pt-120 pb-120">
            <div className="container">
            <div className="row">
                  <ButtonAdd handleClick={handleOpenResep} title={"Order By Resep"} />
               </div>
               <div className="row mt-20 mb-4">
                  <AsyncSelect value={categories} isClearable onChange={onChangeKategori} loadOptions={loadOptionsKategori} placeholder="Pilih Kategori" defaultOptions />
                  {/* <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="product-showing mb-40">
                        <p>Menampilkan 1–22 of 32 hasil</p>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-6">
                     <div className="shop-tab f-right">
                        <ul className="nav text-center" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                 aria-controls="home" aria-selected="true"><i className="fas fa-th-large"></i> </a>
                           </li>
                        </ul>
                     </div>
                     <div className="pro-filter mb-40 f-right">
                        <form action="#">
                           <select name="pro-filter" id="pro-filter">
                              <option defaultValue="1">Filter </option>
                              <option defaultValue="2">Penjualan Teratas </option>
                              <option defaultValue="3">Produk baru </option>
                              <option defaultValue="4">Produk A sampai Z </option>
                           </select>
                        </form>
                     </div>
                  </div> */}
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                           <div className="row">
                              {products.map((product) => (
                                 <SingleShop key={product.id} image={product.imageUrl[0]} name={product.name} title={product.title} id={product.id} price={product.price} />
                              ))}
                           </div>
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

export default ShopBanner;