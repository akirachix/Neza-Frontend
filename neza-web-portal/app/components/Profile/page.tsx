'use client'
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';


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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Your details have been updated successfully');
  };

  const EditIconButton = ({isEditMode}:{isEditMode:boolean}) =>{
    return (
    <div className="absolute right-4 top-2">


    <EditIcon
      onClick={isEditMode? handleEditClick : undefined}
      className='text-black -my-[10px] '
    />
      </div>)
  }

  const fields = [
    { name: 'organizationName', label: 'Organization Name' },
    { name: 'emailAddress', label: 'Email Address' },
    { name: 'organizationType', label: 'Organization Type' },
    { name: 'phoneNumber', label: 'Phone Number' },
    { name: 'website', label: 'Website' },
    { name: 'password', label: 'Password' },
  ];

  const renderInputFields = () =>{
    return fields.map((field)=>(
      <div className="mb-10 relative" key={field.name}>
      <label htmlFor={field.name} 
      className="w-72 h-8 text-black text-[20px] font-normal">
        {field.label}:
      </label>
      <div className="relative">
          <input
            type="text"
            id={field.name}
            name={field.name}
            style={{ width: '564px' }}
            className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative text-black"
            required
            value={isEditMode ? formData[field.name as keyof typeof formData] : formData[field.name as keyof typeof formData]}
            onChange={handleInputChange}
          />
   

        {isEditMode && (
          <div className="absolute right-4 top-2">
            <EditIcon style={{ color: 'black', margin: '-10px 0' }} onClick={handleEditClick} />
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
    ));
  }

  return (
    <div className="flex bg-white ">
      <div className="m-auto">
        <h1 className="text-2xl font-semibold mt-4 pl-10 text-black text-center">My Account</h1>
        <div className="max-w-md mx-auto justify-items-center">
          <div className="pl-20">
            <div className="shrink-0 ml-20">
              <img src="/kanini.jpg" width={200} alt="profile" className="rounded-full" />
            </div>
          </div>
        </div>

        <form className="ml-10 pl-20" onSubmit={handleSubmit}>
          {renderInputFields()}

          <div>
            <button
              type="button"
              className="w-60 h-14 ml-10 px-1 bg-custom-green border custom-green text-white text-[20px] rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600"
              onClick={isEditMode ? handleSaveClick : handleEditClick}
            >
              {isEditMode ? 'Done' : 'Edit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Profile;