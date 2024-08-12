import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CirclePress = () => {
  const [circleAdd, setcircleAdd] = useState([]);

  const CirclePressFun = () => {
    setcircleAdd([...circleAdd, { id: circleAdd.length }]);
  };
  const toggleCircleColor = (id) => {
    const newCircleAdd = circleAdd.map((circle) =>
      circle.id === id ? { ...circle, pressed: !circle.pressed } : circle
    );
    setcircleAdd(newCircleAdd);
    console.log("id", newCircleAdd);
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.CirclePress}
        onPress={() => CirclePressFun()}
      >
        <Text>CircleOnPress </Text>
      </TouchableOpacity>
      <Text>{circleAdd.length}</Text>
      {circleAdd.map((item) => (
        <TouchableOpacity
       
          onPress={() => toggleCircleColor(item.id)}
        >
          <View
            style={[styles.CircleAdd, item.pressed && styles.CirclePressed]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CirclePress;

const styles = StyleSheet.create({
  CirclePress: {
    width: 100,
    height: 50,
    backgroundColor: "#33E293",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  CircleAdd: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#33E293",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  CirclePressed: {
    backgroundColor: "#FF5733",
  },
});
