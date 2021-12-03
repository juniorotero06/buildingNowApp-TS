/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {styles} from '../styles/styles';
const logo = require('../assets/images/logo_letras_negras.png');
const backgroundButton = require('../assets/icons/backgroundButtons.png');
const aboutIcon = require('../assets/icons/about.png');
const apoyoIcon = require('../assets/icons/apoyo.png');
const howfIcon = require('../assets/icons/howf.png');
const servicesIcon = require('../assets/icons/services.png');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        centerComponent={<Image style={styles.logo} source={logo} />}
      />

      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={aboutIcon} />
        <Text style={styles.textButton}>Nosotros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>¡Servicios al Instante!</Text>
        <Image style={styles.icon} source={servicesIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={howfIcon} />
        <Text style={{...styles.textButton, textAlign: 'right'}}>
          ¿Cómo Funciona?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Apoyo Institucional</Text>
        <Image style={styles.icon} source={apoyoIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
