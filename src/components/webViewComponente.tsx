import React from 'react';
import { View, StyleSheet } from 'react-native';
import { windowHeight } from '../styles/styles';
import WebView from 'react-native-webview';

const CUSTUMER = 'https://app.xervis.tk/signin/customer';
const PROVIDER = 'https://app.xervis.tk/signin/provider';
const LOGIN = 'https://app.xervis.tk/login';

const WebViewCustomer = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', bottom: windowHeight * 0.05 }}>
        <WebView source={{ uri: CUSTUMER }}></WebView>
      </View>
    </View>
  );
};
const WebViewProvider = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', bottom: windowHeight * 0.05 }}>
        <WebView source={{ uri: PROVIDER }}></WebView>
      </View>
    </View>
  );
};
const WebViewLogin = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', bottom: windowHeight * 0.06 }}>
        <WebView source={{ uri: LOGIN }}></WebView>
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

export { WebViewCustomer, WebViewProvider, WebViewLogin };
