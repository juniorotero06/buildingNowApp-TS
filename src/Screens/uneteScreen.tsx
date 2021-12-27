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

      <TouchableOpacity
        style={{ ...styles.cardButton, bottom: windowHeight * 0.12, width: '70%' }}
        onPress={() => navigation.navigate('provider')}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.1, 1]}
          colors={['#FFAA00', '#FF7600']}
          style={styles.cardButtonGradient}
        >
          <Text style={[styles.cardButtonText, styles.fwSemiBold]}>{t('btnUnete')}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default UneteScreen;
