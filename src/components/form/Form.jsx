import React, { useState } from 'react'
import './Form.css'
import ReactInputMask from "react-input-mask"

function Form(props) {

    const [holderError, setHolderError] = useState("")
    const [numberError, setNumberError] = useState("")
    const [monthError, setMonthError] = useState("")
    const [yearError, setYearError] = useState("")
    const [cvcError, setCvcError] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!props.holder) {
            setHolderError("Can't be empty")
        }

        if(props.number.replaceAll(" ", "").length <= 15) {
            setNumberError("Can't be less than 16")
        }

        if(!props.number) {
            setNumberError("Can't be empty")
        }

        if(!props.month) {
            setMonthError("Can't be blank")
        }

        if(!props.year) {
            setYearError("Can't be blank")
        }

        if(!props.cvc) {
            setCvcError("Can't be blank")
        }

    }

    return (

    <form className='first-form'>
                
        <div className="information">

            <div className='card-holder'>
                    <label htmlFor="holder" >Cardholder Name</label>
                    <input 
                    type="text" 
                    id='holder'
                    placeholder='e.g. Jane Appleseed'
                    onChange={(event) => {props.setHolder(event.target.value.toUpperCase())
                    setHolderError("")
                    }}
                    />
                    <p className='error'>{holderError}</p>
                </div>

                <div className='card-number'>
                    <label htmlFor="number" >Card Number</label>
                    <ReactInputMask
                    mask={"9999 9999 9999 9999"}
                    maskChar={null}
                    id='number'
                    placeholder='e.g. 1234 5678 9123 0000'
                    onChange={(event) => {props.setNumber(event.target.value)
                    setNumberError("")
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
                            if(event.target.value.length <=2) {
                                props.setMonth(event.target.value)
                            }
                            setMonthError("")
                            }}
                        />

                        <input 
                        type="number" 
                        id='year' 
                        placeholder='YY'
                        value={props.year}
                        onChange={(event) => {
                            if(event.target.value.length <=2) {
                                props.setYear(event.target.value)
                            }
                            setYearError("")
                            }} 
                        />
                        <p className='error'>{monthError || yearError && yearError}</p>

                    </div>

                    <div className='cvc-info'>
                    <label htmlFor="cvc" className='classcvc'>CVC</label>
                    <input 
                    type="number" 
                    id="cvc" 
                    placeholder='e.g. 123' 
                    value={props.cvc}
                    onChange={(event) => {
                        if(event.target.value.length <=3) {
                            props.setCvc(event.target.value)
                        }
                        setCvcError("")
                        }} 
                    />
                    <p className='error'>{cvcError}</p>

                    </div>
                </div>

                <button type='submit' onClick={(event) => {
               handleSubmit(event)
                if(props.holder && props.number && props.month && props.year && props.cvc) {
                    props.setSubmit(true)}}}>
                Confirm
            </button>

        </div>

     </form>

    )
}

export default Form