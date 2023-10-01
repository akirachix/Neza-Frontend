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
    const url = `https://nezabackend-2a2e9782ab7f.herokuapp.com/api/users/`
    
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
    const url = `https://nezabackend-2a2e9782ab7f.herokuapp.com/api/login/`

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