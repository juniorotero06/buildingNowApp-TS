/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, Image, StyleSheet} from 'react-native';

const image = require('../assets/images/abstract_background_373.png');
const logo = require('../assets/images/logo.png');

const WelcomeScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  logo: {
    resizeMode: 'center',
  },
});

export default WelcomeScreen;
