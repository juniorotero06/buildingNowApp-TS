import React from 'react';
import { styles, windowHeight } from '../styles/styles';
import { ImageBackground, View, Image } from 'react-native';
const background = require('../assets/images/background_grey.png');
const logoGobernacion = require('../assets/images/escudo_gobernacion.png');
const logoActivate = require('../assets/images/logo_activate.png');
const logoImpretics = require('../assets/images/logo_impretics.png');

const ApoyoScreen = () => {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{ ...styles.image, backgroundColor: 'white', height: '120%' }}
    >
      <View
        style={{
          ...styles.containerWelcome,
          justifyContent: 'flex-start',
          marginTop: windowHeight * 0.1,
        }}
      >
        <Image
          source={logoGobernacion}
          style={{
            ...styles.logoWelcome,
            width: '70%',
            height: '30%',
          }}
        />
        <Image
          source={logoImpretics}
          style={{
            ...styles.logoWelcome,
            width: '70%',
            height: '30%',
          }}
        />
        <Image
          source={logoActivate}
          style={{
            ...styles.logoWelcome,
            width: '70%',
            height: '30%',
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default ApoyoScreen;
