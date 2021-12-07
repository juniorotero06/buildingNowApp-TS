import React from 'react';
import { Provider as PapperProvider } from 'react-native-paper';
import { DefaultTheme, configureFonts } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/tabNavegator';

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
  return (
    <PapperProvider theme={theme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PapperProvider>
  );
};

export default App;
