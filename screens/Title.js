import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const TitleScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.textelement}>Welcome to Tic-Tac-deRN</Text>
      <Text style={styles.textelement}>The RN is for "React Native"</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Gameplay")}
      >
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  textelement: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
  },
});
