import { useState } from 'react';
import { signup } from '../utilities/utils';

interface UsersData {
  username: string;
  email: string;
  password: string;
  org_type: string;
  website: string;
  phone_number:string;
}

const useSignup = (initialUserData: UsersData) => {
  const [user, setUser] = useState<UsersData>(initialUserData);

  const handleSignup = async () => {
    try {
      const response = await signup(initialUserData)
      console.log({response});
      setUser(response)

}

 catch (error) {
  console.error('Error creating user:', error);
};
}
return { user, handleSignup };
}
export default useSignup;