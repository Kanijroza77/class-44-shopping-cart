import React from 'react';

const Cart = (props) => {
    const { cart } = props;


    let total = 0;
    let quantity = 0;
    let shipping = 0;
    for (const Products of cart) {

        quantity = quantity + Products.quantity;
        total = total + Products.price * Products.quantity
        shipping = shipping + Products.shipping
    }
    const grandTotal = total + shipping;


    return (
        <div>
            <h6>Order summary</h6>
            <p>Selected items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p> Total Shipping Charge: ${shipping}</p>

            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;


