import React, { useState } from 'react'
import './FAQS.css'
import { faqsData } from '../FAQ/data';
import FAQ from '../FAQ/FAQ';


const FAQS = () => {
    console.log(faqsData);
    const [faqs, setFaqs] = useState(faqsData);
    
    return (
        <main className='container'>
            <section className='faqs'>
                <h1 className='faqs-heading'>FAQs</h1>
                {
                    faqs.map((faq) => <FAQ key={faq.id} {...faq}></FAQ>)
                }
            </section>
        </main>
    )
}

export default FAQS;