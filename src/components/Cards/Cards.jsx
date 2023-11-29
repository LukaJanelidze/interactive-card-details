import React from "react"
import FrontCard from './../../assets/bg-card-front.png'
import BackCard from './../../assets/bg-card-back.png'
import Circle from './../../assets/card-logo.svg'
import './Cards.css'


function Form(props) {
    return (

    <div className='cards'>

        <div className="back-card-box">
        <img src={BackCard} alt="Card back" className='back-card' />
        <p className="card-back-cvc">{props.cvc ? props.cvc : "123"}</p>
        </div>

        <div className='front-card-box'>
        <img src={FrontCard} alt="Card front" className='front-card' />
        <img src={Circle} alt="Card logo" className='circle' />
        <p className="card-numbers">{props.number ? props.number : "0000 0000 0000 0000"}{" "}</p>
        <p className="card-holder-name">{props.holder ? props.holder : "JANE APPLESEED"}</p>
        <p className="card-date">{props.month ? props.month : "00"}/{props.year ? props.year : "00"}</p>
        </div>

    </div>

    )
}

export default Form