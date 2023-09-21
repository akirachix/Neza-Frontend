// components/DataUpload.tsx
import React, { useState } from 'react';
import Papa from 'papaparse';
import UpdateFileModal from '../UpdateFileModal/update';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DataUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; timestamp: string }[]>([]);
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

      // Add the selected file to the list first
      const timestamp = new Date().toLocaleString();
      setUploadedFiles([{ name: file.name, timestamp }, ...uploadedFiles]);
      setFileContents(['', ...fileContents]); // Add a placeholder for now

      // Reset error and success messages
      setErrorMessage(null);
      setSuccessMessage(null);
    }
  };

  const handleUploadButtonClick = () => {
    // Trigger a click event on the hidden file input
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      if (!selectedFile.name.endsWith('.csv')) {
        // If the file doesn't have the .csv extension, remove it from the list
        removeFileFromList(selectedFile.name);
        setErrorMessage('Only CSV files are allowed.');
        return;
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          const csvData = e.target.result.toString();

          if (fileContents.includes(csvData)) {
            // If a file with the same content already exists, remove it from the list
            removeFileFromList(selectedFile.name);
            setErrorMessage('File with the same content already exists.');
            return;
          }

          const { data } = Papa.parse(csvData, { header: true });

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
            // If the file is missing required columns, remove it from the list
            removeFileFromList(selectedFile.name);
            setErrorMessage(`Missing columns: ${missingColumns.join(', ')}`);
          } else {
            // Replace the placeholder with the actual CSV data
            const newFileContents = [...fileContents];
            newFileContents[0] = csvData;
            setFileContents(newFileContents);

            setErrorMessage(null);
            setSuccessMessage('File uploaded successfully.');
          }
        }
      };

      reader.readAsText(selectedFile);
    }
  };

  const removeFileFromList = (fileName: string) => {
    const index = uploadedFiles.findIndex((file) => file.name === fileName);
    if (index !== -1) {
      const newUploadedFiles = [...uploadedFiles];
      newUploadedFiles.splice(index, 1);
      setUploadedFiles(newUploadedFiles);

      const newFileContents = [...fileContents];
      newFileContents.splice(index, 1);
      setFileContents(newFileContents);
    }
  };

  const handleDeleteFile = (index: number) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this file? This action cannot be undone.'
    );

    if (confirmDelete) {
      removeFileFromList(uploadedFiles[index].name);
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

  const handleUpdateModalUpdate = (updatedData: { name: string; timestamp: string }) => {
    if (updateIndex !== null) {
      const updatedUploadedFiles = [...uploadedFiles];
      updatedUploadedFiles[updateIndex] = updatedData;
      setUploadedFiles(updatedUploadedFiles);

      const updatedFileContents = [...fileContents];
      updatedFileContents[updateIndex] = updatedData.name; 
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
      <div className="md-5 upload-files md:w-1/3">
        <h2 className="font-bold text-2xl mt-11">Uploaded Files</h2>
        <ol>
          {uploadedFiles.map((file, index) => (
            <li key={index} className="flex items-center">
              {index + 1}. {file.name} ({file.timestamp})
              <div className="icon-container ml-2">
                <span
                  className="delete-icon text-green-500 cursor-pointer"
                  onClick={() => handleDeleteFile(index)}
                >
                  <DeleteIcon style={{ color: 'black' }} />
                </span>
                <span
                  className="update-icon text-green-500 cursor-pointer"
                  onClick={() => handleUpdateFile(index)}
                >
                  <EditIcon style={{ color: 'black' }} />
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="main-content md:w-2/3">
        <div className="mt-11 ml-0 md:ml-20 upload-header">
          <h1 className="font-bold text-2xl">Upload Files</h1>
          <p>
            Uploaded data helps us update our<br />
            model and generate more accurate<br />
            predictions
          </p>

          <div className="container-for-button-container md:w-1/3">
            <div className="button-container bg-black p-5 pb-20 rounded-xl mt-5 mb-9 flex flex-col items-center w-full">
              <label htmlFor="file-input" className="file-upload-label">
                <div className="pl-10 file-upload-icon cursor-pointer ml-[10px] mt-7">
                  <CloudUploadIcon style={{ width: '82px', height: '81px', color: 'green' }} />
                </div>

                <p className="text-white mt-5">Drag csv files to upload</p>
                <input
                  id="file-input"
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <button
                onClick={handleUploadButtonClick} // Trigger file input click when this button is clicked
                className="w-40 h-14 bg-white text-black border-2 border-green-500 rounded-lg mt-10 pl-2"
              >
                Upload Files
              </button>
            </div>
          </div>
          <button
            onClick={handleUpload}
            className="ml-[119px] bg-green-500 text-white px-4 py-3 rounded-md mt-2 pr-5 font-nunito"
            style={{
              width: '150px',
              height: '50px',
              borderRadius: '10px',
              background: '#2DCD1F',
            }}
          >
            Done
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message text-align-center">{successMessage}</p>}
        {showUploadedFiles && (
          <div className="uploaded-files">
            <h2>Uploaded Files</h2>
            <ol>
              {uploadedFiles.map((file, index) => (
                <li key={index} className="flex items-center">
                  {index + 1}. {file.name} ({file.timestamp})
                  <div className="icon-container ml-2">
                    <span
                      className="delete-icon text-green-500 cursor-pointer"
                      onClick={() => handleDeleteFile(index)}
                    >
                      <DeleteIcon style={{ color: 'black' }} />
                    </span>
                    <span
                      className="update-icon text-green-500 cursor-pointer"
                      onClick={() => handleUpdateFile(index)}
                    >
                      <EditIcon style={{ color: 'black' }} />
                    </span>
                  </div>
                </li>
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
