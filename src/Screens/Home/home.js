import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 20 }}>
        <View style={{ backgroundColor: "#680747" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Circle")}
          >
            <Text>CirclePress</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#680747" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Add&Remove")}
          >
            <Text>Add&Remove</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ gap: 20 }}>
        <View style={{ backgroundColor: "#680747" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Map")}
          >
            <Text>GoogleMap</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#680747" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Validation")}
          >
            <Text>Validation</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#680747" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("FetchData")}
          >
            <Text>FetchData</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "#c3195d",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 30,
  },
});
