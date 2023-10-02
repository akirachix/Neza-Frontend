import { useEffect, useState } from "react";
import { getLocations } from "@/app/utilities/utils";

interface MapData {
location:string;
longitude:number;
latitude:number
immunization_rate: number;
}
const useGetLocations = ()=>{
  const [locations, setLocations] = useState<MapData[]>([]);
  useEffect(()=>{
    (async()=>{
      const location = await getLocations();
      setLocations(location);
      // console.log('Filtered CHVs:', location);
    })();
  },[])
  return {locations}
}
export default useGetLocations;