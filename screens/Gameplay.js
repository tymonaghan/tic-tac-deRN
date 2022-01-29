import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const Gameplay = () => {
  const navigation = useNavigation();
  const [board, setBoard] = useState([
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"],
  ]);

  const [xturn, setXturn] = useState(true);
  const [victor, declareVictor] = useState(null);

  useLayoutEffect(() => {
    victor
      ? console.log(`game over: ${victor} wins`)
      : console.log("game start");
  }, [victor]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/gridLines.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.textelement}>
          {victor ? `${victor} wins!` : `It is ${xturn ? "X" : "O"}'s turn`}
        </Text>
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
                      <Text style={styles.squareText}>{board[r][s]}</Text>
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
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>Reset Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function handleTurn(row, square) {
    // console.log(row, square);
    if (board[row][square] !== "X" && board[row][square] !== "O") {
      setBoard([...board], (board[row][square] = xturn ? "X" : "O"));
      checkForWin();
      setXturn(!xturn);
    }
    // console.log(xturn);
  }

  function checkForWin() {
    const playerToken = xturn ? "X" : "O";
    const columnsAndDiagonals = [
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][2], board[2][0]],
    ];

    board.map((row, r) => {
      if (row.every((element) => element === playerToken)) {
        declareVictor(playerToken);
      }
    });

    columnsAndDiagonals.map((row, r) => {
      if (row.every((element) => element === playerToken)) {
        declareVictor(playerToken);
      }
    });
  }

  function reset() {
    setBoard([
      ["0,0", "0,1", "0,2"],
      ["1,0", "1,1", "1,2"],
      ["2,0", "2,1", "2,2"],
    ]);
    setXturn(true);
  }
};

export default Gameplay;

const styles = StyleSheet.create({
  header: {
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#cc3333",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 12,
  },
  textelement: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
  squareText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
