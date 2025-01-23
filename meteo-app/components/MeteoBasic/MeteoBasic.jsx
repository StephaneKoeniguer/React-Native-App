import { s } from './MeteoBasic.style';
import {TouchableOpacity, View} from "react-native";
import {Txt} from "../Txt/Txt";
import {Image} from "react-native";
import {Clock} from "@/components/Clock/Clock";

export function MeteoBasic({ onPress, temperature, city, interpretation}) {
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>

            <Txt>{city}</Txt>
            <Txt style={s.weather_label}>{interpretation.label}</Txt>


            <View style={s.temperature_container}>
                <TouchableOpacity onPress={onPress}>
                    <Txt style={s.temperature}>{temperature}°</Txt>
                </TouchableOpacity>
                <Image style={s.image} source={interpretation.image} />
            </View>
        </>
    )
}