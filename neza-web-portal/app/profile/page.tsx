'use client'
<<<<<<< HEAD
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import useLogin from '@/app/hooks/useLogin';
=======
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SideBar from '../components/Sidebar';
>>>>>>> 4f75a6ff76d99496b3c961bfd2419401a9a45b90

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { user, handleLogin } = useLogin({
    username: username,
    password: password,
  });

  const router = useRouter();

  const handleLoginUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    await handleLogin();

    if (user) {
      setMessage('Login Successful!');
      router.push('/dashboard');
    } else {
      setMessage('Login failed. Please check your credentials');
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
<<<<<<< HEAD
    <div className="max-w-full w-auto h-auto mt- ml-10 bg-white pl-[280px] pt-20">
      <Image src="/LOGO.png" width={70} height={60} alt="logo" className="" />
      <div className="flex gap-x-20">
        <div>
          <div className="text-black text-[43px] ml-20 pl-[150px] font-['Nunito']">Sign In</div>
          <form className="mt-10 ml-2 w-max text-[20px] font-['Nunito']" onSubmit={handleLoginUser}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2 ml-10 font-nunito">
                Enter Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
=======
    <div className=' flex'>
      <SideBar/>

    <div className="bg-white ml-[10%]">
      <div className="m-auto">
    </div>
        <h1 className="text-2xl font-semibold mt-3 pl-20 text-black text-center">My Account</h1>
        <div className="max-w-md mx-auto justify-items-center">
          <div className="pl-20">
            <div className="shrink-0 ml-20">
              <img src="/kanini.jpg" width={200} alt="profile" className="rounded-full" />
>>>>>>> 4f75a6ff76d99496b3c961bfd2419401a9a45b90
            </div>
            <div className="mb-10 mt-10">
              <label htmlFor="password" className="block text-gray-700 mb-2 ml-10 font-nunito">
                Enter Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="pl-40">
              {showPopup && (
                <p className={`text-${message.includes('Successful') ? 'green' : 'red'} text-xl ml-[14%] font-normal font-['Nunito']`}>
                  {message}
                </p>
              )}
              <button
                type="submit"
                className="ml-10 bg-green-500 text-white px-4 py-3 mt-20 rounded-md mt-2 pr-5 font-nunito"
                style={{
                  width: '200px',
                  height: '70px',
                  borderRadius: '10px',
                  background: '#2DCD1F',
                }}
              >
                Sign In
              </button>
              <Link href="/signup">
                <p className="mt-10 text-black text-xl font-normal font-['Nunito']">
                  Don&apos;t have an account? <span className="text-green-400">Sign Up</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
        <div className="ml-10">
          <Image src="/loc.jpg" width={500} height={500} alt="logo" className="w-[600px] h-[auto]" />
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Login;
=======

export default Profile;
>>>>>>> 4f75a6ff76d99496b3c961bfd2419401a9a45b90
