//stack
import React from "react";
import DemoProductView from "./views/DemoProductView";
import DetailsScreenView from "./views/DetailsScreenView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DemoProductView"
          component={DemoProductView}
        ></Stack.Screen>
        <Stack.Screen
          name="DetailsScreenView"
          component={DetailsScreenView}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
