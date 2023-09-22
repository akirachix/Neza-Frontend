'use client'
import React from 'react';
import NairobiMap from './map';

function Dashboard() {
  return (
    <div className='pl-20 pt-10'>
      <p className="text-black text-[40px] font-bold font-['Nunito']">Hello Bwiza</p>  
      <div className="text-black text-2xl font-normal font-['Nunito']">Areas with the highest levels of lead exposure</div>
      <div className='flex space-x-40'>
      <div className="mt-10 pl-20 w-[310px] h-[124px] pt-4 rounded-[10px] border-2 border-green-600 ">
            <div className=" ml-5 text-black text-[26px] font-normal font-['Nunito']">Dandora</div>
            <div className="text-green-600 text-[26px] font-normal font-['Nunito'] ml-10">60%</div>
      </div>
      <div className="ml-20 mt-10 pl-20 w-[310px] h-[124px] pt-4 rounded-[10px] border-2 border-green-600 ">
            <div className=" ml-5 text-black text-[26px] font-normal font-['Nunito']">Kibra</div>
            <div className="text-green-600 text-[26px] font-normal font-['Nunito'] ml-10">87%</div>
      </div>
      <div className="ml-20 mt-10 pl-20 w-[310px] h-[124px] pt-4 rounded-[10px] border-2 border-green-600 ">
            <div className=" ml-5 text-black text-[26px] font-normal font-['Nunito']">Kasarani</div>
            <div className="text-green-600 text-[26px] font-normal font-['Nunito'] ml-10">92%</div>
      </div>
      </div>
      <div className="mt-10 pl-20 w-[622px] h-[59px] rounded-[10px] border-2 border-black ">
      <div className="w-[229px] mt-3 text-stone-500 text-xl font-normal font-['Nunito']">Search by location ...</div>
      </div>
      <div className="mt-4" style={{ marginTop: '2rem' }}>
        <NairobiMap />
      </div>
      <div className='w-[248px] h-[135px] bg-black rounded-[10px] text-white ml-[55%] mt-5%'>
        <p>Lead exposure</p>
        <p>lead Poisoning</p>
      </div>
    </div>
  );
}

export default Dashboard;
