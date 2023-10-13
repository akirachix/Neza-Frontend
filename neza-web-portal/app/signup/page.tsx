'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSignup from '../hooks/useSignup';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orgType, setOrgType] = useState('');
  const [website, setWebsite] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { user, handleSignup } = useSignup({
    username: username,
    email: email,
    password: password,
    org_type: orgType,
    website: website,
    phone_number: phone_number,
  });

  const [message, setMessage] = useState('');

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if (!username || !email || !password || !orgType || !website || !phone_number) {
      console.error("please fill all the fields");
      return;
    }
  
    try {
      const response: any = await handleSignup();

      if (response && response.error) {
        console.error('Error during signup:', response.error);
        setMessage('Sign-up failed. Please check your details.');
      } else {
        setMessage('Sign-up Successful!');
        setTimeout(() => {
          setShowPopup(false);
          setMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Sign-up failed. Please check your details.');
    }
  };

  return (
    <div className="max-w-full bg-white flex gap-x-20">
      <Image
      src="/one.jpeg"
      width={530}
      height={60}
      alt="logo"
      className='h-[100%]'/>
      <div className="flex gap-x-20 mt-5 ml-20 ">
        <div>
          <div className="text-black text-[43px] font-['Nunito']">Sign Up </div>
          <form className="mt-2 ml-2 text-[20px] font-['Nunito']" onSubmit={handleCreateUser}>
          <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-nunito">
          Username:
        </label>
        <input
          id="username"
          name="username"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-black pl-10 border-opacity-30"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="block text-gray-700 font-nunito ">
          Organization Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 pl-10 border-black border-opacity-30"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>      
      <div className="mt-5">
        <label htmlFor="password" className="block text-gray-700 font-nunito ">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-black pl-10  border-opacity-30"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="org_type" className="block text-gray-700  font-nunito ">
          Organisation Type:
        </label>
        <input
          type="text"
          id="org_type"
          name="org_type"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-black pl-10  border-opacity-30"
          value={orgType}
          onChange={(e) => setOrgType(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="website" className="block text-gray-700 font-nunito ">
          Organisation website:
        </label>
        <input
          type="text"
          id="website"
          name="website"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-black pl-10  border-opacity-30"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="phone_number" className="block text-gray-700 font-nunito ">
          Phone number:
        </label>
        <input
          type="phoneNumber"
          id="phone_number"
          name="phone_number"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-black  border-opacity-30"
          value = {phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
            <div className="">
              {showPopup && (
                <p className={`text-${message.includes('Successful') ? 'green' : 'red'} text-xl font-normal font-['Nunito']`}>
                  {message}
                </p>
              )}
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-3 mt-10 mb-5 rounded-md mt-5 pr-5 font-nunito"
                style={{
                  width: '200px',
                  height: '70px',
                  borderRadius: '10px',
                  background: '#2DCD1F',
                }}
              >
                Sign Up
              </button>
              <Link href='/login'>
                <p className="mt-[2px] text-black text-xl font-normal font-['Nunito']">
                  Already have an account? <span className="text-green-400">Sign In</span>
                </p>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
