import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/routes';
import { COLOR_DEFAULT } from './src/style/MainStyle';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR_DEFAULT} style="auto" />
      <MyStack></MyStack>
    </NavigationContainer>
  );
}