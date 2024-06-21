import { useState } from 'react'
import CardForm from './components/CardForm/CardForm'
import CardSubmit from './components/CardSubmit/CardSubmit'
import Cards from './components/Cards/Cards'
import './App.css'

function App() {
  const [holder, setHolder] = useState<string>("")
  const [number, setNumber] = useState<string>("")
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [cvc, setCvc] = useState<string>("")
  const [submit, setSubmit] = useState<boolean>(false)

  return (
    <div className='main'>
      <Cards holder={holder} number={number} month={month} year={year} cvc={cvc} />
      {submit ? (
        <CardSubmit />
      ) : (
        <CardForm
          holder={holder}
          setHolder={setHolder}
          number={number}
          setNumber={setNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
          setSubmit={setSubmit}
        />
      )}
    </div>
  )
}

export default App
