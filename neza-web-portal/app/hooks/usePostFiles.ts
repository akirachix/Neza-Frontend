import { useState } from 'react';
import { uploadfile } from '../utilities/utils';



const usePostFiles = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postFiles = async (file: File)=> {
    setLoading(true);

    const response = await uploadfile(file);

    setLoading(false);
    setSuccess(response.success); 

  };

  return { loading, success, postFiles, Response };
};

export default usePostFiles;
