/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {styles} from '../styles/styles';

const AppbarComponent = ({navigation, route, options, back}) => {
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : route.name;
  return (
    <View style={styles.appbarContentContainer}>
      {back ? (
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Text style={styles.appbarTitle}>{title}</Text>
    </View>
  );
};

export default AppbarComponent;
