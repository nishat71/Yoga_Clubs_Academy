import React, { useState } from 'react'
import "./FAQ.css";

const FAQ = ({ id, title, desc }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <article className='faq'>
            <div>
                <h4>{title}</h4>
                <button onClick={()=>{setToggle(!toggle)}}>
                    {toggle ? "-" : "+"}
                </button> 
                {/* button er upor jkn click krbo state chnage er jnno onClick method use krte hobe,
                 setToggle er maddome prottekbar toggle er value change krbo (toggle true takle false hobe, false takle true) */}
            </div>
            {toggle && (
                <p>{desc}</p>
            )}
        </article>
    )
}

export default FAQ