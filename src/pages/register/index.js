import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import { FormInput } from '../../components/FormInput/index';

export default function RegisterScreen() {

    //#region State

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmTerms, setConfirmTerms] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const state = 'warning';

    //#endregion

    //#region Effects

    //#endregion

    //#region Functions  

    const confirmPasswordMatch = () => {
        password != confirmPassword ? setPasswordMatch(false) : setPasswordMatch(true);
    }

    const handleSubmit = () => {
        console.log('name: ', name);
        console.log('email: ', email);
        console.log('password: ', password);
        console.log('confirmPassword: ', confirmPassword);
        console.log('confirmTerms: ', confirmTerms);
    }

    //#endregion


    return (
        <View style={styles.page}>

            <StatusBar style="auto" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.h1}>
                        Crie sua conta
                    </Text>
                </View>
                <FormInput title='Nome' state='warning' />
                <TextInput
                    style={styles.inputFild}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"

                />
                <TextInput
                    style={styles.inputFild}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.inputFild}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                />
                <TextInput
                    style={styles.inputFild}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                />
                <View style={styles.agreeTerms}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setConfirmTerms}
                        value={confirmTerms}
                    />
                    <TouchableOpacity>
                        <Text style={styles.agreeTermsText} >I agree to the terms and conditions</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ccc',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
        shadowColor: "rgb(230, 230, 230)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    inputFild: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    agreeTerms: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    agreeTermsText: {
        fontSize: 10,
        color: '#ccc',
        margin: 10,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#f5dd4b',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f5dd4b',
    },
}


)