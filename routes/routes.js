import React from 'react';
import WelcomeScreen from '../src/pages/welcome';
import LoginScreen from '../src/pages/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { COLOR_DEFAULT } from '../src/style/MainStyle';
import RegisterScreen from '../src/pages/register';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      </>
    );
  }

export default MyStack;