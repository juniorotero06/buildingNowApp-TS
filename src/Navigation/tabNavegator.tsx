import React from 'react';
import { Image } from 'react-native';
import { MainStackNavigator, ContactStackNavigator, TestIttackNavigator, UneteStackNavigator } from './StackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles, windowHeight, windowWidth } from '../styles/styles';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { t } = useTranslation();
  let iconName;
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#F2A01F',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('Home'),
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/Inicio/inicio_activo.png'
              : 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/Inicio/inicio.png';
            return <Image source={{ uri: iconName }} style={styles.libraryIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="Pruebalo Ya"
        component={TestIttackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('TryItNow'),
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/PruebaloYa/pruebalo_activo.png'
              : 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/PruebaloYa/pruebalo.png';
            return (
              <Image
                source={{ uri: iconName }}
                style={{ ...styles.libraryIcon, width: windowWidth * 0.08, height: windowHeight * 0.04 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Únete"
        component={UneteStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('JoinUp'),
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/Unete/unete_activo.png'
              : 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/Unete/unete.png';
            return <Image source={{ uri: iconName }} style={styles.libraryIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="Contacto"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: t('Contact'),
          tabBarIcon: ({ focused }) => {
            iconName = focused
              ? 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/Contacto/contacto_activo.png'
              : 'https://buildingnow.co/assets-building-app/icons/iconButtonNavBar/Contacto/contacto.png';
            return <Image source={{ uri: iconName }} style={styles.libraryIcon} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
