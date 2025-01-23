import backgroundImg from "../../assets/images/background.png";
import {s} from "./Container.style";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ImageBackground} from "react-native";

export function Container({children}) {
    return (
        <ImageBackground
        source={backgroundImg}
        style={s.img_background}
        imageStyle={s.img} // style sur l'image directement
        >
            <SafeAreaProvider>
                <SafeAreaView style={s.container}>{children}</SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    )
}