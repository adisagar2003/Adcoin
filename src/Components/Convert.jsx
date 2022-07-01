import React,{useState} from 'react'
import { BiArrowFromLeft } from 'react-icons/bi'
import { FaArrowAltCircleRight } from 'react-icons/fa'


function Convert() {

    const [coinValue,setCoinValue] = useState('1');
    const [coinPrice,setCoinPrice] = useState(21425);
    const convertValue=(e)=>{
        setCoinPrice(e.target.value*21425);
        setCoinValue(e.target.value)
    }
  return (
    <div
    class='float-left mt-[5%] p-2 font-bold text-white w-[20%] min-w-[20%] min-h-[45vh] min-w-[45vh] rounded-xl   bg-slate-900'
    >Convert

    <div class='p-4 font-semibold'>
    <div class='flex'>
        <div>
        {coinValue} <span class='text-slate-400'>BTC</span></div>
        <div class='pl-4 mt-1'><FaArrowAltCircleRight /> </div><div class='pl-4'>{coinPrice}<span class='text-slate-400'> USD</span></div>
        </div>
        <div class='p-4 mt-3 flex flex flex-col  gap-10  '>
            <input class='rounded-xl bg-slate-800 p-3' placeholder='Enter bitcoin value' onChange={convertValue}></input>
   
        </div>
    </div>
    
    
    
    
    </div>
  )
}

export default Convert