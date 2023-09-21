import React from 'react';
import EditIcon from '@mui/icons-material/Edit';


const Profile = () => {
  return (
    <div className=" flex bg-white p-8">
    <div className='ml-40'>
      <h1 className="text-3xl font-semibold ml-60 mt-5 mb-10 pl-10 text-black ">My Account</h1>
      <div className="max-w-md mx-auto ">
        <div className="pl-20">
          <div className="shrink-0 ml-20">
            <img
            src="/kanini.jpg"
            width={200}
            alt="profile"
            className='rounded-full'/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold" >
            </div>
            <p className="mt-2 text-black">
          </p>
          </div>
        </div>
      </div>
      <form className='ml-10  pl-20'>

      <div className="mb-10 relative">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          Organization Name:
        </label>
        <div className="relative"> 
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          style = {{width:'564px'}}
          className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative"
          required
        />
        <div className="absolute right-4 top-2">
          <EditIcon style={{ color: 'black', margin:'-10px 0'}} />
        </div>
      </div>
      </div>

      <div className="mb-10 relative">
        <label htmlFor="EmailAddress" className="block text-gray-700 mb-2">
          E-mail Address:
        </label>
        <div className="relative"> 
        <input
          type="email"
          id="e-mail"
          name="e-mail"
          className="w-full px-16 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600"
          required
        />
        <div className="absolute right-4 top-2">
          <EditIcon style={{ color: 'black', margin:'-10px 0'}} />
        </div>
      </div>
      </div>

      <div className="mb-10 relative">
        <label htmlFor="organizationType" className="block text-gray-700 mb-2">
          Organization Type:
        </label>
        <div className="relative"> 
        <input
          type="text"
          id="about"
          name="about"
          className="w-full px-16 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative"
          required
        />
        <div className="absolute right-4 top-2">
          <EditIcon style={{ color: 'black', margin:'-10px 0'}} />
        </div>
      </div>
      </div>

      <div className="mb-10 relative">
      <label htmlFor="PhoneNumber" className="block text-gray-700 mb-2">
          Phone Number:
        </label>
        <div className="relative"> 
        <input
          type="phonenumber"
          id="about"
          name="about"
          className="w-full px-16 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative"
          required
        />
        <div className="absolute right-4 top-2">
          <EditIcon style={{ color: 'black', margin:'-10px 0'}} />
        </div>
        </div>
        </div>


        <div className="mb-10 relative">
        <label htmlFor="Website" className="block text-gray-700">
          Website:
        </label>
        <div className="relative"> 
        <input
          type="text"
          id="about"
          name="about"
          className="w-full px-16 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative"
          required
        />
        <div className="absolute right-4 top-2">
          <EditIcon style={{ color: 'black', margin:'-10px 0'}} />
        </div>
        </div>
        </div>

         <div className="mb-10 relative">
        <label htmlFor="Password" className="block text-gray-700 mt-10">
          Password:
        </label>
        <div className="relative"> 
        <input
          type="password"
          id="about"
          name="about"
          className="w-full px-16 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative"
          required
        />
        <div className="absolute right-4 top-2">
          <EditIcon style={{ color: 'black', margin:'-10px 0'}} />
        </div>
        </div>
        </div>
      
      <button
          type="submit"
          className="w-60 h-14 ml-32 px-1 py-2 bg-custom-green border custom-green text-white text-2xl rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600">
          Done
        </button>
      </form>
      </div>
    </div>
  );
};
export default Profile;