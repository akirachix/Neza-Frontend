export const getFiles= async()=>{
    const url = '/api/get-files';
    try{
        const response = await fetch(url);
        const result = await response.json();
        console.log({result});
        
        return result
    }
    catch(error:any){
        return error.message
    }
}




// utils.ts
import axios from 'axios';

export const uploadfile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('https://nezabackend-2a2e9782ab7f.herokuapp.com/api/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('File upload failed.');
  }
};






