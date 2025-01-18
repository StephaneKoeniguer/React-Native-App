import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
        container: {
            backgroundColor: "#F9F9F9",
            flex: 1,
            padding: 10,
        },
        header: {
            flex: 1,
        },
        main: {
            flex: 5,
        },
        footer: {
            height: 70,
            backgroundColor: 'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
        },
    carItem: {
          marginBottom: 20
    }
});
