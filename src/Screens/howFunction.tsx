import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles, windowWidth, windowHeight} from '../styles/styles';
const img1 = require('../assets/images/Grupo_222.png');
const img2 = require('../assets/images/Grupo_809.png');
const img3 = require('../assets/images/Grupo_1102.png');

const HowFunctionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.howFContainer}>
        <Image source={img1} style={styles.imgHf} />
        <Text style={styles.textPaso}>Paso 1:</Text>
        <Text style={styles.textSubtitle}>Regístrate</Text>
      </View>
      <View style={styles.howFContainer}>
        <Text style={{...styles.textPaso, marginRight: windowWidth * -0.1}}>
          Paso 2:
        </Text>
        <Text
          style={{
            ...styles.textSubtitle,
            color: '#2F2FBC',
            fontSize: 35,
            marginRight: windowWidth * 0.25,
          }}>
          Navega
        </Text>
        <Image source={img2} style={styles.imgHf} />
      </View>
      <View
        style={{
          ...styles.howFContainer,
          flexDirection: 'column',
          justifyContent: 'center',
          width: '90%',
        }}>
        <Image source={img3} style={styles.imgHf} />
        <Text
          style={{
            ...styles.textPaso,
            marginBottom: 0,
            marginLeft: 0,
            marginTop: windowHeight * 0.005,
          }}>
          Paso 3:
        </Text>
        <Text style={{...styles.textSubtitle, fontSize: 28}}>
          Pide o confirma
        </Text>
        <Text style={{...styles.textSubtitle, fontSize: 28}}>
          tus servicios al instante
        </Text>
      </View>
    </View>
  );
};

export default HowFunctionScreen;
