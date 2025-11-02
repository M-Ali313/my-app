import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [loding, error] = useFonts({
    poppinsB: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsR: require("../assets/fonts/Poppins-Regular.ttf"),
    poppinsL: require("../assets/fonts/Poppins-Light.ttf"),
  });
  if (!loding) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Loding...</Text>
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
