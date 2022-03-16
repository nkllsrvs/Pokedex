import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles, COLOR_DEFAULT} from '../../style/MainStyle';
import * as Animatable from 'react-native-animatable';

export default function WelcomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Animatable.Image
            animation="flipInY"
            source={require("../../assets/logo234.png")}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <Animatable.View 
          delay={600}
          animation="fadeInUp" 
          style={styles.containerForm}>
          <Text style={styles.title}>
            Pesquise, descubra e salve seus pokemons favoritos na palma de sua
            mão!
          </Text>
          <Text style={styles.text}>Faça login para começar</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
}