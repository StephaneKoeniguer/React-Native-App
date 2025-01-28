import {ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Index.style";
import * as ImagePicker from "expo-image-picker";
import {useState} from "react";

export default function Index() {

    const [ imageList, setImageList] = useState([]);

    async function pickImageAsync() {
       const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
          });

       if (result.canceled) {
           alert("Aucune image sélectionnée")
       } else  {
           // @ts-ignore
           setImageList([...imageList, result.assets[0].uri]);
       }

    }

  return (
      <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
              <Text style={s.title}>Mes photos préférées</Text>
              <View style={s.body}>
                  <ScrollView>
                      {imageList.map((image, i) => (
                          <Image
                              style={s.image}
                              key={image + i}
                              source={{ uri: image }}
                          />
                      ))}
                  </ScrollView>

              </View>
              <View style={s.footer}>
                  <TouchableOpacity style={s.btn} onPress={pickImageAsync}>
                      <Text style={s.btnTxt}>Ajouter photo</Text>
                  </TouchableOpacity>
              </View>
          </SafeAreaView>
      </SafeAreaProvider>
  );
}
