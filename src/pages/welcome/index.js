import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyStack from '../../../routes/routes';

export default function WelcomeScreen({ navigation }) {
    return(
    <View style>
      <Text> Welcome! </Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text>login</Text></TouchableOpacity>
    </View>
    )
}