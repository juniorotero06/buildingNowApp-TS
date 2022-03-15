import React from 'react';
import { styles, windowHeight, windowWidth } from '../styles/styles';
import { ImageBackground, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { useTranslation } from 'react-i18next';
import axios from 'axios';
const background = 'https://buildingnow.co/assets-building-app/images/background_grey.png';

import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Nombre requerido'),
  email: yup.string().email('Ingresa un E-mail valido').required('E-mail requerido'),
  asunto: yup.string().required('Nombre requerido'),
  mensaje: yup.string().required('Nombre requerido'),
});

const ContactScreen = () => {
  const { t, i18n } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      asunto: '',
      mensaje: '',
      resolver: yupResolver(validationSchema),
    },
  });

  const createAlert = () =>
    Alert.alert(t('alertTitle'), t('alertBody'), [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);

  const onSubmit = async () => {
    await axios
      .post('https://email-gaira.dinolabs.dev/public/send-email', control._defaultValues)
      .then(() => createAlert())
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ImageBackground
      source={{ uri: background }}
      resizeMode="cover"
      style={{
        ...styles.image,
        backgroundColor: 'white',
        height: '120%',
        alignItems: 'center',
      }}
    >
      <Text style={{ ...styles.textContact, marginTop: windowHeight * 0.15 }}>{t('textContact')}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#d3d3d3"
            placeholder={t('placeHolderName')}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#d3d3d3"
            placeholder={t('placeHolderEmail')}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#d3d3d3"
            placeholder={t('placeHolderSubject')}
          />
        )}
        name="asunto"
      />
      {errors.asunto && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={{ ...styles.input, height: '15%' }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#d3d3d3"
            placeholder={t('placeHolderMsg')}
            editable
            maxLength={100}
          />
        )}
        name="mensaje"
      />
      {errors.mensaje && <Text>This is required.</Text>}
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        {i18n.language === 'es' ? (
          <Image
            source={{ uri: 'https://buildingnow.co/assets-building-app/images/bnEnviar.png' }}
            style={styles.buttonImg}
          />
        ) : (
          <Image
            source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_send.png' }}
            style={styles.buttonImg}
          />
        )}
      </TouchableOpacity>

      <Text
        style={{
          ...styles.textContact,
          width: '80%',
          marginBottom: 0,
          marginTop: -(windowHeight * 0.1),
        }}
      >
        {t('telText')}{' '}
        <Text
          style={{
            fontWeight: 'bold',
            color: '#2F2FBC',
            fontSize: windowWidth * 0.03,
          }}
        >
          +573001234567
        </Text>
      </Text>

      <Text
        style={{
          ...styles.textContact,
          width: '80%',
        }}
      >
        {t('textEmail')}{' '}
        <Text
          style={{
            fontWeight: 'bold',
            color: '#2F2FBC',
            fontSize: windowWidth * 0.03,
          }}
        >
          contacto@buildingnow.com
        </Text>
      </Text>
    </ImageBackground>
  );
};

export default ContactScreen;
