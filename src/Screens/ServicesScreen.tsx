import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ServiceItem from '../components/ServiceItem';

const deviceWidth = Dimensions.get('window').width;

const items = [
  {
    imageName: require('../assets/images/services/plumber.png'),
    title: 'Plomeria',
    primaryText: 'La plomería es un servicio que muchas veces necesitamos urgente.',
    secondaryText: 'Incluye visita, cotización y arreglo.',
    buttonText: '¡Haz clic aquí y solicita ya tu servicio!',
  },
  {
    imageName: require('../assets/images/services/accountancy.png'),
    title: 'Contaduría',
    primaryText: 'La contabilidad es un servicio que requiere atención inmediata.',
    secondaryText: 'Incluye visita, cotización y gestión.',
    buttonText: '¡Haz clic aquí y solicita ya tu servicio!',
  },
  {
    imageName: require('../assets/images/services/administration.png'),
    title: 'Administración',
    primaryText: 'La administración es un servicio profesional y de asistencia.',
    secondaryText: 'Incluye visita, cotización y arreglo.',
    buttonText: '¡Haz clic aquí y solicita ya tu servicio!',
  },
];

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Carousel
        slideStyle={styles.carousel}
        sliderWidth={deviceWidth}
        data={items}
        renderItem={ServiceItem}
        itemWidth={deviceWidth * 0.9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  carousel: {
    justifyContent: 'center',
  },
});

export default ServicesScreen;
