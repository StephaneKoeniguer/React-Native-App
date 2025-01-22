import { s } from './MeteoBasic.style';
import {View} from "react-native";
import {Txt} from "../Txt/Txt";
import {Image} from "react-native";

export function MeteoBasic() {
    return (
        <>
            <View style={s.clock}>
                <Txt>Clock</Txt>
            </View>

            <Txt>City</Txt>
            <Txt style={s.weather_label}>Label</Txt>

            <View style={s.temperature_container}>
                <Txt style={s.temperature}>3</Txt>
                <Image style={s.image} />
            </View>
        </>
    )
}