import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,Alert
} from "react-native";
 
export default function App() {
  const [number, Number] = useState("");
  const go="MOBILE  NUMBER"
  const name=Alert.alert("Welcome to our prototype app.\n This is version1.0");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/log2.png")} />
 
      <StatusBar style="auto" />
      
     
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          maxLength={10}
          keyboardType = 'numeric'
          placeholder={go}
          placeholderTextColor="black"
          secureTextEntry={true}
     
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>GET OTP</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
   
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#5EE6EB",
  },
});