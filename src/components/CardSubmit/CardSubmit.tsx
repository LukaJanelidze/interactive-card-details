import React from 'react';
import './CardSubmit.css';

const CardSubmit: React.FC = () => {
    return (
        <form className='second-form'>
            <img src={'images/icon-complete.svg'} alt="icon" />
            <h1>THANK YOU!</h1>
            <p>We’ve added your card details</p>
            <button>Continue</button>
        </form>
    );
}

export default CardSubmit;
