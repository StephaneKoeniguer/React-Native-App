import { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

    const refCardExpirationInput = useRef();
    const refCodeInput = useRef();

    function onCardNumberChange(text: string | any[]) {
        if (text.length >= 16) {
            // @ts-ignore
            refCodeInput.current.focus();
        }
    }

    function onCodeChange(text: string | any[]) {
        if (text.length >= 3) {
            // @ts-ignore
            refCardExpirationInput.current.focus();
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={s.main}>
                <TextInput
                    onChangeText={onCardNumberChange}
                    placeholder="Numéro de carte"
                />
                <TextInput
                    // @ts-ignore
                    ref={refCodeInput}
                    onChangeText={onCodeChange}
                    placeholder="Code secret"
                />

                <TextInput
                    // @ts-ignore
                    ref={refCardExpirationInput}
                    placeholder="Date d'expiration"
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );

}

const s = StyleSheet.create({
    main: { flex: 1, justifyContent: "center", alignItems: "center" },
});
