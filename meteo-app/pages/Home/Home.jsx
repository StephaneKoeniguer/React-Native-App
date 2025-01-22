import { s } from './Home.style';
import {Text, View} from "react-native";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import {useEffect, useState} from "react";
import {MeteoAPI} from "@/api/meteo";
import {MeteoBasic} from "@/components/MeteoBasic/MeteoBasic";

export function Home() {

    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();

    useEffect(() => {
        getUserCoords();
    }, []);

    useEffect(() => {
        if (coords) {
            fetchWeather(coords);
        }
    }, [coords]);

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

    /**
     * Permet de récupérer la météo
     * @param coordinates
     * @returns {Promise<void>}
     */
    async function fetchWeather(coordinates) {
        // Appel classe meteo.js
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        setWeather(weatherResponse);

    }

    return (
        <>
            <View style={s.meteo_basic} >
                <MeteoBasic />
            </View>
            <View style={s.searchbar} >

            </View>
            <View style={s.meteo_advanced}>

            </View>
        </>
    );
}