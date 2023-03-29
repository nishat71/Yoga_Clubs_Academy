import React, { useState } from 'react'
import "./FAQ.css";

const FAQ = ({ id, title, desc }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <article className='faq'>
            <div>
                <h4 className='faq-title'>{title}</h4>
                <button onClick={()=>{setToggle(!toggle)}}>
                    {toggle ? "-" : "+"}
                </button> 
            </div>
            {toggle && (
                <p className='faq-desc'>{desc}</p>
            )}
        </article>
    )
}

export default FAQ;