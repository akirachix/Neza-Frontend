'use client';
import React, { useState } from 'react';
import Papa from 'papaparse';
import MissingColumnsModal from '../modals/MissingColumnsModal';
import UpdateFileModal from '../modals/UpdateFileModal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DataUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; timestamp: string }[]>([]);
  const [fileContents, setFileContents] = useState<string[]>([]);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [updateIndex, setUpdateIndex] = useState<number>(-1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [showUploadedFiles, setShowUploadedFiles] = useState<boolean>(false);
  const [showMissingColumnsModal, setShowMissingColumnsModal] = useState<boolean>(false); 
  const [missingColumns, setMissingColumns] = useState<string[]>([]); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const timestamp = new Date().toLocaleString();
      setUploadedFiles([{ name: file.name, timestamp }, ...uploadedFiles]);
      setFileContents(['', ...fileContents]);

      setErrorMessage('');
      setSuccessMessage('');
    }
  };

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      if (!selectedFile.name.endsWith('.csv')) {
        removeFileFromList(selectedFile.name);
        setErrorMessage('Only CSV files are allowed.');
        return;
      }

      let csvData: string | undefined; 

      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          csvData = e.target.result.toString(); 
          if (fileContents.includes(csvData)) {
            removeFileFromList(selectedFile.name);
            setErrorMessage('File with the same content already exists.');
            return;
          }

          const { data } = Papa.parse(csvData, { header: true });

          const requiredColumns = [
            'Location',
            'Sources of water',
            'Proximity to industries',
            'Number of garages in an area',
            'Proximity to dumpsite',
            'Presence of open sewage',
            'Past cases of lead poisoning',
            'Women and children population',
          ];

          const missingCols = requiredColumns.filter(
            (column) => !data[0] || !Object.keys(data[0]).includes(column)
          );

          if (missingCols.length > 0) {
            setMissingColumns(missingCols);
            setShowMissingColumnsModal(true);
            removeFileFromList(selectedFile.name);
          } else {
            const newFileContents = [...fileContents];
            newFileContents[0] = csvData;
            setFileContents(newFileContents);

            setErrorMessage('');
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
    removeFileFromList(uploadedFiles[index].name);
  };

  const handleUpdateFile = (index: number) => {
    setUpdateIndex(index);
    setShowUpdateModal(true);
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    setUpdateIndex(-1);
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
    setUpdateIndex(-1);
  };

  const toggleUploadedFiles = () => {
    setShowUploadedFiles(!showUploadedFiles);
  };

  const handleMissingColumnsModalClose = () => {
    setShowMissingColumnsModal(false);
    setMissingColumns([]); 
  };

  return (
    <div className="flex flex-col md:flex-row data-upload-container">
      {/* <SideBar /> */}
      <div className="md-5  pl-[119px] upload-files md:w-1/2">
        <h1 className="font-nunito font-semibold text-3xl sm:text-3xl md:text-4xl mt-[65px]">Data Management</h1>

        <h2 className="font-bold text-2xl mt-[80px]">Selected Files</h2>
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

      <div className="main-content w-[20%]">
        <div className="mt-[200px] ml-30 upload-header ">
          <h1 className="font-bold text-2xl">Upload Files</h1>
          <p>Only Uploaded csv files with columns such as Location, 
          Sources of water, Proximity to industries, Number 
          of garages in an area, Proximity to dumpsite, 
          Presence of open sewage, and Past cases of lead poisoning are accepted
          </p>

          <div className="container-for-button-container ">
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
                onClick={handleUploadButtonClick}
                className="w-40 h-14 bg-white text-black border-2 border-green-500 rounded-lg mt-10 pl-2"
              >
                Upload Files
              </button>
            </div>
          </div>
          <button
            onClick={handleUpload}
            className="ml-[85px] w-[150px] h-[50px] text-white px-4 py-3 rounded-md mt-2 pr-5 font-nunito bg-neza-green-200 bg-[#2DCD1F]"
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
        <MissingColumnsModal
          isOpen={showMissingColumnsModal}
          missingColumns={missingColumns}
          onClose={handleMissingColumnsModalClose}
        />
      </div>
    </div>
  );
};

export default DataUpload;
