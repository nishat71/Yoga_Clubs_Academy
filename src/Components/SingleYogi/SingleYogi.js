import React from 'react'
// import './SingleYogi.css'


const SingleYogi = ({ yogi, handleToCart }) => {
  const { id, title, time, image, description } = yogi;

  return (
    <div className='single-yogi-card'>
      <img className='yogi-img' src={image} alt="" />
      <div className='single-yogi-card-details'>
        <h2 className='yogi-title'>{title}</h2>
        <p className='yogi-desc'>{description}</p>
        <p className='card-details-time'>Time required: <span className='card-details-time-span'>{time}</span>s</p>
        <button onClick={() => handleToCart(yogi)} className='btn addList-btn'>Add to list</button>
      </div>
    </div>
  )
}

export default SingleYogi


