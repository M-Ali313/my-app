import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomePage from "./pages/welcomePage";
import { useFonts } from "expo-font";

export default function App() {
  const [loding, error] = useFonts({
    poppinsB: require("./assets/fonts/Poppins-Bold.ttf"),
    poppinsR: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsL: require("./assets/fonts/Poppins-Light.ttf")

  });
  if (!loding) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Loding...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <WelcomePage />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
