import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
const Product = ({ Products, handleAddToCart }) => {
    const { id, name, img, des, price, address, company } = Products

    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{des}</p>
                    <p class="card-text">{company}</p>
                    <p class="card-text">{price}</p>
                </div>
                <button onClick={() => handleAddToCart(Products)} className='btn-cart'>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span className='ms-3'>  Add to cart</span>
                </button>
            </div>


        </div>
    );
};

export default Product;