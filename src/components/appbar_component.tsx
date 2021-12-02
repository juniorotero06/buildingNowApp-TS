/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

const styles = StyleSheet.create({
  backIcon: {
    width: 26,
    height: 26,
    marginLeft: windowWidth * 0.02,
  },
  appbarContentContainer: {
    flexDirection: 'row',
    paddingTop: windowHeight * 0.02,
    paddingBottom: windowHeight * 0.05,
    paddingHorizontal: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appbarTitle: {
    color: 'black',
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
  },
});

export default AppbarComponent;
