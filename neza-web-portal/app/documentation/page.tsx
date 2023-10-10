
import React, { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar';


function  Documentation () {
  return (
    <div className='flex ml-[10px]'>
      <SideBar/>
<div className="flex flex-col ml-10 mt-10 font-nunito ">
      <div>
        <h1 className="mb-5 text-black  text-4xl ml-[500px]">How Tinylife Wellness Works</h1>
      </div>

      <div className="mt-10 flex flex-row gap-[16%] mb-10 ml-[233px]">
    
        <div className="bg-opacity-15 text-2xl bg-green-400 rounded-2xl shadow-2xl p-5  w-[500px] h-[370px] pt-7">
          <h4 className="text-2xl">
            The portal showcases the extent of lead exposure levels in different areas in Nairobi. The results displayed are from an ML model that we fed data on variables that lead to lead exposure within our communities, and it came up with the levels of lead exposure in Nairobi.
          </h4>
        </div>

 
        <div className="bg-opacity-15 ml-[90px] bg-yellow-200 rounded-2xl shadow-2xl p-4  w-[500px] h-[370px] pt-7">
          <h4 className="text-2xl">
          
The map highlights the different wards in Nairobi and their case details. The level of exposure is subject to change  over time as the variables we considered also change
           due to government activity, population growth, as well as continuous interventions to reduce the levels of lead exposure.        </h4>
        </div>
      </div>


      <div className="bg-opacity-15 bg-lime-400 rounded-2xl shadow-2xl p-4  w-[500px] h-[350px] ml-[40%] mt-10 pt-7 ">
        <h4 className="text-2xl">
     
 It is important to keep the data we showcase as accurate as possible at all times, and we can only do this with your help. The data you collect on lead levels is invaluable 
      for retraining the model as well as keeping a record of the progress of these areas. Here is an example of such a dataset:        
    
        <a className='text-white ml-4' href='/images/womenpopulation.csv' >DataSet</a>
        </h4>
      </div>
    </div>

    </div>
    
  );
};

export default Documentation