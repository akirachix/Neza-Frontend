import { useState } from 'react';
import {loginUser} from '../utilities/utils';     

interface LoginData {
  username: string;
  password: string;
}

const useLogin = (initialLoginData: LoginData) => {
  const [user, setUser] = useState<LoginData>(initialLoginData);

  const handleLogin = async () => {

      const response = await loginUser(initialLoginData)
      setUser(response)



}
return { user, handleLogin };
}
export default useLogin;
