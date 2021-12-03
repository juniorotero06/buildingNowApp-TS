import React from 'react';
import {styles, windowHeight} from '../styles/styles';
import {ImageBackground, View, Image} from 'react-native';
const bacground = require('../assets/images/background_grey.png');
const logoGobernacion = require('../assets/images/escudo_gobernacion.png');
const logoActivate = require('../assets/images/logo_activate.png');
const logoImpretics = require('../assets/images/logo_impretics.png');

const ApoyoScreen = () => {
  return (
    <ImageBackground
      source={bacground}
      resizeMode="cover"
      style={{...styles.image, backgroundColor: 'white'}}>
      <View
        style={{
          ...styles.containerWelcome,
          justifyContent: 'flex-start',
          marginTop: windowHeight * 0.2,
        }}>
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
