import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {BiCoin,BiBitcoin} from 'react-icons/bi';
import {FaEthereum,FaAngleDoubleUp} from 'react-icons/fa';
import {FcBullish,FcBearish} from 'react-icons/fc'
function Wallet() {
  return (
    <div>
        <span class='p-1 font-semibold'>Wallet</span>
        <div class='float-right p-4 text-green-300 scale-[150%]'>
            
        <BiCoin />
        </div>
      
        <div style={{width:100,height:50}} class='p-4 mt-5 mr-5'>
        <CircularProgressbar value={90} text={`90%`} />
        </div>
        <div class='flex flex-row    float-right w-[60%] gap-10'>
        <div class='float-right  relative bottom-[6vh]  flex flex-col gap-3 mb-4'>
            <a class='p-2 rounded-full bg-yellow-500'><BiBitcoin /></a> 
            <a class='p-2 rounded-full bg-purple-600'><FaEthereum /></a>
          
            </div> 
            <div class='float-right   relative bottom-[6vh]  flex flex-col gap-3 mb-4'>
            <a class='p-1'>BTC</a> 
            <a class='p-1 font-sans'>ETH</a>
          
            </div> 

            <div class='float-right   relative bottom-[6vh]  flex flex-col gap-3 mb-4'>
            <a class='p-1 text-green-300 text-sm relative bottom-2'><FcBullish /> 0.1%</a> 
            <a class='p-1 font-sans relative bottom-2 text-red-500'><FcBearish /> 4.5%</a>
          
            </div> 



            </div>
    </div>
  )
}

export default Wallet