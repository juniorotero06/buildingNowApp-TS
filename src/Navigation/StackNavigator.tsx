import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import AppBarComponent from '../components/appbar_component';
import HomeScreen from '../Screens/homeScreen';
import AboutScreen from '../Screens/aboutPage';
import ApoyoScreen from '../Screens/apoyoInstitucionaScreen';
import ServicesScreen from '../Screens/ServicesScreen';
import ContactScreen from '../Screens/contactScreen';
import HowFunctionScreen from '../Screens/howFunction';
import TestItScreen from '../Screens/testItScreen';
import UneteScreen from '../Screens/uneteScreen';
import { WebViewLogin, WebViewCustomer, WebViewProvider } from '../components/webViewComponente';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

function MainStackNavigator() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppBarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ headerTitle: t('About') }} />
      <Stack.Screen name="services" component={ServicesScreen} options={{ headerTitle: t('Services') }} />
      <Stack.Screen name="apoyo" component={ApoyoScreen} options={{ headerTitle: 'Apoyo Institucional' }} />
      <Stack.Screen name="howf" component={HowFunctionScreen} options={{ headerTitle: t('howf') }} />
      <Stack.Screen name="login" component={WebViewLogin} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppBarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="contact" component={ContactScreen} options={{ headerTitle: t('Contact') }} />
    </Stack.Navigator>
  );
};

const TestIttackNavigator = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppBarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="testit" component={TestItScreen} options={{ headerTitle: t('TryItNow') }} />
      <Stack.Screen name="customer" component={WebViewCustomer} />
    </Stack.Navigator>
  );
};

const UneteStackNavigator = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppBarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="unete" component={UneteScreen} options={{ headerTitle: t('JoinUp') }} />
      <Stack.Screen name="provider" component={WebViewProvider} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, TestIttackNavigator, UneteStackNavigator };
