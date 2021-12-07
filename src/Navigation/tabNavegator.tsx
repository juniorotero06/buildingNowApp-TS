/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {
  MainStackNavigator,
  ContactStackNavigator,
  TestIttackNavigator,
  UneteStackNavigator,
} from './StackNavigator';
import {styles} from '../styles/styles';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  let iconName;
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={() => ({
        tabBarActiveTintColor: '#F2A01F',
        tabBarInactiveTintColor: 'white',
        tabBarItemStyle: {paddingVertical: 5},
        tabBarStyle: {
          backgroundColor: '#2F2FBC',
          position: 'absolute',
          height: '9%',
          paddingBottom: 0,
          paddingTop: 10,
        },
      })}>
      <Tab.Screen
        name="Inicio"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
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
          tabBarIcon: ({focused}) => {
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
          tabBarLabel: 'Únete',
          tabBarIcon: ({focused}) => {
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
          tabBarIcon: ({focused}) => {
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
