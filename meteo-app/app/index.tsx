import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Home} from "@/pages/Home/Home";

export default function Index() {
  return (
      <SafeAreaProvider>
          <SafeAreaView>
              <Home />
          </SafeAreaView>
      </SafeAreaProvider>
  );
}
