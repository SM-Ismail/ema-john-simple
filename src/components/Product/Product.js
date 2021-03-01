import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, stock, price} = props.product;
    return (
        <div className="product">
            <div className='image'>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3  className='name'>{name}</h3>
                <p><small>by {seller}</small></p>
                <h4>${price}</h4>
                <p><small>Only {stock} left in stock - Buy soon</small></p>
                <button 
                    onClick ={() => props.handleAddProduct(props.product)}
                    className="button"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> 
                        Add to Cart
                        </button>
            </div>
        </div>   
    );
};

export default Product;