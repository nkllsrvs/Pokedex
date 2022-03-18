import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Switch, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles, COLORS } from '../../style/MainStyle';
import { Ionicons } from '@expo/vector-icons'
import Modal from '../../components/Modal';


export default function RegisterScreen() {
  //#region State

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);
  const [messageName, setMessageName] = useState("Nome obrigatório");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [messageEmail, setMessageEmail] = useState("E-mail obrigatório");

  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [messagePassword, setMessagePassword] = useState("Senha obrigatória");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);
  const [messageConfirmPassword, setMessageConfirmPassword] = useState(
    "Confirmação de senha obrigatória"
  );

  const [confirmTerms, setConfirmTerms] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const state = "warning";

  //#endregion

  //#region Effects
  useEffect(() => {
    setValidName(!name.length > 0);
    setMessageName(!name.length > 0 ? "Nome obrigatório" : "");
  }, [name]);
  useEffect(() => {
    setValidEmail(!email.length > 0);
    setMessageEmail(!email.length > 0 ? "E-mail obrigatório" : "");
  }, [email]);
  useEffect(() => {
    setValidPassword(!password.length > 0);
    setMessagePassword(!password.length > 0 ? "Senha obrigatória" : "");
  }, [password]);
  useEffect(() => {
    if (password.length > 0 && confirmPassword.length > 0) {
      setPasswordMatch(password === confirmPassword);
      setMessageConfirmPassword(
        password === confirmPassword
          ? "Confimação de senha correta"
          : "Senhas não conferem!"
      );
    } else {
      setMessageConfirmPassword("Confirmação de senha obrigatória");
    }
  }, [password, confirmPassword]);
  useEffect(() => {
    setIsEnabled(!validName && !validEmail && passwordMatch);
  }, [validName, validEmail, passwordMatch]);
  //#endregion

  //#region Functions

  const confirmPasswordMatch = () => {
    password != confirmPassword
      ? setPasswordMatch(false)
      : setPasswordMatch(true);
  };

  const handleSubmit = () => {
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("confirmPassword: ", confirmPassword);
    console.log("confirmTerms: ", confirmTerms);
  };

  //#endregion

  return (
    <ScrollView style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Crie sua conta!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.containerForm}
      >
        <View>
          <Text style={styles.title}>Nome</Text>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome..."
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TouchableOpacity disabled={true}>
              <Ionicons
                name={validName ? "alert-circle" : "checkmark-circle"}
                style={[
                  styles.icon,
                  { color: validName ? COLORS.warning : COLORS.success },
                ]}
                size={25}
                color="#a1a1a1"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.smallText}>{messageName}</Text>
        </View>
        <View>
          <Text style={styles.title}>Email</Text>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity>
              <Ionicons
                name={validEmail ? "alert-circle" : "checkmark-circle"}
                style={[
                  styles.icon,
                  { color: validEmail ? COLORS.warning : COLORS.success },
                ]}
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
              placeholder="Digite a sua senha..."
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              <Ionicons
                name={!hidePass ? "eye-off" : "eye"}
                style={[
                  styles.icon,
                  { color: !passwordMatch ? COLORS.gray : COLORS.success },
                ]}
                size={25}
                color="#a1a1a1"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.smallText}>{messagePassword}</Text>
        </View>

        <View>
          <Text style={styles.title}>Confirme a senha</Text>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Confirme a sua senha..."
              value={confirmPassword}
              onChangeText={(password) => setConfirmPassword(password)}
              secureTextEntry={hideConfirmPass}
            />
            <TouchableOpacity
              onPress={() => setHideConfirmPass(!hideConfirmPass)}
            >
              <Ionicons
                name={!hideConfirmPass ? "eye-off" : "eye"}
                style={[
                  styles.icon,
                  { color: !passwordMatch ? COLORS.gray : COLORS.success },
                ]}
                size={25}
                color="#a1a1a1"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.smallText}>{messageConfirmPassword}</Text>
        </View>
        <View style={styles.containerColumn}>
          <Text style={styles.text} onPress={() => Modal()}>
            Clique aqui para aceitar os termos da nossa política de privacidade.
          </Text>
        </View>
        <View style={styles.containerColumn}>
          <TouchableOpacity
            disabled={!isEnabled}
            style={[
              styles.button,
              { backgroundColor: isEnabled ? COLORS.success : COLORS.gray },
            ]}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}