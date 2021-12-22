import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ServiceItem from '../components/ServiceItem';

import { useTranslation } from 'react-i18next';

const deviceWidth = Dimensions.get('window').width;

const ServicesScreen = () => {
  const { t, i18n } = useTranslation();

  const items = [
    {
      imageName: require('../assets/images/services/cubiertas.jpg'),
      title: t('cover'),
      primaryText: t('primaryTextCover'),
      secondaryText: t('secondaryText'),
      buttonText: t('buttonText'),
    },
    {
      imageName: require('../assets/images/services/impermeabilizacion.jpg'),
      title: t('Waterproofing'),
      primaryText: t('primaryTextWaterproofing'),
      secondaryText: t('secondaryText'),
      buttonText: t('buttonText'),
    },
    {
      imageName: require('../assets/images/services/mantenimiento-de-fachadas.jpg'),
      title: t('facadeMaintenance'),
      primaryText: t('primaryTextFacadeMaintenance'),
      secondaryText: t('secondaryText'),
      buttonText: t('buttonText'),
    },
  ];
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
