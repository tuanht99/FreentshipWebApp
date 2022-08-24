// Import mock screens
import Infor from '../views/Infor';
import FavoriteStore from '../views/FavoriteStore';
import ComingSoon from '../views/ComingSoon';
// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;

