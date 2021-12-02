/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Header, Button} from 'react-native-elements';
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
        <Text style={styles.textButton}>¿Cómo Funciona?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Apoyo Institucional</Text>
        <Image style={styles.icon} source={apoyoIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    height: '20%',
    backgroundColor: '#fff',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: '#333',
  },
  logo: {
    width: '100%',
    resizeMode: 'center',
  },
  backgroundButton: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F2A01F',
    padding: 10,
    borderRadius: 20,
    width: '85%',
    marginTop: 20,
  },
  textButton: {
    flexDirection: 'row',
    fontSize: 30,
  },
  icon: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
});

export default HomeScreen;
