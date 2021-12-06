import React from 'react';
import {ImageBackground, Image, View, Text, ScrollView} from 'react-native';
import {styles, windowHeight, windowWidth} from '../styles/styles';
const img1 = require('../assets/images/about_background.png');
const logo = require('../assets/images/logo_letras_negras.png');

const AboutScreen = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={img1}
        resizeMode="cover"
        style={{
          ...styles.image,
          backgroundColor: 'white',
          paddingTop: windowHeight * 0.22,
        }}>
        <View
          style={{
            ...styles.containerWelcome,
            justifyContent: 'center',
          }}>
          <Image style={styles.logoWelcome} source={logo} />
          <Text
            style={{
              ...styles.textPaso,
              textAlign: 'center',
              fontSize: 18,
              marginLeft: windowWidth * 0.07,
              marginRight: windowWidth * 0.07,
              marginTop: windowHeight * -0.05,
            }}>
            Es una aplicación que facilita poner en contacto a las personas que
            necesitan resolver tareas urgentes o asistenciales con colaboradores
            que pueden prestar sus servicios al instante.{'\n\n'} Nuestro
            proyecto nace como respuesta a la transformación del sector de los
            servicios asistenciales para lograr conectar a las personas de una
            manera directa sin intermediarios y de esta manera ofrecer
            oportunidades.
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AboutScreen;
