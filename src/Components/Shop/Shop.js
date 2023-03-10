import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

     const [products, setProducts]= useState([]);
     const [cart,setCart]= useState([]);

     useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

     },[]);

     const handleAddToCart=(product)=>{
        console.log(product);
        const newCart= [...cart,product];
        setCart(newCart);

     }

     

     

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                    product={product}
                    handleAddToCart={handleAddToCart}
                    key={product.id}
                    >

                    </Product>)
                }


            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <br />
                <h2>Selected Items: {cart.length} </h2>
                <br />
                <h2>Total Price:  </h2>
                <br />
                <h2>Total Shipping Charge: </h2>
                <br />
                <h2>Grand Total: </h2>
            </div>

           
            
        </div>
    );
};

export default Shop;