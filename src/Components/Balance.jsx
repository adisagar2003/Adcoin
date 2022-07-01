import React,{useState} from 'react'
import { render } from 'react-dom';
import {FaAngleDoubleUp} from 'react-icons/fa';
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import {ethers} from 'ethers'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
function BalanceWallet() {
  const [ethBalance,setEthBalance]= useState(null);
  const [walletAddress,setWalletAddress] = useState(null);

  
  const network = 'rinkeby';
  const provider = ethers.getDefaultProvider(network);
  let balance = null;
  let ethereumBalance = 0
  if (localStorage.getItem('Wallet')){
    balance = localStorage.getItem('Wallet');


    const network = 'rinkeby' // use rinkeby testnet
    const provider = ethers.getDefaultProvider(network)
    const address = balance;
    provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      const balanceInEth = ethers.utils.formatEther(balance)
      ethereumBalance = balanceInEth;
      localStorage.setItem('ethBalance',balanceInEth)
      console.log(`balance: ${balanceInEth} ETH`)  
     })
  }

  
  

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},];
    const RenderLineChart = ()=>{
        render(
        <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>)
    }
     
    
  return (
    <div >
        <div class=''>
             <div class='float-right text-green-400     '>
             <span class='text-[2vh]'>0.84+%</span>    <FaAngleDoubleUp /> 
            </div>
      <div class='font-semibold text-slate-100'>
        Balance
        <div class='font-semibold text-slate-100 mt-[3%] '>
       
            <text class='text-3xl'><span class='text-purple-500'><FaEthereum /> </span> {balance?localStorage.getItem('ethbalance'):'0'} <span class='text-slate-400'>ETH</span></text>
         <div class='mt-[10%]'>

            <div class='float-left flex gap-3  border-slate-500 border-r-2 w-[50%] '>
                <div class='p-1 text-green-500 bg-slate-800 rounded-full'>
<AiOutlineArrowUp /> 
</div> 
<div class=''>
    Income
</div>

            </div>
            <div class='float-right flex gap-3 '>
                <div class='p-1 text-red-500 bg-slate-800 rounded-full'>
<AiOutlineArrowDown /> 
</div> 
<div class='flex flex-col'>
    <span>Expenses</span>
   
</div>


            </div>
         </div>
        </div>

        <div class='flex flex-row mt-10 border-r-2 border-slate-4   00'>


        </div>
        

      </div>
      </div>
      
    </div>
  )
}

export default BalanceWallet
