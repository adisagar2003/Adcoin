import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import BalanceWallet from './Components/Balance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
  <Navbar />
  <div class='md:flex  flex-wrap  flex-row md:gap-[20vh] pl-4  p-1'>
  <div class=' p-3 rounded-xl bg-slate-900 mt-[5%] float-right w-[40%]'>
  <BalanceWallet />
  </div>
  <div class='float-left mt-[5%] p-2 font-bold text-white w-[40%] rounded-xl   bg-slate-900 '>


  </div>
  
  
  
  <div>

  </div>
 
  </div>

    </div>
  )
}

export default App
