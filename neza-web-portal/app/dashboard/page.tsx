'use client';
import React, { useState, useEffect } from 'react';
import NairobiMap from '../components/dynamicNairobiMap';
import SideBar from '../components/Sidebar';
import GirlIcon from '@mui/icons-material/Girl';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import FactoryIcon from '@mui/icons-material/Factory';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Image from 'next/image';

function Dashboard() {
  function getTimeOfDay() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  return (
    <div className='flex'>
      <SideBar/>
      <div>
        <h3 className='text-[23px] ml-[52%] text-green-800 font-bold mt-[7%] w-[180px]'>
        <span className='greeting '>{getTimeOfDay()}</span>
        </h3>
      </div>
    <div className='flex ml-[-5%] mt-[2%]'>
    <div className='flex mt-[5px]'>
      <div className='pt-5'>
      <div className='flex space-x-40'>   

      <div>
        <h3 className='text-[20px]'>Children</h3>
        <div className=" flex pt-[13%] space-x-5 mt-1 pl-[1%] w-[350px] h-[161px] bg-blue-200 pt-[2%] rounded-[10px]">
          <div className='text-green-800 text-2xl '>
          <Image src="/girl.png" width={50} height={500} alt="logo" className="w-[70px]" />
          </div>
          <div className='text-black '>
            <h3>No.of children at risk</h3>
            <h1 className='text-[25px]'>154,651</h1>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-[20px]'>Pregnancies</h3>
        <div className=" flex pt-[13%] space-x-2 mt-1 pl-[5%] w-[330px] h-[161px] bg-blue-200 pt-[2%] rounded-[10px]">
          <div className='text-6xl text-green-800'>
          <Image src="/embryo.png" width={50} height={500} alt="logo" className="w-[70px]" />
          </div>
          <div className='text-black '>
            <h3>Pregancies at risk each month</h3>
            <h1 className='text-[25px]'>7500</h1>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-[20px]'>Variables considered</h3>
        <div className="mt-1 pl-[5%] w-[350px] h-[161px] bg-blue-200  p-[10px] rounded-[10px] text- text-[18px] font-normal font-['Nunito']">
          <div>

          <div  className='text-green-800 flex m-[5px] space-x-3'>
            <FactoryIcon/>
            <p className='text-black'>No. of industries</p>
          </div>
          <div  className=' text-green-800 flex m-[5px] mt-2 space-x-3'>
            <WaterDropIcon/>
            <p className='text-black'>Source of water</p>
          </div>
          </div>
          <div>
          <div  className='text-green-800  flex m-[5px] mt-2 space-x-3'>
            <RemoveCircleOutlineIcon/>
            <p className='text-black'>Open Sewage</p>
          </div>
          <div  className=' text-green-800 flex m-[5px] mt-2 space-x-3'>
            <CarRepairIcon/>
            <p className='text-black'>No. of Garages</p>
          </div>
        </div>
        </div>
      </div>
      </div>

     <div className="flex w-[400px] h-[27px] ">
</div>

<p className='text-black font-bold text-[25px]'>Average Blood Lead Levels in Nairobi Wards</p>
      <div className="mt-[1%]">
        <NairobiMap />
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}
export default Dashboard;