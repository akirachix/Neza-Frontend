// pages/index.tsx
'use client'
import React from 'react';
import DataUpload from './components/DataUpload/upload';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-6 ml-40'>Data Management</h1>
      <DataUpload />
    </div>
  );
};

export default Home;
