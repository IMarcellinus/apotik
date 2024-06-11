import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <>
            <footer>
                <div className="footer-top primary-bg pt-100 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="footer-contact-info mb-30">
                                    <div className="emmergency-call fix">
                                        
                                    </div>
                                    <div className="footer-logo mb-35">
                                        <Link to="/"><img src="/img/logo/footer-logo.png" alt=""/></Link>
                                    </div>
                                    <div className="footer-contact-content mb-25">
                                        <p>Selamat datang di Apotek Heal Care, mitra terpercaya Anda dalam kesehatan dan kesejahteraan. Di Heal Care, kami berdedikasi untuk menyediakan layanan dan produk farmasi berkualitas tinggi yang memenuhi semua kebutuhan kesehatan Anda. Misi kami adalah memastikan bahwa Anda memiliki akses ke obat-obatan yang aman, efektif, dan terjangkau, bersama dengan saran ahli dan perawatan yang dipersonalisasi.</p>
                                    </div>
                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>healcare@gmail.com</li>
                                            <li><i className="far fa-clone"></i>healcare.com</li>
                                            <li><i className="far fa-flag"></i>Jember, Indonesia</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <div className="footer-widget mb-30">
                                    {/* <div className="footer-title">
                                        <h3>Departments</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/servicesDetails">Surgery and Radiology</Link></li>
                                            <li><Link to="/servicesDetails">Family Medicine</Link></li>
                                            <li><Link to="/servicesDetails">Women’s Health</Link></li>
                                            <li><Link to="/servicesDetails">Optician</Link></li>
                                            <li><Link to="/servicesDetails">Pediatrics</Link></li>
                                            <li><Link to="/servicesDetails">Dermatology</Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Heal Care</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/servicesDetails">Departments</Link></li>
                                            <li><Link to="/doctors">Our Doctors</Link></li>
                                            <li><Link to="/blogs">News</Link></li>
                                            <li><Link to="/shop">Shop</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/contact">Book an Appointment</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright text-center">
                                    <p className="white-color">Copyright Heal Care Team @ 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomeFooter;