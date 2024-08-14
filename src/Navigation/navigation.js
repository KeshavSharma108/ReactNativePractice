import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AddRemove, CirclePress, GoogleMap, Home, Validation } from "../Screens";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Circle"} component={CirclePress} />
        <Stack.Screen name={"Add&Remove"} component={AddRemove} />
        <Stack.Screen name={"Map"} component={GoogleMap} />
        <Stack.Screen name={"Validation"} component={Validation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
