import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-2xl font-semibold ml-40 mb-10">My Account</h1>
      <div className="max-w-md mx-auto ">
        <div className="ml-10">
          <div className="shrink-0">
            <img
            src="/kanini.jpg"
            width={250}
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
      <form className='ml-20 pl-20'>
      <div className="mb-4 mb-20">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          Organization Name:
        </label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          className="px-2 py-0 border-b border-green-600 rounded-md focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <div className="mb-4 mb-20">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          E-mail Address:
        </label>
        <input
          type="email"
          id="e-mail"
          name="e-mail"
          className="px-4 py-0 border-b border-green-600 rounded-md focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <div className="mb-4 mb-20">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          About:
        </label>
        <input
          type="text"
          id="about"
          name="about"
          className="px-4 py-0 border-b border-green-600 rounded-md focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <div className="mb-4 mb-20">
      <h1 className="text-2xl font-semibold mb-10">Change Password</h1>
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          New Password:
        </label>
        <input
          type="password"
          id="about"
          name="about"
          className="px-4 py-0 border-b mb-10 border-green-600 rounded-md focus:outline-none focus:border-yellow-600"
          required
        />
        <label htmlFor="organizationName" className="block text-gray-700 mb-2">
          Confirm Password:
        </label>
        <input
          type="password"
          id="about"
          name="about"
          className="px-4 py-0 border-b border-green-600 rounded-md focus:outline-none focus:border-yellow-600"
          required
        />
      </div>
      <button
          type="submit"
          className="w-40 ml-50 px-1 py-4 bg-green-400 border border-green-600 text-white text-2xl rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600">
          Done
        </button>
      </form>
    </div>
  );
};
export default Profile;