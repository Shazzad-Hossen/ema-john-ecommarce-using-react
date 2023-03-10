import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total=0;
    let shipping=0;
    let quantity=0
    for(const product of cart){
        total+=product.price *product.quantity;
        shipping+=product.shipping;
        quantity+=product.quantity;
    }
    const tax=(total*0.1).toFixed(2);
    const grandTotal= parseFloat(tax)+total+shipping;
    return (
        <div className="cart">
                <h1>Order Summary</h1>
                <br />
                <h2>Selected Items: {quantity} </h2>
                <br />
                <h2>Total Price: ${total}  </h2>
                <br />
                <h2>Total Shipping Charge: ${shipping} </h2>
                <br />
                <h2>Tax: {tax} </h2>
                <br />
                <h2>Grand Total: {grandTotal} </h2>
            </div>
    );
};

export default Cart;