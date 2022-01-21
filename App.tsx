import React from 'react';
import { DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/tabNavegator';
import SplashScreen from 'react-native-splash-screen';
import './languages/i18n';

export type AppRootParamList = {
  login: undefined;
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}

const fontConfig: any = {
  android: {
    regular: {
      fontFamily: 'Quicksand-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Quicksand-Light',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Quicksand-Medium',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'Quicksand-SemiBold',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
