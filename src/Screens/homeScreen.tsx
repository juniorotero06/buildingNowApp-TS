/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { styles } from '../styles/styles';
import SwitchSelector from 'react-native-switch-selector';

import { useTranslation } from 'react-i18next';

const logo = require('../assets/images/logo_letras_negras.png');

const options = [
  { label: 'Español', value: 'es' },
  { label: 'English', value: 'en' },
];

const HomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ ...styles.container, justifyContent: 'flex-start' }}>
        <Header containerStyle={styles.header} centerComponent={<Image style={styles.logo} source={logo} />} />

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          {i18n.language === 'es' ? (
            <Image style={styles.button} source={require('../assets/images/btn_nosotros.png')} />
          ) : (
            <Image style={styles.button} source={require('../assets/images/btn_about.png')} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('services')}>
          {i18n.language === 'es' ? (
            <Image style={styles.button} source={require('../assets/images/btn_servicios.png')} />
          ) : (
            <Image style={styles.button} source={require('../assets/images/btn_services.png')} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('howf')}>
          {i18n.language === 'es' ? (
            <Image style={styles.button} source={require('../assets/images/btn_howf.png')} />
          ) : (
            <Image style={styles.button} source={require('../assets/images/btn_howdoes.png')} />
          )}
        </TouchableOpacity>
        <SwitchSelector
          options={options}
          hasPadding
          initial={0}
          buttonColor={'#F2A01F'}
          style={styles.switchSelector}
          onPress={(language: any) => {
            i18n.changeLanguage(language);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
