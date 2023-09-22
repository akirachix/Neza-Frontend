'use client'
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SideBar from '../components/Sidebar';

//use client
const Profile = () => {
  const initialFormData = {
    organizationName: 'Bwiza',
    emailAddress: 'bwiza@gmail.com',
    organizationType: 'NPO',
    phoneNumber: '+254 701376609',
    website: 'https://www.bwiza.com',
    password: '1234',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditMode, setIsEditMode] = useState(false);
  

  useEffect(() => {

  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    alert('Details updated successfully');
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your details have been updated successfully');
  };

  return (
    <div className=" flex bg-white ">
      <SideBar/>
    <div className=' items-center justify-center ml-[350px]'>
      <h1 className="text-2xl font-semibold mt-4 pl-10 text-black text-center ">My Account</h1>
      <div className="max-w-md mx-auto justify-items-center ">
        <div className="pl-20">
          <div className="shrink-0 ml-20">
            <img
            src="/kanini.jpg"
            width={200}
            alt="profile"
            className='rounded-full'/>
          </div>

          <div className="p-8">
              <div className="uppercase tracking-wide text-m text-indigo-500 font-semibold">
              </div>
            </div>
          </div>
        </div>

      <form className="ml-10 pl-20" onSubmit={handleSubmit}>



      <div className="mb-10 relative">
        <label htmlFor="organizationName" className="w-72 h-8 text-black text-[20px] font-normal">
          Organization Name:
        </label>
        <div className="relative"> 
        {isEditMode ? (
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          style = {{width:'100%'}}
          className=" px-2 py-2 border-b pl-5 border-green-600 focus:outline-none focus:border-yellow-600 relative text-black"  
          value = {formData.organizationName}
          onChange={handleInputChange}
          required
        />):(
          <p className="ml-1 pb-2 border-b border-green-600 w-80 text-black inline-block">
          {formData.organizationName}
          </p>
        )}

        {isEditMode && (
            <div className="absolute right-4 top-2">
            <EditIcon
              style={{ color: 'black', margin: '-10px 0' }}
              onClick={handleEditClick}
              />
                </div>
      )}

        {!isEditMode && (
            <div className="absolute right-4 top-2">
              <EditIcon
                style={{ color: 'black', margin: '-10px 0' }}
                onClick={handleEditClick}
              />
                </div>
              )}
            </div>
          </div>


        <div className="mb-10 relative">
        <label htmlFor="EmailAddress" className="w-72 h-8 text-black text-[20px] font-normal">
          Email Address:
        </label>
        <div className="relative"> 
        {isEditMode ? (
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          style = {{width:'564px'}}
          className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative text-black"
          required
          value = {formData.emailAddress}
          onChange={handleInputChange}
        />):(
          <p className="ml-1 pb-2 border-b w-full border-green-600 text-black w-96">{formData.emailAddress}
        </p>
        )}

        {isEditMode && (
            <div className="absolute right-4 top-2">
            <EditIcon
              style={{ color: 'black', margin: '-10px 0' }}
              />
                </div>
      )}
        {!isEditMode && (
            <div className="absolute right-4 top-2">
              <EditIcon
                style={{ color: 'black', margin: '-10px 0' }}
                onClick={handleEditClick}
              />
                </div>
              )}
            </div>
          </div>    


        <div className="mb-10 relative">
        <label htmlFor="organizationType" className="w-72 h-8 text-black text-20px font-normal">
          Organization Type:
        </label>
        <div className="relative"> 
        {isEditMode ? (
        <input
          type="text"
          id="type"
          name="organizationType"
          style = {{width:'564px'}}
          className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative text-black"
          required
          value = {formData.organizationType}
          onChange={handleInputChange}
        />):(
          <p className="ml-1 pb-2 border-b w-full border-green-600 text-black w-96">{formData.organizationType}</p>
        )}

        {isEditMode && (
            <div className="absolute right-4 top-2">
            <EditIcon
              style={{ color: 'black', margin: '-10px 0' }}
              />
                </div>
      )}

        {!isEditMode && (
            <div className="absolute right-4 top-2">
              <EditIcon
                style={{ color: 'black', margin: '-10px 0' }}
                onClick={handleEditClick}
              />
                </div>
              )}
            </div>
          </div> 


        <div className="mb-10 relative">
        <label htmlFor="phoneNumber" className="w-72 h-8 text-black text-20px font-normal">
          Phone Number:
        </label>
        <div className="relative"> 
        {isEditMode ? (
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          style = {{width:'564px'}}
          className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 text-black"
          required
          value = {formData.phoneNumber}
          onChange={handleInputChange}
        />):(
          <p className="ml-1 pb-2 border-b w-full border-green-600 text-black w-96">{formData.phoneNumber}</p>
        )}

        {isEditMode && (
            <div className="absolute right-4 top-2">
            <EditIcon
              style={{ color: 'black', margin: '-10px 0' }}
              onClick={handleSaveClick}
              />
                </div>
      )}

        {!isEditMode && (
            <div className="absolute right-4 top-2">
              <EditIcon
                style={{ color: 'black', margin: '-10px 0' }}
                onClick={handleEditClick}
              />
                </div>
              )}
            </div>
          </div>    


        <div className="mb-10 relative">
        <label htmlFor="website" className="w-72 h-8 text-black text-[20px] font-normal">
          Website:
        </label>
        <div className="relative"> 
        {isEditMode ? (
        <input
          type="text"
          id="website"
          name="website"
          style = {{width:'564px'}}
          className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative text-black"
          required
          value = {formData.website}
          onChange={handleInputChange}
        />):(
          <p className="ml-1 pb-2 border-b w-full border-green-600 text-black w-96">{formData.website}</p>
        )}

        {isEditMode && (
            <div className="absolute right-4 top-2">
            <EditIcon
              style={{ color: 'black', margin: '-10px 0' }}
              onClick={handleSaveClick}
              />
                </div>
      )}

        {!isEditMode && (
            <div className="absolute right-4 top-2">
              <EditIcon
                style={{ color: 'black', margin: '-10px 0' }}
                onClick={handleEditClick}
              />
                </div>
              )}
            </div>
          </div>


        <div className="mb-10 relative">
        <label htmlFor="Password" className="w-72 h-8 text-black text-[20px] font-normal">
          Password:
        </label>
        <div className="relative"> 
        {isEditMode ? (
        <input
          type="text"
          id="password"
          name="password"
          style = {{width:'564px'}}
          className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative text-black"
          required
          value = {formData.password}
          onChange={handleInputChange}
        />):(
          <p className="ml-1 pb-2 border-b w-full border-green-600 text-black w-96">{formData.password}</p>
        )}

        {isEditMode && (
            <div className="absolute right-4 top-2">
            <EditIcon
              style={{ color: 'black', margin: '-10px 0' }}
              onClick={handleSaveClick}
              />
                </div>
      )}

        {!isEditMode && (
            <div className="absolute right-4 top-2">
              <EditIcon
                style={{ color: 'black', margin: '-10px 0' }}
                onClick={handleEditClick}
              />
                </div>
              )}
            </div>
          </div>  

        <div>
            {isEditMode ? (
              <button
                type="button"
                className="w-60 h-14 ml-10 px-1 bg-custom-green border custom-green text-white text-[20px] rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600"
                onClick={handleSaveClick}
              >
                Done
              </button>
            ) : (
              <button
                type="button"
                className="w-60 pb-2 h-12 ml-10 px-1 py-2 bg-custom-green border custom-green text-white text-[20px] rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Profile;