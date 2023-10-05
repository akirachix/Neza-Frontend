import { BASE_URL } from "../config";

interface UsersData {
    username: string;
    email: string;
    password: string;
    org_type: string;
    website: string;
    phone_number:string;
  }


export const signup = async (userData: UsersData) => {
    const url = `${BASE_URL}users/`
    
    try {
      const response = await fetch(url, {
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

    };
}
export const getUserDetails= async()=>{
        const url ='api/profile'
        try{
            const response = await fetch(url)
            const result = await response.json();
            return result;
        }
        catch (error: any) {
          return error.message;
        }

}

interface LoginData {
    username: string;
    password: string;
}
  
export const loginUser = async (loginData: LoginData) => {
    const url = `/api/login/`

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };


  interface MapData {
    prediction: string;
}
  
export const getLocations = async (prediction : MapData) => {
    const url = `https://4912-2c0f-fe38-2240-3ea6-b2b8-fa3b-89ad-7933.ngrok-free.app/api`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prediction),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };