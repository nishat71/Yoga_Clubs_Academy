import React from 'react'
import './AllYogis.css'
import SingleYogi from '../SingleYogi/SingleYogi'

const AllYogis = ({ yogis, handleToCart }) => {

    return (
        <div className='yoga-container'>
            {
                yogis.map((yogi) => <SingleYogi yogi={yogi} key={yogi.id} handleToCart={handleToCart}></SingleYogi>)
            }
        </div>
    )
}

export default AllYogis