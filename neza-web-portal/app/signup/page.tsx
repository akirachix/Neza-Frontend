'use client'
import { useRouter } from 'next/navigation';
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
  const [phone_number, setPhonenumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { user, handleSignup } = useSignup({
    username:username,
    email:email,
    password:password,
    org_type: orgType,
    website:website,
    phone_number:phone_number,
  });

  const router = useRouter()
  const [message, setMessage] = useState(''); 

  const handleCreateUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    await handleSignup();

    if (user) {
      setMessage('Sign-up Successful!');
      router.push('/login')

    } else {
      setMessage('Sign-up failed. Please check your details.');
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

const completeSignup = user !==null

  return (
    <div className="max-w-full mt- ml-10 bg-white pl-[280px] pt-5">
      <Image
      src="/LOGO.png"
      width={70}
      height={60}
      alt="logo"
      className=''/>
      <div className='flex gap-x-20 '>
        <div>
    <div className="text-black text-[43px] ml-20 pl-[150px] font-['Nunito']">Sign Up </div>
    <form className='mt-5 ml-2 text-[20px] font-["Nunito"]' onSubmit={handleCreateUser}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 ml-10 font-nunito">
          Username:
        </label>
        <input
          id="username"
          name="username"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="block text-gray-700 ml-10 font-nunito ">
          Organization Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>      
      <div className="mt-5">
        <label htmlFor="password" className="block text-gray-700 ml-10 font-nunito ">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="org_type" className="block text-gray-700 ml-10 font-nunito ">
          Organisation Type:
        </label>
        <input
          type="text"
          id="org_type"
          name="org_type"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          value={orgType}
          onChange={(e) => setOrgType(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="website" className="block text-gray-700 ml-10 font-nunito ">
          Organisation website:
        </label>
        <input
          type="text"
          id="website"
          name="website"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="phone_number" className="block text-gray-700 ml-10 font-nunito ">
          Phone number:
        </label>
        <input
          type="phoneNumber"
          id="phone_number"
          name="phone_number"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          value = {phone_number}
          onChange={(e) => setPhonenumber(e.target.value)}
          required
        />
      </div>
      <div className='pl-40'>

          {showPopup && (
            <p className={`text-${message.includes('Successful') ? 'green' : 'red'} text-xl ml-[14%] font-normal font-['Nunito']`}>
              {message}
            </p>
          )}
          <button 
          type='submit'
          className={`ml-5 bg-green-500 text-white px-4 py-3 mt-5 rounded-md pr-5 font-nunito
          ${completeSignup?'': 'pointer-events-none'}`}>
            Sign Up
          </button>
      <Link href="/login">
                <p className="mt-10 text-black text-xl font-normal font-['Nunito']">
                Already have an account? <span className="text-green-400">Sign In</span>
                </p>
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