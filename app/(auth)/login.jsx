import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text>{`Create \nAccount`}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper:{
        height: 200,
        backgroundColor: '#75756bff'
    }
})
export default LoginPage;
