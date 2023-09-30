import { useState } from 'react';
import { uploadfile } from '@/app/utilities/utils';
interface FilesData {
   
    location: string;
    sources_of_water: number;
    proximity_to_industries: string;
    number_of_garages_in_area: number;
    proximity_to_dumpsite: number;
    presence_of_open_sewage: number;
    past_cases_of_lead_poisoning: number;
    women_and_children_population: number;
  
  }
const useUploadFile = (initialUserData: FilesData) => {
  const [files, setFile] = useState<FilesData>(initialUserData);
  const handleUpload = async () => {
    try {
      const response = await uploadfile(initialUserData)
      console.log({response});
      setFile(response)
}
 catch (error) {
  console.error('Error creating user:', error);
};
}
return { files, handleUpload };
}
export default useUploadFile;







