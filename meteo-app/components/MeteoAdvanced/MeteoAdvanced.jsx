import {s, StyleContainer, StyleLabel, StyleValue} from './MeteoAdvanced.style';
import {View} from "react-native";

export function MeteoAdvanced({dusk, dawn, wind}) {
    return (
        <View style={s.container}>
            <StyleContainer>
                <StyleValue>{dusk}</StyleValue>
                <StyleLabel>Aube</StyleLabel>
            </StyleContainer>
            <StyleContainer>
                <StyleValue>{dawn}</StyleValue>
                <StyleLabel>Crépuscule</StyleLabel>
            </StyleContainer>
            <StyleContainer>
                <StyleValue>{wind} km/h</StyleValue>
                <StyleLabel>Vent</StyleLabel>
            </StyleContainer>
        </View>
    );
}