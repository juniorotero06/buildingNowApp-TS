/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import { useTranslation } from 'react-i18next';

import { MainStackNavigator, ContactStackNavigator, TestIttackNavigator, UneteStackNavigator } from './StackNavigator';
import { styles, windowHeight, windowWidth } from '../styles/styles';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { t, i18n } = useTranslation();
  let iconName;
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#F2A01F',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarItemStyle: { paddingVertical: 5 },
        tabBarStyle: {
          backgroundColor: '#2F2FBC',
          position: 'absolute',
          height: '9%',
          paddingBottom: 0,
          paddingTop: windowHeight * 0.01,
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('Home'),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/Inicio/inicio_activo.png')
              : require('../assets/icons/iconButtonNavBar/Inicio/inicio.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="Pruebalo Ya"
        component={TestIttackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('TryItNow'),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/PruebaloYa/pruebalo_activo.png')
              : require('../assets/icons/iconButtonNavBar/PruebaloYa/pruebalo.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="Únete"
        component={UneteStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('JoinUp'),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/Unete/unete_activo.png')
              : require('../assets/icons/iconButtonNavBar/Unete/unete.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="Contacto"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('Contact'),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? require('../assets/icons/iconButtonNavBar/Contacto/contacto_activo.png')
              : require('../assets/icons/iconButtonNavBar/Contacto/contacto.png');
            return <Image source={iconName} style={styles.libraryIcon} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
