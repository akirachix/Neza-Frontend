'use client'
import React from 'react';
import NairobiMap from '../atoms/map';
import { FaSearch } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className='flex'>
    <div className='flex'>
    <div className='flex ml-[40px] mt-[30px]'>
      <div className='pl-20 pt-10 '>
      <p className="text-black text-[40px] font-bold font-['Nunito']">Hello Bwiza</p>
      <div className="text-black text-2xl font-normal font-['Nunito']">Areas with the highest levels of lead exposure</div>
      <div className='flex space-x-40'>
      <div className="mt-5 pl-20 w-[310px] h-[124px] pt-4 rounded-[10px] border-2 border-green-600 ">
            <div className=" ml-5 text-black text-[26px] font-normal font-['Nunito']">Dandora</div>
            <div className="text-green-600 text-[26px] font-normal font-['Nunito'] ml-10">60%</div>
      </div>
      <div className="ml-20 mt-5 pl-20 w-[310px] h-[124px] pt-4 rounded-[10px] border-2 border-green-600 ">
            <div className=" ml-5 text-black text-[26px] font-normal font-['Nunito']">Kibra</div>
            <div className="text-green-600 text-[26px] font-normal font-['Nunito'] ml-10">87%</div>
      </div>
      <div className="ml-20 mt-5 pl-20 w-[310px] h-[124px] pt-4 rounded-[10px] border-2 border-green-600 ">
            <div className=" ml-5 text-black text-[26px] font-normal font-['Nunito']">Kasarani</div>
            <div className="text-green-600 text-[26px] font-normal font-['Nunito'] ml-10">92%</div>
      </div>
      </div>
     <div className="flex w-[653px] h-[57px] rounded-[10px] mt-10 border-2 border-black border-opacity-4">
  <p className="mt-5 ml-5 text-green-500 font-3xl"><FaSearch /></p>
  <input
  type="email"
  id="organizationEmail"
  name="organizationEmail"
  placeholder="Search by location"
  className="text-[18px] ml-5 w-[650px] border-none pl-[10px]"
  required
/>
</div>
      <div className="mt-1">
        <NairobiMap />
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}
export default Dashboard;









