import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { styles } from '../styles/styles';

const AppBarComponent = ({ navigation, options }) => {
  const title =
    options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : null;
  return (
    <View style={styles.appBarContentContainer}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.appBarBackButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.appBarTitle}>{title}</Text>
        <View style={styles.appBarTitleLine} />
      </View>
      <View />
    </View>
  );
};

export default AppBarComponent;
