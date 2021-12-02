/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {MainStackNavigator} from './StackNavigator';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#2F2FBC',
        tabBarInactiveTintColor: '#2F2FBC',
        tabBarItemStyle: {paddingVertical: 5},
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/Inicio/inicio_activo.png')
              : require('../assets/icons/iconButtonNavBar/Inicio/inicio_activo.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          } else if (route.name === 'Pruebalo Ya') {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/Pruebalo Ya/pruebalo_activo.png')
              : require('../assets/icons/iconButtonNavBar/Pruebalo Ya/pruebalo.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          } else if (route.name === 'Únete') {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/Unete/unete_activo.png')
              : require('../assets/icons/iconButtonNavBar/Unete/unete.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          } else if (route.name === 'Contacto') {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/Contacto/contacto_activo.png')
              : require('../assets/icons/iconButtonNavBar/Contacto/contacto_activo.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          }
        },
      })}>
      <Tab.Screen name="Inicio" component={MainStackNavigator} />
      <Tab.Screen name="Pruebalo Ya" component={MainStackNavigator} />
      <Tab.Screen name="Únete" component={MainStackNavigator} />
      <Tab.Screen name="Contacto" component={MainStackNavigator} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  libraryIcon: {
    width: 26,
    height: 26,
  },
});

export default BottomTabNavigator;
