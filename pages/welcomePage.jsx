import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
const WelcomePage = () => {
  const image = require("../assets/b.png");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.section1}>
        <View style={styles.overlay}>
          <Text style={styles.mainText}>
            {`Start a new \nSocial adventure`}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.section2}>
        <Text style={styles.footerText}>
          {`Get involved with people and events \naround you`}
        </Text>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText} >Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:"center", alignItems:"flex-end"}}>
          <View style={styles.signUp}>
            <Text style={{fontFamily:'poppinsL'}}>Or Create Account</Text>
            <Fontisto name="arrow-right-l" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  section1: {
    width: "100%",
    height: 650,
  },
  section2: {
    width: "100%",
    backgroundColor: "lightgray",
    height: 350,
    borderTopRightRadius: 50,
    zIndex: 1,
    bottom: 45,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(00,0,0,0.7)",
    padding: 20,
  },
  mainText: {
    fontSize: 30,
    color: "#ddd",
    // fontWeight: "bold",
    fontFamily: "poppinsR",
  },
  footerText: {
    fontSize: 18,
    color: "Black",
    fontFamily:"poppinsR"
  },
  loginBtn:{
    backgroundColor: "rgba(150, 58, 70, 1)",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    
  },
  loginBtnText:{
    textAlign: "center",
    fontSize: 18,
    fontFamily:"poppinsL"
  },
  signUp:{
    flexDirection: 'row',
    justifyContent : "space-between",
    alignItems: 'center',
    width: 180,
    marginTop: 10,
    


  }
});
export default WelcomePage;
