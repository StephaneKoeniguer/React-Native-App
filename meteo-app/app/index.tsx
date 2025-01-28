import { Home } from "@/pages/Home/Home";
// @ts-ignore
import AlataRegular from '@/assets/fonts/Alata-Regular.ttf'
import { useFonts } from 'expo-font';
import {NavigationContainer, NavigationIndependentTree} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Forecast} from "@/pages/Forecast/Forecast";
import {useEffect} from "react";
import * as Device from "expo-device";
import {Platform} from "react-native";
import  * as Notifications from "expo-notifications";

// Creation de la pile de routes
const Stack = createNativeStackNavigator();

export default function Index() {

    // Chargement de la police
    const [isFontLoaded] = useFonts({
        "Alata-Regular": AlataRegular
    });


    async function subscribeToNotifications() {
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            // Demande de permissions si nécessaire
            if (existingStatus !== "granted") {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== "granted") {
                alert("Failed to get push token for push notification.");
                return;
            }

            // Récupération du token
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            // TODO: Envoyer le token au serveur pour gérer les notifications côté backend

        } else {
            alert("Must use physical device for push notifications.");
        }

        // Configuration pour Android
        if (Platform.OS === "android") {
            await Notifications.setNotificationChannelAsync("default", {
                name: "default",
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: "#FF231F7C",
            });
        }
    }


    useEffect(() => {
        Notifications.addNotificationResponseReceivedListener( response => {
            console.log("data", response.notification.request.content.data);
        })
        subscribeToNotifications();
    }, [])



  return (
      <NavigationIndependentTree>
        <NavigationContainer >
          {isFontLoaded ? (
              <Stack.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                      headerShown: false, // Supprime l'en-tête par défaut
                      animation: 'fade',
                      contentStyle: {
                          backgroundColor: 'transparent', // Supprime le fond par défault
                      },
                  }}
              >
                  <Stack.Screen name="Home" component={Home}/>
                  <Stack.Screen name="Forecast" component={Forecast}/>
              </Stack.Navigator>
          )  : null}
        </NavigationContainer>
      </NavigationIndependentTree>

  );
}
