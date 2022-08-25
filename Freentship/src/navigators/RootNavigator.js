// Import mock screens
import Infor from '../views/Infor';
import FavoriteStore from '../views/FavoriteStore';
import ComingSoon from '../views/ComingSoon';
import Store from '../views/Store';
// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Thong tin TK">
        <Stack.Screen name="Thong tin TK" component={Infor} />
        <Stack.Screen name="FavoriteStore" component={FavoriteStore} />
        <Stack.Screen name="ComingSoon" component={ComingSoon} />

        <Stack.Screen name="Store" options={{
          // hidden navbar
          headerShown: false,
        }} component={Store} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

