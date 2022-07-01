import React from 'react'
import { LineChart, Line,CartesianGrid,XAxis,Tooltip,YAxis } from 'recharts';

const data = [{name: 'Bitcoin graph', growth: 200, pv: 2400, amt: 2400},{name:'Bitcoin',growth:400,pv:200,amt:1400},{name:'Bitcoin',growth:350,pv:200,amt:1000},{name:'Bitcoin',growth:200,pv:200,amt:900},{name:'Bitcoin',growth:100,pv:200,amt:800},{name:'Bitcoin',growth:10,pv:200,amt:1400},{name:'Bitcoin',growth:120,pv:200,amt:1400},{name:'Bitcoin',growth:110,pv:200,amt:1400},{name:'Bitcoin',growth:90,pv:200,amt:1400}];
const renderCustomAxisTick = ({ x, y, payload }) => {
    let path = '';}

function Growth() {
  return (
    <div class='float-right mt-[2%] p-2 font-bold text-white w-[80%] min-w-[40%] min-h-[30vh] min-w-[120vh] rounded-xl   bg-slate-900'>
      Growth <div class='float-right'>
        
        <a class='p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white'>BTC</a>
               
        <a class='p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white' onClick={()=>{
            
        }}>ETH</a>
    
        </div>

      
      <LineChart width={600} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="growth" stroke="#8884d8" />

    <Tooltip />
  </LineChart>
    </div>
  )
}

export default Growth
