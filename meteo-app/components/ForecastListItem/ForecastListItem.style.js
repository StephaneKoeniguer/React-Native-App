import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    image: {
        height: 40,
        width: 40,
    },
    day: {
        fontSize: 20,
    },
    date: {
        fontSize: 20,
    },
    temperature: {
        width: 50,
        fontSize: 25,
        textAlign: 'right'
    }
})