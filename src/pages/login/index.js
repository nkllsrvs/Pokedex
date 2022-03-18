import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { styles, COLORS } from '../../style/MainStyle';
import * as Animatable from 'react-native-animatable';
import registerStyle from '../register/componentStyle';

export default function LoginScreen({ navigation }) {
  //#region States
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [messageEmail, setMessageEmail] = useState("E-mail obrigatório");

  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [messagePassword, setMessagePassword] = useState("Senha obrigatória");
  //#endregion

  //#region Effects
  useEffect(() => {
    setValidEmail(!email.length > 0);
    setMessageEmail(!email.length > 0 ? "E-mail obrigatório" : "");
  }, [email]);
  useEffect(() => {
    setValidPassword(!password.length > 0);
    setMessagePassword(!password.length > 0 ? "Senha obrigatória" : "");
  }, [password]);
  //#endregion

    return (
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Bem-vindo(a)!</Text>
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          delay={500}
          style={styles.containerForm}
        >
          <View>
            <Text style={styles.title}>E-mail:</Text>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="E-mail..."
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TouchableOpacity disabled={true}>
                <Ionicons
                  name={validEmail ? "alert-circle" : "checkmark-circle"}
                  style={styles.icon}
                  size={25}
                  color="#a1a1a1"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.smallText}>{messageEmail}</Text>
          </View>
          <View>
            <Text style={styles.title}>Senha</Text>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="Senha..."
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                <Ionicons
                  name={!hidePass ? "eye-off" : "eye"}
                  style={styles.icon}
                  size={25}
                  color="#a1a1a1"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.smallText}>{messagePassword}</Text>
          </View>
          <View style={styles.containerColumn}>
            <Text style={styles.smallText}>
              Não tem login? Clique em Registrar e cadastre-se!
            </Text>
          </View>
          <View style={styles.containerColumn}>
            <TouchableOpacity
              style={[styles.button, registerStyle.button]}
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { position: "relative", margin: "5%" }]}
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
}