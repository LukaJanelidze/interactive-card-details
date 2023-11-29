import { useState } from 'react'
import Form from './components/form/Form'
import Submit from './components/submit/Submit'
import Cards from './components/Cards/Cards'
import './App.css'

function App() {

  const [holder, setHolder] = useState("")
  const [number, setNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")
  const [submit, setSubmit] = useState(false)

  return (
    <div className='main'>
      <Cards holder={holder} number={number} month={month} year={year} cvc={cvc}/>
      {submit ? <Submit /> : <Form holder={holder} setHolder={setHolder} number={number} setNumber={setNumber} month={month} setMonth={setMonth} year={year} setYear={setYear} cvc={cvc} setCvc={setCvc} setSubmit={setSubmit}/>}
    </div>
  )
}

export default App
