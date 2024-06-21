import React, { useState } from 'react';
import './CardForm.css';
import ReactInputMask from "react-input-mask";

interface FormProps {
  holder: string;
  setHolder: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  cvc: string;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardForm: React.FC<FormProps> = (props) => {
  const [holderError, setHolderError] = useState<string>("");
  const [numberError, setNumberError] = useState<string>("");
  const [monthError, setMonthError] = useState<string>("");
  const [yearError, setYearError] = useState<string>("");
  const [cvcError, setCvcError] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!props.holder) {
      setHolderError("Can't be empty");
    }

    if (props.number.replace(/ /g, "").length <= 15) {
      setNumberError("Can't be less than 16");
    }

    if (!props.number) {
      setNumberError("Can't be empty");
    }

    if (!props.month) {
      setMonthError("Can't be blank");
    }

    if (parseInt(props.month) > 12) {
      setMonthError("can't be more than 12");
    }

    if (!props.year) {
      setYearError("Can't be blank");
    }

    if (!props.cvc) {
      setCvcError("Can't be blank");
    }
  };

  return (
    <form className='first-form' onSubmit={handleSubmit}>
      <div className="information">
        <div className='card-holder'>
          <label htmlFor="holder">Cardholder Name</label>
          <input
            type="text"
            id='holder'
            placeholder='e.g. Jane Appleseed'
            value={props.holder}
            onChange={(event) => {
              props.setHolder(event.target.value.toUpperCase());
              setHolderError("");
            }}
          />
          <p className='error'>{holderError}</p>
        </div>

        <div className='card-number'>
          <label htmlFor="number">Card Number</label>
          <ReactInputMask
            mask={"9999 9999 9999 9999"}
            maskChar={null}
            id='number'
            placeholder='e.g. 1234 5678 9123 0000'
            value={props.number}
            onChange={(event) => {
              props.setNumber(event.target.value);
              setNumberError("");
            }}
          />
          <p className="error">{numberError}</p>
        </div>

        <div className='cvcdate'>
          <div className='date-info'>
            <label htmlFor="date">Exp. Date (MM/YY)</label>
            <input
              type="number"
              id='month'
              placeholder='MM'
              value={props.month}
              onChange={(event) => {
                if (event.target.value.length <= 2) {
                  props.setMonth(event.target.value);
                }
                setMonthError("");
              }}
            />
            <input
              type="number"
              id='year'
              placeholder='YY'
              value={props.year}
              onChange={(event) => {
                if (event.target.value.length <= 2) {
                  props.setYear(event.target.value);
                }
                setYearError("");
              }}
            />
            <p className='error'>{monthError || (yearError && yearError)}</p>
          </div>

          <div className='cvc-info'>
            <label htmlFor="cvc" className='classcvc'>CVC</label>
            <input
              type="number"
              id="cvc"
              placeholder='e.g. 123'
              value={props.cvc}
              onChange={(event) => {
                if (event.target.value.length <= 3) {
                  props.setCvc(event.target.value);
                }
                setCvcError("");
              }}
            />
            <p className='error'>{cvcError}</p>
          </div>
        </div>

        <button type='submit' onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleSubmit(event as any);
          if (props.holder && props.number && props.month && props.year && props.cvc) {
            props.setSubmit(true); 
          }
        }}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default CardForm;
