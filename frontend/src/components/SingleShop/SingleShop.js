import React from 'react';
import { Link } from 'react-router-dom';

const SingleShop = ({image, id, price, name}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="product mb-40">
                    <div className="product__img">
                        <Link to={`/shopDetails/${id}`}><img src={`${image}`} alt=""/></Link>
                        <div className="product-action text-center">
                            <Link to={`/shopDetails/${id}`}><i className="fas fa-expand"></i></Link>
                        </div>
                    </div>
                    <div className="product__content text-center pt-30">
                        <span className="pro-cat"><a>Obat</a></span>
                        <h4 className="pro-title"><Link to={`/shopDetails/${id}`}>{name}</Link></h4>
                        <div className="price">
                            <span>Rp {price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleShop;