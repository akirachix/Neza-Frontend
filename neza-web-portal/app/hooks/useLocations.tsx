export async function fetchLocationData() {
  try {
    const response = await fetch('https://nezabackend-2a2e9782ab7f.herokuapp.com/api/locations/');
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

export async function fetchPercentageData() {
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
