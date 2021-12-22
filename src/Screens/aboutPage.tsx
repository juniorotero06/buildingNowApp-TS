import React from 'react';
import { ImageBackground, Image, View, Text, ScrollView } from 'react-native';
import { styles, windowHeight, windowWidth } from '../styles/styles';

import { useTranslation } from 'react-i18next';

const img1 = require('../assets/images/about_background.png');
const logo = require('../assets/images/logo_letras_negras.png');

const AboutScreen = () => {
  const { t, i18n } = useTranslation();
  return (
    <ScrollView>
      <ImageBackground
        source={img1}
        resizeMode="cover"
        style={{
          ...styles.image,
          backgroundColor: 'white',
          paddingTop: windowHeight * 0.22,
        }}
      >
        <View
          style={{
            ...styles.containerWelcome,
            justifyContent: 'center',
          }}
        >
          <Image style={styles.logoWelcome} source={logo} />
          <Text
            style={{
              ...styles.textPaso,
              textAlign: 'center',
              fontSize: windowWidth * 0.04,
              marginLeft: windowWidth * 0.07,
              marginRight: windowWidth * 0.07,
              marginTop: -(windowHeight * 0.065),
            }}
          >
            {t('AboutText')}
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AboutScreen;
