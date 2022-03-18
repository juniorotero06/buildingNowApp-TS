import React from 'react';
import { View, StyleSheet } from 'react-native';
import { windowHeight } from '../styles/styles';
import WebView from 'react-native-webview';

const CUSTUMER = 'https://app.buildingnow.co/signin/customer?lang=es';
const PROVIDER = 'https://app.buildingnow.co/signin/provider?lang=es';
const LOGIN = 'https://app.buildingnow.co/login?lang=es';

const CUSTUMER_EN = 'https://app.buildingnow.co/signin/customer?lang=en';
const PROVIDER_EN = 'https://app.buildingnow.co/signin/provider?lang=en';
const LOGIN_EN = 'https://app.buildingnow.co/login?lang=en';

const WebViewCustomer = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', top: windowHeight * 0.01 }}>
        <WebView source={{ uri: CUSTUMER }} />
      </View>
    </View>
  );
};
const WebViewCustomerEnglish = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', top: windowHeight * 0.01 }}>
        <WebView source={{ uri: CUSTUMER_EN }} />
      </View>
    </View>
  );
};

const WebViewProvider = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', top: windowHeight * 0.01 }}>
        <WebView source={{ uri: PROVIDER }} />
      </View>
    </View>
  );
};
const WebViewProviderEnglish = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', top: windowHeight * 0.01 }}>
        <WebView source={{ uri: PROVIDER_EN }} />
      </View>
    </View>
  );
};

const WebViewLogin = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', top: windowHeight * 0.01 }}>
        <WebView source={{ uri: LOGIN }} />
      </View>
    </View>
  );
};
const WebViewLoginEnglish = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', top: windowHeight * 0.01 }}>
        <WebView source={{ uri: LOGIN_EN }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {
  WebViewCustomer,
  WebViewCustomerEnglish,
  WebViewProvider,
  WebViewProviderEnglish,
  WebViewLogin,
  WebViewLoginEnglish,
};
