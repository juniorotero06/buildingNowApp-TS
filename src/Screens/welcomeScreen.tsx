/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {styles} from '../styles/styles';

const image = require('../assets/images/abstract_background_373.png');
const logo = require('../assets/images/logo.png');

const WelcomeScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.containerWelcome}>
        <Image style={styles.logo} source={logo} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
