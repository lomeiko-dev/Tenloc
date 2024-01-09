export const ConvertCoordToCity = async (latitude: number, longitude: number): Promise<string | undefined> => {
    try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );

        if (response.ok) {
          const data = await response.json();
          const cityName = data.address.city
          return cityName
        } else {
          return undefined
        }
    } catch (error) {
        return undefined
    }
} 