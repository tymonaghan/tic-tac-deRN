import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Gameplay = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/gridLines.png")}
      ></Image>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("TitleScreen")}
      >
        <Text style={styles.buttonText}>QUIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Gameplay;

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
