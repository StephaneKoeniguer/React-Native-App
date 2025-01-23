import {StyleSheet, View} from "react-native";
import {Txt} from "@/components/Txt/Txt";

export const s = StyleSheet.create({

    container: {
            borderRadius: 15,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: "space-evenly",
            borderColor: 'white',
            borderWidth: 2,
            backgroundColor: 'rgba(0,0,0,0.26)',
        },
})

export function StyleLabel({children}) {
    return <Txt style={{fontSize: 15}}>{children}</Txt>;
}

export function StyleValue({children}) {
    return <Txt style={{fontSize: 20}}>{children}</Txt>;
}

export function StyleContainer({children}) {
    return <View style={{alignItems: 'center'}}>{children}</View>;
}