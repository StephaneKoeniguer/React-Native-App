import { s } from './Home.style';
import {View} from "react-native";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import {useEffect, useState} from "react";

export function Home() {

    const [coords, setCoords] = useState();

    useEffect(() => {
        getUserCoords();
    }, []);

    /**
     * Permet de demander à l'utilisateur les coordonnées gps
     * @returns {Promise<void>}
     */
    async function getUserCoords() {
       let { status } =  await requestForegroundPermissionsAsync();
       if (status === 'granted') {
           const location = await getCurrentPositionAsync();
           setCoords({lat: location.coords.latitude, lng:  location.coords.longitude});
       } else {
           // Coordonnées de Paris par défault
           setCoords({lat: "48.85", lng: "2.35"})
       }
    }


    return <>
        <View style={s.meteo_basic}></View>
        <View style={s.searchbar}></View>
        <View style={s.meteo_advanced}></View>
    </>
}