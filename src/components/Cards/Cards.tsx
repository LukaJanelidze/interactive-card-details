import React from "react";
import './Cards.css';

interface CardsProps {
  holder: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

const Cards: React.FC<CardsProps> = (props) => {
  return (
    <div className='cards'>
      <div className="back-card-box">
        <img src={'images/bg-card-back.png'} alt="Card back" className='back-card' />
        <p className="card-back-cvc">{props.cvc ? props.cvc : "123"}</p>
      </div>

      <div className='front-card-box'>
        <img src={'images/bg-card-front.png'} alt="Card front" className='front-card' />
        <img src={'images/card-logo.svg'} alt="Card logo" className='circle' />
        <p className="card-numbers">{props.number ? props.number : "0000 0000 0000 0000"}{" "}</p>
        <p className="card-holder-name">{props.holder ? props.holder : "JANE APPLESEED"}</p>
        <p className="card-date">{props.month ? props.month : "00"}/{props.year ? props.year : "00"}</p>
      </div>
    </div>
  );
}

export default Cards;
