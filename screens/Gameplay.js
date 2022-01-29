import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Gameplay = () => {
  const navigation = useNavigation();
  const [board, setBoard] = useState([
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"],
  ]);

  const [xturn, setXturn] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/gridLines.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {board.map((row, r) => {
          return (
            <View style={styles.row} key={r}>
              {
                row.map((square, s) => {
                  return (
                    <TouchableOpacity
                      style={styles.square}
                      key={s}
                      onPress={() => handleTurn(r, s)}
                    >
                      <Text style={styles.buttonText}>{board[r][s]}</Text>
                    </TouchableOpacity>
                  ); // end inner return
                }) // end innder map args
              }
            </View> //close "row"
          );
        })}
      </ImageBackground>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("TitleScreen")}
        >
          <Text style={styles.buttonText}>QUIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function handleTurn(row, square) {
    console.log(row, square);
    setBoard([...board], (board[row][square] = xturn ? "X" : "O"));

    setXturn(!xturn);
    // console.log(xturn);
  }
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
  square: {
    backgroundColor: "gray",
    margin: 20,
    padding: 20,
    width: 75,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
