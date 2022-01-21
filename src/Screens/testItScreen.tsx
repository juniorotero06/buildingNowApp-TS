import React from 'react';
import { styles, windowWidth, windowHeight } from '../styles/styles';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
const imgTestIt = 'https://buildingnow.co/assets-building-app/images/img_testit.png';

const TestItScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      {i18n.language === 'es' ? (
        <Image
          source={{ uri: 'https://buildingnow.co/assets-building-app/images/text_testit.png' }}
          style={{
            ...styles.imgHf,
            width: '80%',
            height: '30%',
            marginTop: windowHeight * 0.02,
          }}
        />
      ) : (
        <Image
          source={{ uri: 'https://buildingnow.co/assets-building-app/images/text_testitEn.png' }}
          style={{
            ...styles.imgHf,
            width: '80%',
            height: '30%',
            marginTop: windowHeight * 0.02,
          }}
        />
      )}

      <Image
        source={{ uri: imgTestIt }}
        style={{
          ...styles.imgHf,
          width: '80%',
          height: '50%',
          marginTop: windowHeight * 0.03,
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('customer')}>
        {i18n.language === 'es' ? (
          <Image
            style={{
              ...styles.buttonImg,
              width: windowWidth * 2,
              height: windowHeight * 0.3,
              bottom: windowHeight * 0.08,
            }}
            source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_textit.png' }}
          />
        ) : (
          <Image
            style={{
              ...styles.buttonImg,
              width: windowWidth * 2,
              height: windowHeight * 0.3,
              bottom: windowHeight * 0.08,
            }}
            source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_textit_en.png' }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TestItScreen;
