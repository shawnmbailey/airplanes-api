import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [flightNum, setFlightNum] = useState(0)

  return (
    <div className="App">
      <h1>Flights</h1>
      <input type="number" value={flightNum} placeholder={'FlightNo'} onChange={(e) => setFlightNum(e.target.value)}/>

      <div className="flightContainer">
        {
          [1000, 1111, 1112].map((flightNumber, i) => {
            return ( <div key={flightNumber} className="flightCard"/>)
        })
        }
      </div>
    </div>
  )
}

export default App
