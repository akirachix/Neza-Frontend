'use client'
import React from 'react';
import DataUpload from './components/DataUpload/upload';

const Home: React.FC = () => {
  return (
    <div>
<h1 className="font-nunito font-semibold text-3xl sm:text-3xl md:text-4xl mt-10">Data Management</h1>
      <DataUpload />
    </div>
  );
};

export default Home;