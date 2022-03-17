import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FormInput from '../../components/FormInput';
import { styles, COLORS } from '../../style/MainStyle';
import * as Animatable from 'react-native-animatable';
import registerStyle from '../register/componentStyle';

export default function LoginScreen({ navigation }) {
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
          <FormInput
            styleText={styles.title}
            styleInput={styles.input}
            title="Email"
            placeholderInput="Digite um email"
          />
          <FormInput
            styleText={styles.title}
            styleInput={styles.input}
            title="Senha"
            placeholderInput="********"
          />
          <Text style={styles.smallText}>
            Não tem login? Clique em Registrar e cadastre-se!
          </Text>
          <View style={styles.containerColumn}>
            <TouchableOpacity 
              style={[styles.button, registerStyle.button]}
              onPress={() => { navigation.navigate("RegisterScreen") }}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { position: "relative", margin: "5%" }]}
            >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
}