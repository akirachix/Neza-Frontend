import React, { useEffect, useState } from 'react';

interface FileContentModalProps {
  fileHash: string;
  onClose: () => void;
}

function FileContentModal({ fileHash, onClose }: FileContentModalProps) {
  const [fileData, setFileData] = useState<any | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getFileData?fileHash=${fileHash}`);
        const data = await response.json();
        setFileData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [fileHash]);

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {fileData ? (
          <pre>{JSON.stringify(fileData, null, 2)}</pre>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default FileContentModal;
