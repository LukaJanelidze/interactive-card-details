import React, { useState } from 'react'
import './Submit.css'
import Icon from './../../assets/icon-complete.svg'

function Submit(props) {
    return (
        <form className='second-form'>
            <img src={Icon} alt="icon" />
            <h1>THANK YOU!</h1>
            <p>We’ve added your card details</p>
            <button>Continue</button>
        </form>
    )
}

export default Submit