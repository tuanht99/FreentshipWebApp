import { View, Text } from 'react-native'
import React from 'react'
import RootNavigator from './navigators/RootNavigator';
import LoginNavigator from './navigators/LoginNavigator';

export default function App() {
  return (
      <LoginNavigator />
  )
}