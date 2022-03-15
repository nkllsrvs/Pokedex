import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-web';

export default function LoginScreen() {
    return(
    <View style>
      <StatusBar style="auto" />
        <TextInput></TextInput>
    </View>
    )
}