import React from 'react';
import { styles, windowWidth, windowHeight } from '../styles/styles';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { View, Image, Text, TouchableOpacity } from 'react-native';
const imgUnete = 'https://buildingnow.co/assets-building-app/images/img_unete.png';

const UneteScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      {i18n.language === 'es' ? (
        <Image
          source={{ uri: 'https://buildingnow.co/assets-building-app/images/text_unete.png' }}
          style={{
            ...styles.imgHf,
            width: '80%',
            height: '30%',
            marginTop: windowHeight * 0.02,
          }}
        />
      ) : (
        <Image
          source={{ uri: 'https://buildingnow.co/assets-building-app/images/text_uneteEn.png' }}
          style={{
            ...styles.imgHf,
            width: '80%',
            height: '30%',
            marginTop: windowHeight * 0.02,
          }}
        />
      )}

      <Image
        source={{ uri: imgUnete }}
        style={{
          ...styles.imgHf,
          width: '150%',
          height: '55%',
          marginRight: windowWidth * 0.1,
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate('provider')}>
        {i18n.language === 'es' ? (
          <Image
            style={{
              ...styles.buttonImg,
              width: windowWidth * 0.7,
              height: windowHeight * 0.3,
              bottom: windowHeight * 0.07,
            }}
            source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_unete.png' }}
          />
        ) : (
          <Image
            style={{
              ...styles.buttonImg,
              width: windowWidth * 0.7,
              height: windowHeight * 0.3,
              bottom: windowHeight * 0.07,
            }}
            source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_unete_en.png' }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UneteScreen;
