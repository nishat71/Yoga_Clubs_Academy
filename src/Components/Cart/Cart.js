import React, { useEffect, useState } from 'react';
import './Cart.css'
import { HiLocationMarker } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const { cart } = props;
    // console.log(cart);


    let time = 0;
    for (const yogi of cart) {
        time = (time + yogi.time)
    }


    const handleBreak = (e) => {
        const breakTime = e.currentTarget.textContent;
        console.log(breakTime);
        addProductToDb(breakTime);
    };

    // useEffect(() => {
    //     localStorage.setItem('BreakTime', JSON.stringify(breakTime));
    // },[breakTime]);

    const getStoredCart = () => {
        const breakTime = localStorage.getItem('BreakTime');
        // const storedCart = localStorage.getItem('BreakTime');
        // if(storedCart === {}){
        //     return {};
        // }
        // else{
        //     return setBreakTime(JSON.parse(storedCart));
        // }
        console.log(breakTime);
        setBreakTime(JSON.parse(breakTime));
    }

    const addProductToDb = (breakTime) => {
        // const Time = getStoredCart();
        localStorage.setItem('BreakTime', JSON.stringify(breakTime))
        const Time = getStoredCart();
    }





    const notify = () => {
        alert('clicked');
        toast("Your Activity is completed");
    };




    return (
        <div className='cart'>
            <div className='user-profile'>
                <div className='user-bbg-img'>
                    <img className="user-img" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>
                <div className='user-info'>
                    <h3 className='user-info_title'>Humaira Akila Nishat</h3>
                    <p className='user-info_para'><HiLocationMarker className='icon' /> Sydney, Australia</p>
                    <p className='user-info_para'>Student, Department of CSE</p>
                </div>
            </div>
            <div className='user-desc'>
                <div>
                    <h4 className='user-desc-title'>75kg</h4>
                    <p className='user-desc-p'>Weight</p>
                </div>
                <div>
                    <h4 className='user-desc-title'>6.5</h4>
                    <p className='user-desc-p'>Height</p>
                </div>
                <div>
                    <h4 className='user-desc-title'>25 yrs</h4>
                    <p className='user-desc-p'>Age</p>
                </div>
            </div>
            <div className='user-break'>
                <h3 className='cart-details-title'>Add A Break</h3>
                <div className='user-time'>
                    <button onClick={handleBreak} className='time'>10</button>
                    <button onClick={handleBreak} className='time'>20</button>
                    <button onClick={handleBreak} className='time'>30</button>
                    <button onClick={handleBreak} className='time'>40</button>
                </div>
            </div>
            <div className='exercise-details'>
                <h3 className='cart-details-title'>Exercise Details</h3>
                <div className='exercise-field'>
                    <h6 className='exercise-field-title'>Exercise time</h6>
                    <p className='cart-time'>{time} seconds</p>
                </div>
                <div className='exercise-field'>
                    <h6 className='exercise-field-title'>Break time</h6>
                    <p className='cart-time'>{breakTime} seconds</p>
                </div>
            </div>
            <button onClick={notify} className='btn activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;