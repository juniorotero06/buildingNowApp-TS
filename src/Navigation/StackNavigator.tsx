import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import AppbarComponent from '../components/appbar_component';
import HomeScreen from '../Screens/homeScreen';
import AboutScreen from '../Screens/aboutPage';
import ApoyoScreen from '../Screens/apoyoInstitucionaScreen';
import ServicesScreen from '../Screens/ServicesScreen';
import ContactScreen from '../Screens/contactScreen';
import HowFunctionScreen from '../Screens/howFunction';
import TestItScreen from '../Screens/testItScreen';
import UneteScreen from '../Screens/uneteScreen';
import { WebViewLogin } from '../components/webViewComponente';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppbarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ headerTitle: 'Nosotros' }} />
      <Stack.Screen name="services" component={ServicesScreen} options={{ headerTitle: 'Servicios' }} />
      <Stack.Screen name="apoyo" component={ApoyoScreen} options={{ headerTitle: 'Apoyo Institucional' }} />
      <Stack.Screen name="howf" component={HowFunctionScreen} options={{ headerTitle: '¿Cómo Funciona?' }} />
      <Stack.Screen name="login" component={WebViewLogin} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppbarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="contact" component={ContactScreen} options={{ headerTitle: 'Contacto' }} />
    </Stack.Navigator>
  );
};

const TestIttackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppbarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="testit" component={TestItScreen} options={{ headerTitle: 'Pruebalo Ya' }} />
    </Stack.Navigator>
  );
};

const UneteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppbarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="unete" component={UneteScreen} options={{ headerTitle: 'Únete' }} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, TestIttackNavigator, UneteStackNavigator };
