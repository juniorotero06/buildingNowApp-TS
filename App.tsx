import React from 'react';
import { Provider as PapperProvider } from 'react-native-paper';
import { DefaultTheme, configureFonts } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/tabNavegator';
import SplashScreen from 'react-native-splash-screen';

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
  default: {
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
    <PapperProvider theme={theme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PapperProvider>
  );
};

export default App;
