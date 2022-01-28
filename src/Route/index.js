import React from "react";
import Home from "../screens/Home";
import Recorder from "../screens/Recorder";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Pedalada" }}
        />
        <Stack.Screen name="Recorder" component={Recorder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
