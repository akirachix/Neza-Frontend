'use client';
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { v4 as uuidv4 } from 'uuid';
import { MD5 } from 'crypto-js';
import Papa from 'papaparse';
import MissingColumnsModal from '../modals/MissingColumnsModal';
import UpdateFileModal from '../modals/UpdateFileModal';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useGetFiles from '../hooks/useGetFiles';
import { uploadfile } from '../utilities/utils';

function DataUpload() {
  const { files } = useGetFiles();
  const hashFiles = Array.isArray(files) ? files.map((file) => file.file_hash) : [];

  const [selectedFile, setSelectedFile] = useState<File>();
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; timestamp: string; file_hash: string; }[]>([]);
  const [fileContents, setFileContents] = useState<string[]>([]);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [updateIndex, setUpdateIndex] = useState<number>(-1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [showMissingColumnsModal, setShowMissingColumnsModal] = useState<boolean>(false);
  const [missingColumns, setMissingColumns] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; 

  const totalFiles = files.length;
  const totalPages = Math.ceil(totalFiles / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const reversedFiles = [...files].reverse();
  const filesToDisplay = reversedFiles.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const timestamp = new Date().toLocaleString();
      const fileHash = MD5(file.name + uuidv4()).toString();
      setUploadedFiles([{ name: file.name, timestamp, file_hash: fileHash }, ...uploadedFiles]);
      setFileContents([file.name, ...fileContents]);

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
      let csvData = '';
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          csvData = e.target.result.toString();
          if (fileContents.includes(csvData)) {
            removeFileFromList(selectedFile.name);
            setErrorMessage('File with the same content already uploaded.');
            return;
          }

          const { data } = Papa.parse(csvData, { header: true });
          const requiredColumns = ['location', 'sources of water', 'proximity to industries', 'number of garages in an area','women and children population','past cases of lead poisoning','presence of open sewage','proximity to dumpsite'];

          const missingCols = requiredColumns.filter(
            (column) => !data[0] || !Object.keys(data[0]).includes(column)
          );

          if (missingCols.length > 0) {
            setMissingColumns(missingCols);
            setShowMissingColumnsModal(true);
            removeFileFromList(selectedFile.name);
          } else {
            try {
              const response = await uploadfile(selectedFile);

              if (response.success) {
                setSuccessMessage('File uploaded successfully.');
              } else {
                setErrorMessage('File upload failed.');
              }
            } catch (error) {
              setErrorMessage('File upload failed.');
            }
          }
        }
      };

      reader.readAsText(selectedFile);
    }
  };

  const removeFileFromList = (fileName: string) => {
    const index = uploadedFiles.findIndex((file) => file.name === fileName);
    if (index !== -1) {
      const updatedUploadedFiles = [...uploadedFiles];
      updatedUploadedFiles.splice(index, 1);
      setUploadedFiles(updatedUploadedFiles);
    }
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    setUpdateIndex(-1);
  };

  const handleUpdateModalUpdate = (updatedData: { name: string; timestamp: string }) => {
    if (updateIndex !== null) {
      const updatedUploadedFiles = [...uploadedFiles];
      updatedUploadedFiles[updateIndex] = {
        ...updatedData,
        file_hash: uploadedFiles[updateIndex].file_hash
      };
      setUploadedFiles(updatedUploadedFiles);
    }
    setShowUpdateModal(false);
    setUpdateIndex(-1);
  };

  const handleMissingColumnsModalClose = () => {
    setShowMissingColumnsModal(false);
    setMissingColumns([]);
  };

  return (
    <div className="flex flex-col md:flex-row data-upload-container">
      <div className="md:w-1/2 md:pl-[119px] upload-files">
        <h1 className="font-nunito font-semibold text-3xl sm:text-3xl md:text-4xl mt-[65px]">
          Data Management
        </h1>

        <h2 className="font-bold text-2xl mt-[80px]">Uploaded Files</h2>
        <ol>
          {filesToDisplay.map((file, index) => (
            <li key={index} className="flex items-center">
              {index + 1 + startIndex}. {file.file_hash}
              <div className="icon-container ml-2">

              </div>
            </li>
          ))}
        </ol>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          className="mt-4"
        />
      </div>

      <div className="main-content w-full md:w-[20%]">
        <div className="mt-[200px] ml-30 upload-header ">
          <h1 className="font-bold text-2xl">Upload Files</h1>
          <p>Only Uploaded csv files with columns such as Location, Sources of water, Proximity to industries, Number of garages in an area, Proximity to dumpsite, Presence of open sewage, and Past cases of lead poisoning are accepted.</p>

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
                  className="hidden" />
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
        
        {showUpdateModal && updateIndex !== -1 && (
          <UpdateFileModal
            fileData={uploadedFiles[updateIndex]}
            onClose={handleUpdateModalClose}
            onUpdate={handleUpdateModalUpdate}
          />
        )}

        <MissingColumnsModal
          isOpen={showMissingColumnsModal}
          missingColumns={missingColumns}
          onClose={handleMissingColumnsModalClose} />
      </div>
    </div>
  );
}

export default DataUpload;
