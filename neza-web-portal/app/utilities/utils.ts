// utils.js
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
export const uploadfile = async (file: string | Blob) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/post-files', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('File upload failed.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('File upload failed.');
  }
};
