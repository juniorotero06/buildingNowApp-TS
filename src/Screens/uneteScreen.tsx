import React from 'react';
import {styles, windowWidth, windowHeight} from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text} from 'react-native';
const imgUnete = require('../assets/images/img_unete.png');
const textUnete = require('../assets/images/text_unete.png');

const UneteScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={textUnete}
        style={{
          ...styles.imgHf,
          width: '80%',
          height: '24%',
          marginTop: windowHeight * 0.02,
        }}
      />
      <Image
        source={imgUnete}
        style={{
          ...styles.imgHf,
          width: '110%',
          height: '55%',
          marginTop: windowHeight * 0.01,
          marginRight: windowWidth * 0.1,
        }}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.1, 1]}
        colors={['#FFAA00', '#FF7600']}
        style={styles.cardButtonGradient}>
        <Text style={{...styles.textButton, fontSize: windowWidth * 0.05}}>
          ¡Haz clic aquí y unete a nostros!
        </Text>
      </LinearGradient>
    </View>
  );
};

export default UneteScreen;
