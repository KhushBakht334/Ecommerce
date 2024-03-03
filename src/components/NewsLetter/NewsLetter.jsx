import React from 'react'
import "./NewsLetter.css"

export const NewsLetter = () => {
  return (
    <>
    <div className="news-letter">
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newsLetter and stay updated</p>
        <div className="news-btn">
            <input type='text' placeholder='Your email id'/>
            <button>Subscribe</button>
        </div>
    </div>
    </>
  )
}
