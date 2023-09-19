import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Login() {
  return (
   
 <div className="max-w-xl mt-5 ml-9 bg-white p-9">
        <Image
        src="/LOGO.png"
      width={50}
      height={50}
      alt="logo"
      className='mb-10'/>
        <div className="text-black text-[25px] ml-20">SIGN IN </div>
    <form className='mt-10 ml-5'>
      <div className="mb-4">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          Organization Name:
        </label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          className="w-full px-4 py-4 border border-green-600 rounded-md focus:outline-none focus:border-green-800"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="organizationEmail" className="block text-gray-700 mb-2">
          Enter Password:
        </label>
        <input
          type="email"
          id="organizationEmail"
          name="organizationEmail"
          className="w-full px-4 py-4 border border-green-600 rounded-md focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className='pl-20'>
      <Link href={`./Navigation`}>
        <button
          type="submit"
          className="w-60 mr-45px mt-5 px-1 py-4 bg-white-600 border border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600">
          Sign In
        </button>
        </Link>   
      </div>

    </form>
    <a href='./signup'><p className='mt-5'>Don't have an account? <span className='text-green-600'>Sign Up</span></p></a>
  </div>
 
   
  );
}
export default Login;