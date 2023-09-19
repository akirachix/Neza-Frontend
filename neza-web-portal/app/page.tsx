'use client'
import React from 'react';
import DataUpload from './components/DataUpload/upload';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mt-6 ml-4 md:ml-40'>Data Management</h1>
      <DataUpload />
    </div>
  );
};

export default Home;
