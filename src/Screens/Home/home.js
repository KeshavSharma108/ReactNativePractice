import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Circle")}
      >
        <Text>CirclePress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Add&Remove")}
      >
        <Text>Add&Remove</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Map")}
      >
        <Text>GoogleMap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Validation")}
      >
        <Text>Validation</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
