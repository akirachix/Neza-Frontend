// components/UpdateFileModal.tsx
import React, { useState } from 'react';

interface UpdateFileModalProps {
  fileData: { name: string; timestamp: string };
  onClose: () => void;
  onUpdate: (updatedData: { name: string; timestamp: string }) => void;
}

const UpdateFileModal: React.FC<UpdateFileModalProps> = ({ fileData, onClose, onUpdate }) => {
  const [updatedName, setUpdatedName] = useState<string>(fileData.name); 

  const handleUpdate = () => {
    const updatedTimestamp = new Date().toLocaleString(); 
    onUpdate({ name: updatedName, timestamp: updatedTimestamp });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2>Update File</h2>
        <p>Original Name: {fileData.name}</p>
        <p>Uploaded at: {fileData.timestamp}</p>
        <label htmlFor="updated-name">Updated Name:</label>
        <input
          type="text"
          id="updated-name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleUpdate}>
          Update
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateFileModal;
