import React from 'react';

const Profile = () => {
  return (
    <div className=" flex bg-white p-8">
    <div className='ml-40'>
      <h1 className="text-2xl font-semibold ml-40">My Account</h1>
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
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            </div>
            <p className="mt-2 text-black">
          </p>
          </div>
        </div>
      </div>
      <form className='ml-10  pl-20'>
      <div className="mb-10">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          Organization Name:
        </label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          className="w-full px-16 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <div className="mb-10  ">
        <label htmlFor="EmailAddress" className="block text-gray-700">
          E-mail Address:
        </label>
        <input
          type="email"
          id="e-mail"
          name="e-mail"
          className="px-16 py-0 border-b border-green-600 focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <div className="mb-10">
        <label htmlFor="organizationType" className="block text-gray-700 mb-2">
          Organization Type:
        </label>
        <input
          type="text"
          id="about"
          name="about"
          className="px-16 py-0 border-b border-green-600 focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <div className="mb-10">
      <label htmlFor="PhoneNumber" className="block text-gray-700 mb-2">
          Phone Number:
        </label>
        <input
          type="password"
          id="about"
          name="about"
          className="px-16 py-0 border-b mb-10 border-green-600 focus:outline-none focus:border-yellow-600"
          required
        />
        <label htmlFor="Website" className="block text-gray-700">
          Website:
        </label>
        <input
          type="password"
          id="about"
          name="about"
          className="px-16 py-0 border-b border-green-600 focus:outline-none focus:border-yellow-600"
          required
        />
        <label htmlFor="Password" className="block text-gray-700 mt-10">
          Password:
        </label>
        <input
          type="password"
          id="about"
          name="about"
          className="px-16 py-0 border-b border-green-600 focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <button
          type="submit"
          className="w-60 h-14 ml-1 px-1 py-4 bg-green-500 border border-green-600 text-white text-2xl rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600">
          Done
        </button>
      </form>
      </div>
    </div>
  );
};
export default Profile;