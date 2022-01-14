import React from 'react';
import { styles, windowHeight } from '../styles/styles';
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
      <TouchableOpacity
        style={{ ...styles.cardButton, bottom: windowHeight * 0.12, width: '70%' }}
        onPress={() => navigation.navigate('customer')}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.1, 1]}
          colors={['#2F2FBC', '#9310ea']}
          style={styles.cardButtonGradient}
        >
          <Text style={[styles.cardButtonText, styles.fwSemiBold]}>{t('btnTextit')}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default TestItScreen;
