import { token ,BASE_URL} from "@/config"



export const getStageTracking= async()=>{
    const url ='api/get-organizations'
    try{
        const response = await fetch('https://nezabackend-2a2e9782ab7f.herokuapp.com/api/stagetracking')
        const result = await response.json();
        return result;
    }
    catch(error:any){
        return error.message
    }
}

  export const getFiles= async()=>{
    const url = '/api/get-files';
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
}

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
  export const uploadfile= async (userData: FilesData) => {
    const url = './api-post-files';
    try {
      const response = await fetch (url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };