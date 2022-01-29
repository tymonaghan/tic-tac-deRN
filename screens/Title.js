import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TitleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textelement}>Sup fam</Text>
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
  // button: {
  //   backgroundColor: "#0782F9",
  //   width: "60%",
  //   padding: 15,
  //   borderRadius: 10,
  //   alignItems: "center",
  // },
  textelement: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
