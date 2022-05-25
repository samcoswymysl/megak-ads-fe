export const geocode = async (address: string): Promise<{lat: number, lon: number} | null> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`)
    const geoData = await geoRes.json();

    if(geoData.length === 0){
        return null
    }

    const lat = parseFloat(geoData[0].lat)
    const lon = parseFloat(geoData[0].lon)
    return {
        lat, lon
    }

}
