import { StyleSheet} from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 115,
        borderRadius: 13,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    text: {
        fontSize: 25
    },
    img: {
        height: 25,
        width: 25,

    }

})