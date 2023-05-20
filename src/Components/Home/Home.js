import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import "./Home.css"
import Cart from '../Cart/Cart';



const Home = () => {

    const Products = useLoaderData()
    // console.log(Products);
    const [cart, setCarts] = useState([]);

    const handleAddToCart = (Products) => {
        // console.log(Products);

        const newCart = [...cart, Products]
        setCarts(newCart)

    }


    return (
        <div className="shop-container">
            <div className='product-container'>
                {
                    Products.map(Products => <Product
                        key={Products.id}
                        Products={Products}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>


            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>


        </div>





    );
};

export default Home;