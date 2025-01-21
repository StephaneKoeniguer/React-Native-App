import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './index.style';
import {Home} from "@/pages/Home/Home";
import {ImageBackground} from "react-native";
// @ts-ignore
import backgroundImg from "@/assets/images/background.png";

export default function Index() {
  return (
      <ImageBackground
          source={backgroundImg}
          style={s.img_background}
          imageStyle={s.img} // style sur l'image directement
      >
          <SafeAreaProvider style={s.container}>
              <SafeAreaView>
                  <Home />
              </SafeAreaView>
          </SafeAreaProvider>
      </ ImageBackground>
  );
}
