import React from 'react';
import { Link } from 'react-router-dom';

const HomeCta = () => {
	return (
		<>
			<section className="cta-area pos-rel pt-115 pb-120 cta_bg">
				<div className="container">
					<div className="row">
						<div className="col-xl-10 offset-xl-1 col-md-12">
							<div className="cta-text text-center">
								<div className="section-title pos-rel mb-50">
									<div className="section-text section-text-white pos-rel">
										<h5>Tetap sehat & kuat untuk menikmati hidup</h5>
										<h1 className="white-color">Percayakan Kami Ada Untuk Membantu Semua dan Membuat Segalanya Menjadi Baik Lagi.</h1>
									</div>
								</div>
								<div className="section-button section-button-left">
									<Link to="/appoinment" className="primary_btn btn-icon btn-icon-green ml-0"><span>+</span>Layanan Konsultasi</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeCta;