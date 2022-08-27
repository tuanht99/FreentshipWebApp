import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from '../navigators/HomeNavigator';
import FoodView from '../views/FoodView';
import TryNewShopView from '../views/TryNewShopView';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={HomeNavigator} />
        <Stack.Screen name="Food" component={FoodView} />
        <Stack.Screen name="TryNewShop" component={TryNewShopView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
