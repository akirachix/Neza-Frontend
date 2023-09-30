'use client';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Orgs } from './orgs';
import SideBar from '../components/Sidebar';
import useGetOrganizations from '../hooks/getOrganizations/useGetOrganizations';
Chart.register(CategoryScale, LinearScale, BarElement);


const Graph = () => {
  const [chartData, setChartData] = useState({
    labels: ['Men', 'Children', 'Women'],
    datasets: [
      {
        data: [10000, 19000, 32000],
        backgroundColor: '#00000',
      },
    ],
  });
  return (
    <div>
      <p className='pb-10 ml-[20px]'>Population in Kitisuru</p>
      <div className='w-[550px] p-4 bg-white'>
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                title: { display: true, text: 'Population' },
              },
              x: {
                title: { display: true, text: 'Gender' },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

;
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Add Progress');
  const options = ['Add Progress', 'Planning', 'Testing', 'Treating'];
  const handleOptionChange = (e:any) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className='bg-none w-[250px] rounded-[10px] pt-5 pl-5 pr-5 ml-[200%]'>
      <select
        id='dropdown'
        className='text-white text-xl p-2 rounded-[10px] font-bold bg-green-400'
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className='bg-black text-white rounded-[10px]'
          >
            {option}
          </option>
        ))}
      </select>
      <p>Org stage: {selectedOption}</p>
    </div>
  );
};



const Organizations = () => {
  const { organizations } = useGetOrganizations();
  console.log({orgs:organizations})

  if (!Array.isArray(organizations) || organizations.length === 0) {
    return <p>No organizations to display.</p>;
  }  return (
    <div className='image flex flex-wrap gap-[5%] mt-[100px] ml-10 mb-10 mr-5'>
      {organizations.map((org) => (
        <div className='' key={org.id}>
          <img src={'images/unep.png'} alt='product' className='w-[150px]' />
          <h1 className='mt-5 text-[25px] font-bold text-black ml-5'>
            {org.stage_name}
          </h1>
          {/* <p className='text-gray-500'>ID: {org.id}</p> */}
          <p className='text-gray-500'>Description: {org.description}</p>
        </div>
      ))}
    </div>
  );
};
const Details = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div>
        <Dropdown />
        <div>
          <Graph />
          <div>
            <button
              type='submit'
              className='w-60 ml-[5%] px-4 py-2 bg-green-400 border-none text-black text-2xl rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600'
            >
              View Full Report
            </button>
            <Organizations />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;





