import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineBell} from 'react-icons/ai';
import {AiFillDownCircle,AiFillUpCircle} from 'react-icons/ai';
import { CircularProgressbar } from 'react-circular-progressbar';
import axios from 'axios';
import {ethers} from 'ethers';


function Navbar() {

    const   [metamaskResponse,setMetamaskResponse]= useState(null) 
    const connectWallet = ()=>{
      console.log('wallet gets connected here');

    }
    const [dropdown,isDropdown] = useState(true);
  return (
    <div class=''>
   <div class='bg-slate-300 dark:bg-[#0d1118] dark:text-slate-100 p-5 flex flex-row gap-1 '>
    <Link to='/'>
 
<a class='p-1 font-bold md:pr-[40vh] md:pr-[10vh]  pr-[4vh] '>AdCoin</a></Link>
<Link to='/dashboard'>
<a class=' md:pr-[5vh] font-semibold opacity-[0.6] hover:opacity-[1] transition-all'>Dashboard</a></Link>
<Link to='/exchange'>
<a class=' md:pr-[5vh] font-semibold opacity-[0.6] hover:opacity-[1] transition-all'>Exchange</a></Link>
<Link to='/wallet'>
<a class=' md:pr-[5vh] font-semibold opacity-[0.6] hover:opacity-[1] transition-all'>Wallet</a></Link>
<Link to='/market'>
<a class=' md:pr-[40vh] font-semibold opacity-[0.6] hover:opacity-[1] transition-all'>Market</a></Link>
<label class="relative bottom-1 block bottom-1 pr-10">
    
  <span class="sr-only">Search</span>
  <span class="absolute bottom-0 inset-y-0 left-0 flex items-center pl-3">
<BsSearch />
  </span>

  <input class="placeholder:italic rounded-xl placeholder:text-slate-400 block bg-[#0d1118] w-full  text-slate-400  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:outline-none  sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
    <a class='p-2 scale-[150%] cursor-pointer opacity-[0.8] hover:opacity-[1] pr-[10vh]'><AiOutlineBell /></a>
    <button class='p-2 scale-[100%] cursor-pointer opacity-[0.8] hover:opacity-[1] pr-[10vh] bg-gradient-to-r from-indigo-900 rounded-full hover:from-blue-500 transition-all text-white' onClick={connectWallet}>Connect Wallet </button>
   </div>
  
   </div>
  )
}

export default Navbar