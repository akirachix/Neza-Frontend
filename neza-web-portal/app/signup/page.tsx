'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link'

function Signup() {
  return (
    <div className="max-w-full mt- ml-10 bg-white pl-[280px] pt-20">
      <Image
      src="/images/LOGO.png"
      width={70}
      height={60}
      alt="logo"
      className=''/>
      <div className='flex gap-x-20 '>
        <div>
    <div className="text-black text-[43px] ml-20 pl-[150px]">Sign Up </div>
    <form className='mt-10 ml-2 w-max text-[20px] '>
      <div className="mb-4">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2 ml-10">
          Organization Name:
        </label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          className= "w-[583px] h-[87px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className="mb-10 mt-10">
        <label htmlFor="organizationEmail" className="block text-gray-700 mb-2 ml-10 ">
          Organization Email:
        </label>
        <input
          type="email"
          id="organizationEmail"
          name="organizationEmail"
          className= "w-[583px] h-[87px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className='pl-40'>
      <Link href="/profile">
      <button
            className="ml-10 bg-green-500 text-white px-4 py-3 mt-20 rounded-[10px] w-[180px] h-[70px] rounded-md mt-2 pr-5 bg-neza-green-200"
            type='submit'>

            Sign Up
          </button>
      </Link>
      <Link href="/Signin">
      <p className='mt-10 text-black text-xl'>Already have an account? <span className='text-neza-green-400'>Sign In</span></p>
      </Link>  
      </div>
    </form>
    </div>
    <div className='ml-10'>
    <Image
      src="/loc.jpg"
      width={500}
      height={500}
      alt="logo"
      className='w-[600px] h-[600px]'
      />
    </div>
    </div>
   </div>

  );
}
export default Signup;