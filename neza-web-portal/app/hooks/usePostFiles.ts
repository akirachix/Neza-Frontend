import { useState } from 'react';
import { uploadfile } from '../utilities/utils';

interface UploadResponse {
  success: boolean;
  message: string;
}

const usePostFiles = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postFiles = async (file: File): Promise<UploadResponse> => {
    setLoading(true);

    const response = await uploadfile(file);

    setLoading(false);
    setSuccess(response.success); 

    return { success: response.success, message: response.message };
  };

  return { loading, success, postFiles };
};

export default usePostFiles;
