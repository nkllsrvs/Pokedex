import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../src/pages/welcome';
import LoginScreen from '../src/pages/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../src/pages/register';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;