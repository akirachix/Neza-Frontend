import React from 'react';

type FileContentModalProps = {
  fileHash: string;
  fileContents: string[];
  onClose: () => void;
};

function FileContentModal({ fileHash, fileContents, onClose }: FileContentModalProps) {
  return (
    <div className="file-content-modal">
      <h2>File Contents</h2>
      <ul>
        {fileContents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default FileContentModal;
