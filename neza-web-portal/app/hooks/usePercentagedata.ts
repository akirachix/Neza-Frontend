import { useState, useEffect } from 'react';

const useFetchPercentageData = () => {
    const [percentageData, setPercentageData] = useState<any>(null);
    const fetchData = async () => {
      const response = await fetch('/response.json');
        setPercentageData(response);
      
    };
    useEffect(() => {
      fetchData();
    }, []);
  
    return { percentageData,  fetchData };
  };

  export {useFetchPercentageData };