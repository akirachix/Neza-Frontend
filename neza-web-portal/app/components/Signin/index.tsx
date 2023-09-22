import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link'

function Signup() {
  return (
    <div className="max-w-full mt- ml-10 pl-[280px] pt-20">
      <Image
      src="/LOGO.png"
      width={70}
      height={60}
      alt="logo"
      className=''/>
      <div className='flex gap-x-20 '>
        <div>
    <div className="text-[43px] text-neza-black ml-20 pl-[150px]">Sign In </div>
    <form className='mt-10 ml-2 w-max text-[20px] '>
      <div className="mb-4">
        <label htmlFor="organizationName" className="block text-neza-grey mb-2 ml-10">
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
        <label htmlFor="organizationEmail" className="block text-neza-grey mb-2 ml-10 ">
          Enter Password:
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
      <Link href="#">
      <button
            className="ml-10 bg-green-500 text-white px-4 py-3 mt-20 rounded-[10px] w-[180px] h-[70px] rounded-md mt-2 pr-5 bg-neza-green-200">
            Sign In
          </button>
      </Link>
      <Link href="#">
      <p className='mt-10 text-black text-xl'>Don't have an account? <span className='text-neza-green-400'>Sign up</span></p>
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