import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const LoginArea = () => {
   const { handleLogin } = useAuthContext();
   const navigate = useNavigate();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = async data => {
      // console.log(data)
      const username = data.username;
      const password = data.password;

      await handleLogin(username, password)
      Swal.fire({
         icon: 'success',
         title: 'Login Berhasil',
      })
      navigate('/')
      reset()
   };
   return (
      <>
         <section className="login-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">Login Disini</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <label htmlFor="name" className='mb-2'>Alamat username<span>**</span></label>
                           <input {...register("username")} required id="name" type="text"
                           placeholder="Masukkan Username" />

                           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
                           <input {...register("password")} required id="pass" type="password" placeholder="Masukkan Password" />

                           <button type="submit" className="primary_btn btn-icon-green w-100">Login Sekarang</button>
                           <div className="or-divide"><span>atau</span></div>
                           <Link to="/register"><button className="primary_btn theme-btn w-100">Registrasi Sekarang</button></Link>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default LoginArea;