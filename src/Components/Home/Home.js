import React, { useState, useEffect } from 'react';
import './Home.css';
import { TbYoga } from 'react-icons/tb'
import Cart from '../Cart/Cart';
import AllYogis from '../AllYogis/AllYogis';
import { getStoredCart } from '../../utilities/fakedb';
import FAQ from '../FAQ/FAQ';




const Home = () => {
    const [yogis, setYogis] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // fetch(`https://restcountries.com/v3.1/all`)
        fetch('data.json')
            .then(res => res.json())
            .then(data => setYogis(data));
    }, []);
    // console.log(yogis);



    const handleToCart = (yogis) => {
        // console.log(yogis);
        // setCart(yogis);
        const newArray = [...cart, yogis];
        setCart(newArray);
    }

    return (
        <div className='home-container'>
            <div className='yogis-content'>
                <h3 className='logo'><TbYoga className='logo-icon' />Yoga Club Academy</h3>
                <h4 className='title'>Select today's exercise from your favourite Yoga Club Academy</h4>
                <AllYogis yogis={yogis} handleToCart={handleToCart}></AllYogis>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;



