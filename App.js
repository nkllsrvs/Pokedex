import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/routes';
import { COLORS } from './src/style/MainStyle';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.default} style="auto" />
      <MyStack></MyStack>
    </NavigationContainer>
  );
}