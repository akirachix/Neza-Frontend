import React, { useState } from 'react';
import Papa from 'papaparse';
import UpdateFileModal from '../UpdateFileModal/update';
import axios from 'axios';

const DataUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [fileContents, setFileContents] = useState<string[]>([]);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showUploadedFiles, setShowUploadedFiles] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      if (!selectedFile.name.endsWith('.csv')) {
        setErrorMessage('Only CSV files are allowed.');
        return;
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          const csvData = e.target.result.toString();

          if (fileContents.includes(csvData)) {
            setErrorMessage('File with the same content already exists.');
            return;
          }

          const { data, errors } = Papa.parse(csvData, { header: true });

          const requiredColumns = [
            'location',
            'sources of water',
            'proximity to industries',
            'number of garages in an area',
            'proximity to dumpsite',
            'presence of open sewage',
            'past cases of lead poisoning',
            'women and children population',
          ];

          const missingColumns = requiredColumns.filter(
            (column) => !data[0] || !Object.keys(data[0]).includes(column)
          );

          if (missingColumns.length > 0) {
            setErrorMessage(`Missing columns: ${missingColumns.join(', ')}`);
          } else {
            try {
              // Simulate an upload to the server (replace with actual upload logic)
              // Update the list of uploaded files and contents
              setUploadedFiles([...uploadedFiles, selectedFile.name]);
              setFileContents([...fileContents, csvData]);
              setErrorMessage(null);
              setSuccessMessage('File uploaded successfully.');

              // Make a POST request to your API to upload the file
              const formData = new FormData();
              formData.append('file', selectedFile);
              await axios.post('/api/upload/', formData);
            } catch (error) {
              setErrorMessage('An error occurred while uploading the file.');
              setSuccessMessage(null);
            }
          }
        }
      };

      reader.readAsText(selectedFile);
    }
  };

  const handleDeleteFile = (index: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this file? This action cannot be undone.');

    if (confirmDelete) {
      const newUploadedFiles = [...uploadedFiles];
      newUploadedFiles.splice(index, 1);
      setUploadedFiles(newUploadedFiles);

      const newFileContents = [...fileContents];
      newFileContents.splice(index, 1);
      setFileContents(newFileContents);
    }
  };

  const handleUpdateFile = (index: number) => {
    setUpdateIndex(index);
    setShowUpdateModal(true);
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    setUpdateIndex(null);
  };

  const handleUpdateModalUpdate = (updatedData: string) => {
    if (updateIndex !== null) {
      const updatedUploadedFiles = [...uploadedFiles];
      updatedUploadedFiles[updateIndex] = updatedData;
      setUploadedFiles(updatedUploadedFiles);

      const updatedFileContents = [...fileContents];
      updatedFileContents[updateIndex] = updatedData;
      setFileContents(updatedFileContents);
    }
    setShowUpdateModal(false);
    setUpdateIndex(null);
  };

  const toggleUploadedFiles = () => {
    setShowUploadedFiles(!showUploadedFiles);
  };

  return (
    <div className="flex flex-col md:flex-row data-upload-container">
      <div className="md:ml-5 upload-files md:w-1/3">
        <h2 className='font-bold text-2xl mt-10'>Uploaded Files</h2>
        <ol>
          {uploadedFiles.map((file, index) => (
            <li key={index} className="flex items-center">
              {file}
              <div className="icon-container ml-2">
                <span
                  className="delete-icon text-green-500 cursor-pointer"
                  onClick={() => handleDeleteFile(index)}
                >
                  🗑️
                </span>
                <span
                  className="update-icon text-green-500 cursor-pointer"
                  onClick={() => handleUpdateFile(index)}
                >
                  ✏️
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="main-content md:w-2/3">
        <div className="mt-10 ml-0 md:ml-20 upload-header">
          <h1 className="font-bold text-2xl">Upload Files</h1>
          <p>Uploaded data helps us update our model <br/> and generate more accurate predictions</p>
          <div className="button-container bg-black w-full md:w-1/4 p-5 pb-10 rounded-xl mt-5 mb-9">
            <label htmlFor="file-input" className="file-upload-label">
              <div className="file-upload-icon cursor-pointer" style={{ fill: 'green' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <path d="M24 0C11.046 0 0 11.046 0 24s11.046 24 24 24 24-11.046 24-24S36.954 0 24 0zm0 44C12.93 44 4 35.07 4 24S12.93 4 24 4s20 8.93 20 20-8.93 20-20 20zm2-26v8h-4v-8H18l6-6 6 6h-4z" />
                </svg>
              </div>
              <p className="text-white mt-2">Drag CSV files to upload</p>
              <input
                id="file-input"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden" 
              />
            </label>
            <button onClick={toggleUploadedFiles} className="bg-white text-black px-2 py-2 rounded-md mt-2">
              Browse Files
            </button>
          </div>
          <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
            Upload
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {showUploadedFiles && (
          <div className="uploaded-files">
            <h2>Uploaded Files</h2>
            <ol>
              {uploadedFiles.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ol>
          </div>
        )}
        {showUpdateModal && updateIndex !== null && (
          <UpdateFileModal
            fileData={uploadedFiles[updateIndex]}
            onClose={handleUpdateModalClose}
            onUpdate={handleUpdateModalUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default DataUpload;
