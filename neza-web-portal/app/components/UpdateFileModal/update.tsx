// components/UpdateFileModal.tsx
import React, { useState } from 'react';

interface UpdateFileModalProps {
  fileData: string;
  onClose: () => void;
  onUpdate: (updatedData: string) => void;
}

const UpdateFileModal: React.FC<UpdateFileModalProps> = ({ fileData, onClose, onUpdate }) => {
  const [updatedData, setUpdatedData] = useState<string>(fileData);

  const handleUpdate = () => {
    onUpdate(updatedData);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2>Update File</h2>
        <textarea
          className="w-full h-32 border rounded-md p-2"
          value={updatedData}
          onChange={(e) => setUpdatedData(e.target.value)}
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
