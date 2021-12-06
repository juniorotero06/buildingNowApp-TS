import React from 'react';
import {styles, windowHeight, windowWidth} from '../styles/styles';
import {View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const imgTestIt = require('../assets/images/img_testit.png');
const textTestIt = require('../assets/images/text_testit.png');

const TestItScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={textTestIt}
        style={{
          ...styles.imgHf,
          width: '80%',
          height: '30%',
          marginTop: windowHeight * 0.1,
        }}
      />
      <Image
        source={imgTestIt}
        style={{
          ...styles.imgHf,
          width: '80%',
          height: '45%',
          marginTop: windowHeight * 0.01,
        }}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.1, 1]}
        colors={['#2F2FBC', '#9310ea']}
        style={styles.cardButtonGradient}>
        <Text style={{...styles.textButton, fontSize: windowWidth * 0.05}}>
          ¡Haz clic aquí y prueba ya!
        </Text>
      </LinearGradient>
    </View>
  );
};

export default TestItScreen;
