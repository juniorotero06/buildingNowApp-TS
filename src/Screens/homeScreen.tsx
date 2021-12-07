/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {styles} from '../styles/styles';
const logo = require('../assets/images/logo_letras_negras.png');
const aboutIcon = require('../assets/images/btn_nosotros.png');
const apoyoIcon = require('../assets/images/btn_apoyo.png');
const howfIcon = require('../assets/images/btn_howf.png');
const servicesIcon = require('../assets/images/btn_servicios.png');

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{...styles.container, justifyContent: 'flex-start'}}>
        <Header
          containerStyle={styles.header}
          centerComponent={<Image style={styles.logo} source={logo} />}
        />

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Image style={styles.button} source={aboutIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Image style={styles.button} source={servicesIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('howf')}>
          <Image style={styles.button} source={howfIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('apoyo')}>
          <Image style={styles.button} source={apoyoIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
