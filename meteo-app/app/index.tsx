import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './index.style';
import { Home } from "@/pages/Home/Home";
import {ImageBackground} from "react-native";
// @ts-ignore
import backgroundImg from "@/assets/images/background.png";
// @ts-ignore
import AlataRegular from '@/assets/fonts/Alata-Regular.ttf'
import { useFonts } from 'expo-font';
import {NavigationContainer, NavigationIndependentTree} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Forecast} from "@/pages/Forecast/Forecast";

// Creation de la pile de routes
const Stack = createNativeStackNavigator();

export default function Index() {

    // Chargement de la font
    const [isFontLoaded] = useFonts({
        "Alata-Regular": AlataRegular
    });

  return (
      <NavigationIndependentTree>
        <NavigationContainer >
              <ImageBackground
                  source={backgroundImg}
                  style={s.img_background}
                  imageStyle={s.img} // style sur l'image directement
              >
                  <SafeAreaProvider>
                      <SafeAreaView style={s.container}>
                          {isFontLoaded ? (
                              <Stack.Navigator
                                  initialRouteName="Home"
                                  screenOptions={{
                                      headerShown: false, // Supprime l'en-tête par défaut
                                      contentStyle: {
                                          backgroundColor: 'transparent', // Supprime le fond des écrans
                                      },
                                  }}
                              >
                                  <Stack.Screen name="Home" component={Home}/>
                                  <Stack.Screen name="Forecast" component={Forecast}/>
                              </Stack.Navigator>
                          )  : null}
                      </SafeAreaView>
                  </SafeAreaProvider>
              </ ImageBackground>
        </NavigationContainer>
      </NavigationIndependentTree>

  );
}
