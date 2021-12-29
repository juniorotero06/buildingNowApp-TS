import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { styles } from '../styles/styles';

const AppbarComponent = ({ navigation, options }) => {
  const title =
    options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : null;
  return (
    <View style={styles.appbarContentContainer}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.appbarTitle}>{title}</Text>
        <View style={{ width: 50, height: 3, backgroundColor: '#F2A01F' }} />
      </View>
      <View />
    </View>
  );
};

export default AppbarComponent;
