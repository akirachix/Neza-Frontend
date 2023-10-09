import { BASE_URL } from "@/app/config";

export async function locationData() {
    try {
      const response = await fetch(`${BASE_URL}locations/`);
      if (!response.ok) {
        throw new Error('Failed to fetch location data');
      }
      const locationData = await response.json();
      return locationData;
    } catch (error) {
      console.error('Error fetching location data:', error);
      throw error;
    }
  }
  
  export async function percentageData() {
    try {
      const response = await fetch('/response.json');
      if (!response.ok) {
        throw new Error('Failed to fetch percentage data');
      }
      const percentageData = await response.json();
      return percentageData;
    } catch (error) {
      console.error('Error fetching percentage data:', error);
      throw error;
    }
  }
  