import React from 'react';
import { styles, windowHeight } from '../styles/styles';
import { ImageBackground, View, Image } from 'react-native';
const background = 'https://buildingnow.co/assets-building-app/images/background_grey.png';
const logoGobernacion = 'https://buildingnow.co/assets-building-app/images/escudo_gobernacion.png';
const logoActivate = 'https://buildingnow.co/assets-building-app/images/logo_activate.png';
const logoImpretics = 'https://buildingnow.co/assets-building-app/images/logo_impretics.png';

const ApoyoScreen = () => {
  return (
    <ImageBackground
      source={{ uri: background }}
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
          source={{ uri: logoGobernacion }}
          style={{
            ...styles.logoWelcome,
            width: '70%',
            height: '30%',
          }}
        />
        <Image
          source={{ uri: logoImpretics }}
          style={{
            ...styles.logoWelcome,
            width: '70%',
            height: '30%',
          }}
        />
        <Image
          source={{ uri: logoActivate }}
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
