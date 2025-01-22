import { StyleSheet} from "react-native";


export const s = StyleSheet.create({
    clock: {
        alignItems: "flex-end"
    },
    weather_label:{
        alignSelf: "flex-end",
        fontSize: 20
    },
    image: {
         height: 90,
        width:90,
    },
    temperature_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    temperature: {
        fontSize: 150
    }


})