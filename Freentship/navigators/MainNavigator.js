import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from '../navigators/HomeNavigator';
import FoodView from '../views/FoodView';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Mai;" component={HomeNavigator} />
        <Stack.Screen name="Food" component={FoodView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
