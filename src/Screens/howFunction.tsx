import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles, windowWidth, windowHeight } from '../styles/styles';

import { useTranslation } from 'react-i18next';

const HowFunctionScreen = () => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.howFContainer}>
        <Image
          source={{ uri: 'https://buildingnow.co/assets-building-app/images/Grupo_222.png' }}
          style={styles.imgHf}
        />
        <Text style={styles.textPaso}>{t('step_1')}</Text>
        <Text style={styles.textSubtitle}>{t('register')}</Text>
      </View>
      <View style={styles.howFContainer}>
        <Text style={{ ...styles.textPaso, marginRight: -(windowWidth * 0.1) }}>{t('step_2')}</Text>
        <Text
          style={{
            ...styles.textSubtitle,
            color: '#2F2FBC',
            marginRight: windowWidth * 0.25,
          }}
        >
          {t('Browse')}
        </Text>
        <Image
          source={{ uri: 'https://buildingnow.co/assets-building-app/images/Grupo_809.png' }}
          style={styles.imgHf}
        />
      </View>
      <View
        style={{
          ...styles.howFContainer,
          flexDirection: 'column',
          justifyContent: 'center',
          width: '90%',
        }}
      >
        <Image
          source={{ uri: 'https://buildingnow.co/assets-building-app/images/Grupo_1102.png' }}
          style={styles.imgHf}
        />
        <Text
          style={{
            ...styles.textPaso,
            marginBottom: 0,
            marginLeft: 0,
            marginTop: windowHeight * 0.005,
          }}
        >
          {t('step_3')}
        </Text>
        <Text style={{ ...styles.textSubtitle, fontSize: windowWidth * 0.07 }}>{t('step_3_Text_1')}</Text>
        <Text style={{ ...styles.textSubtitle, fontSize: windowWidth * 0.07 }}>{t('step_3_Text_2')}</Text>
      </View>
    </View>
  );
};

export default HowFunctionScreen;
