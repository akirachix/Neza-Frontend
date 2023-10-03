import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../config';

interface UploadResponse {
  success: boolean;
  message: string;
}

const usePostFiles = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const postFiles = async (file: File): Promise<UploadResponse> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post<UploadResponse>(`${BASE_URL}/api/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLoading(false);
      setSuccess(response.data.success);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError('An error occurred while uploading the file.');
      return { success: false, message: 'An error occurred while uploading the file.' };
    }
  };

  return { loading, error, success, postFiles };
};

export default usePostFiles;
