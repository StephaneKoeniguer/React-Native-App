import { Stack } from "expo-router";
import {StatusBar} from "react-native";

export default function RootLayout() {
  return (
      <>
        {/* Change le style de la barre d'état */}
        <StatusBar barStyle="dark-content"/>
        <Stack
            screenOptions={{
              headerShown: false, // Cache le header
            }}
        />
      </>
  );
}