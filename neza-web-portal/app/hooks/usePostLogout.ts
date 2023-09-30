import { postLogOut } from "../Utilities/utils";
import { useEffect, useState } from "react";

const usePostLogOut = () => {
    const [logOut, setLogOut] = useState<string>("");
  
    useEffect(() => {
      (async () => {
        const result = await postLogOut();
        setLogOut(result);
      })();
    }, []);
  
    return logOut;
  };

export default usePostLogOut;