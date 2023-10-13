import { useState, useEffect } from 'react';
import { getLocations } from '../utilities/utils';

const useFetchLocationData = () => {
  const [locationData, setLocationData] = useState<any>(null);
  const fetchData = async () => {
    const response = await getLocations()
    setLocationData(response)
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { locationData, fetchData };
};

export { useFetchLocationData };
