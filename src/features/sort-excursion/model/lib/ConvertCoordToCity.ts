export const ConvertCoordToCity = async (latitude: number, longitude: number): Promise<string | undefined> => {
    try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );

        if (response.ok) {
          const data = await response.json();
          return data.address.city
        } else {
          return undefined
        }
    } catch (error) {
        return undefined
    }
} 