import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ImageSourcePropType, ListRenderItem } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface Service {
  imageName: ImageSourcePropType;
  title: string;
  primaryText: string;
  secondaryText: string;
  buttonText: string;
}
const navigation = useNavigation();
const ServiceItem: ListRenderItem<Service> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={item.imageName} resizeMode="cover" />
      <View style={styles.cardBody}>
        <Text style={[styles.cardTitle, styles.fwBold]}>{item.title}</Text>
        <Text style={styles.cardText}>{item.primaryText}</Text>
        <Text style={[styles.cardText, styles.fwBold]}>{item.secondaryText}</Text>
      </View>
      <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('login')}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.5, 1]}
          colors={[colors.orange, colors.safetyOrange]}
          style={styles.cardButtonGradient}
        >
          <Text style={[styles.cardButtonText, styles.fwSemiBold]}>{item.buttonText}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const colors = {
  oldLace: '#FFF5E2',
  orange: '#FFAA00',
  safetyOrange: '#FF7600',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.oldLace,
    height: deviceHeight * 0.55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: deviceHeight * 0.05,
  },
  cardImage: {
    alignSelf: 'center',
    borderRadius: 10,
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.3,
    top: -(deviceWidth * 0.25),
    position: 'absolute',
  },
  cardBody: {
    width: '75%',
    textAlign: 'center',
    marginTop: deviceHeight * 0.15,
  },
  cardTitle: {
    color: colors.orange,
    fontSize: deviceWidth * 0.07,
    textAlign: 'center',
  },
  cardText: {
    fontSize: deviceWidth * 0.05,
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium',
    margin: 10,
  },
  fwBold: {
    fontFamily: 'Quicksand-Bold',
  },
  fwSemiBold: {
    fontFamily: 'Quicksand-SemiBold',
  },
  cardButtonGradient: {
    alignItems: 'center',
    borderRadius: 8,
    flexWrap: 'wrap',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.68,

    elevation: 11,
  },
  cardButton: {
    width: '80%',
    position: 'absolute',
    bottom: -(deviceWidth * 0.09),
  },
  cardButtonText: {
    color: colors.white,
    fontSize: deviceWidth * 0.05,
    textAlign: 'center',
    alignItems: 'center',
    bottom: deviceHeight * 0.005,
    width: '100%',
  },
});

export default ServiceItem;
