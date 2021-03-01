import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total+product.price, 0);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    };
    let shipping = 0;
    if (0<total && total<=15){
        shipping = 12.00;
    }else if(15<total && total<= 35){
        shipping = 4.00;
    }
    const totalPrice = formatNumber(total);
    const taxVat = formatNumber(total/10);
    const grandTotal = totalPrice + taxVat + shipping;
    return (
        <div>
            <h4>Items : {cart.length}</h4>
            <p>Total price: {totalPrice}</p>
            <p>Tax/VAT: {taxVat}</p>
            <p>Shipping: {shipping}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;