import React from 'react';

import { View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import { styles, colors } from '../styles/styles';
import SwitchSelector from 'react-native-switch-selector';

import { useTranslation } from 'react-i18next';

const logo = require('../assets/images/logo_letras_negras.png');

const options = [
  { label: 'ES', value: 'es' },
  { label: 'EN', value: 'en' },
];

const HomeScreen = ({ navigation }) => {
  const { i18n } = useTranslation();

  function selectLanguage() {
    if (i18n.language == 'es') {
      return 0;
    } else if (i18n.language == 'en') {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ ...styles.container, justifyContent: 'flex-start' }}>
        <Header containerStyle={styles.header} centerComponent={<Image style={styles.logo} source={logo} />} />
        <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />

        <SwitchSelector
          options={options}
          hasPadding
          initial={selectLanguage()}
          buttonColor={'#F2A01F'}
          style={styles.switchSelector}
          onPress={(language: any) => {
            i18n.changeLanguage(language);
          }}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            {i18n.language === 'es' ? (
              <Image
                style={styles.button}
                source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_nosotros.png' }}
              />
            ) : (
              <Image
                style={styles.button}
                source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_about.png' }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('services')}>
            {i18n.language === 'es' ? (
              <Image
                style={styles.button}
                source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_servicios.png' }}
              />
            ) : (
              <Image
                style={styles.button}
                source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_services.png' }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('howf')}>
            {i18n.language === 'es' ? (
              <Image
                style={styles.button}
                source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_howf.png' }}
              />
            ) : (
              <Image
                style={styles.button}
                source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_howdoes.png' }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
