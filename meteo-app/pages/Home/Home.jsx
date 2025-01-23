import { s } from './Home.style';
import {Text, View} from "react-native";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import {useEffect, useState} from "react";
import {MeteoAPI} from "@/api/meteo";
import {MeteoBasic} from "@/components/MeteoBasic/MeteoBasic";
import {getWeatherInterpretation} from "@/services/meteo-service";

export function Home() {

    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();
    const [city, setCity] = useState();
    const currentWeather = weather ?.current_weather;

    useEffect(() => {
        getUserCoords();
    }, []);

    useEffect(() => {
        if (coords) {
            fetchWeather(coords);
            fetchCity(coords);
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

    /**
     * Permet de récupérer la ville
     * @param coordinates
     * @returns {Promise<void>}
     */
    async function fetchCity(coordinates) {
        // Appel classe meteo.js
        const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
        setCity(cityResponse);
    }



    return currentWeather ? (
        <>
            <View style={s.meteo_basic} >
                <MeteoBasic
                    temperature = {Math.round(currentWeather?.temperature)}
                    city = {city}
                    interpretation = {getWeatherInterpretation(currentWeather.weathercode)}
                />
            </View>
            <View style={s.searchbar} >

            </View>
            <View style={s.meteo_advanced}>

            </View>
        </>
    ) : null;
}