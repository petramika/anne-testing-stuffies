import { useEffect, useState } from "react";

export const useGeolocation = (): { latitude: number, longitude: number} => {
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, [latitude, longitude]);

    return {
        latitude,
        longitude
    };
}