import React, { useState, useEffect } from 'react';
import './Home.css';
import { TbYoga } from 'react-icons/tb'
import Cart from '../Cart/Cart';
import AllYogis from '../AllYogis/AllYogis';



const Home = () => {
    const [yogis, setYogis] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setYogis(data));
    }, []);




    const handleToCart = (yogis) => {
        const newArray = [...cart, yogis];
        setCart(newArray);
    }

    return (
        <div className='home-container'>
            <div className='yogis-content'>
                <h3 className='logo'><TbYoga className='logo-icon' />Yoga Clubs Academy</h3>
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



