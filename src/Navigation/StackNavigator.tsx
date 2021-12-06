import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import AppbarComponent from '../components/appbar_component';
import HomeScreen from '../Screens/homeScreen';
//import WelcomeScreen from '../Screens/welcomeScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Inicio" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <AppbarComponent route={route} options={options} back={back} navigation={navigation} />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="About" component={HomeScreen} options={{ headerTitle: 'Nosotros' }} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, AboutStackNavigator };
