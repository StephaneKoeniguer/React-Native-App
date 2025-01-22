import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './index.style';
import { Home } from "@/pages/Home/Home";
import {ImageBackground} from "react-native";
// @ts-ignore
import backgroundImg from "@/assets/images/background.png";
// @ts-ignore
import AlataRegular from '@/assets/fonts/Alata-Regular.ttf'
import { useFonts } from 'expo-font';

export default function Index() {

    // Chargement de la font
    const [isFontLoaded] = useFonts({
        "Alata-Regular": AlataRegular
    });

  return (
      <ImageBackground
          source={backgroundImg}
          style={s.img_background}
          imageStyle={s.img} // style sur l'image directement
      >
          <SafeAreaProvider>
              <SafeAreaView style={s.container}>
                  {isFontLoaded ? <Home /> : null}
              </SafeAreaView>
          </SafeAreaProvider>
      </ ImageBackground>
  );
}
