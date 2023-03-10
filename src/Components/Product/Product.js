import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (prop) => {
   
    //console.log(prop.product)
   const { img, name, price, seller, ratings,}=prop.product;

    return (
        <div className='card'>
            

            <div className="info-container">
            <img className='img' src={img} alt="" />
            <div className="cars-sub-con">
            <h1>{name}</h1>
            <h2>Price: ${price}</h2>
            <h3>Manufacturer: {seller}</h3>
            <h3>Ratings: {ratings}</h3>
            </div>
            </div>
            <button onClick={()=>prop.handleAddToCart(prop.product)} className='addToCartButton'><p>Att to Cart</p><FontAwesomeIcon icon={faShoppingCart} /></button>
            
        </div>
    );
};

export default Product;