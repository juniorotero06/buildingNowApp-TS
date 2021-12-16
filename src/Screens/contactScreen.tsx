import React, { useState } from 'react';
import { styles, windowHeight, windowWidth } from '../styles/styles';
import { ImageBackground, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native';

import axios from 'axios';
const background = require('../assets/images/background_grey.png');
const button = require('../assets/images/bnEnviar.png');

import { useForm, useFormState } from 'react-hook-form';
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

  const onSubmit = async () => {
    await axios.post('https://email-gaira.dinolabs.dev/public/send-email', control._defaultValues).catch(error => {
      console.error(error);
    });
  };

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{
        ...styles.image,
        backgroundColor: 'white',
        height: '120%',
        alignItems: 'center',
      }}
    >
      <Text style={{ ...styles.textContact, marginTop: windowHeight * 0.15 }}>
        Sus opiniones son importantes para nosotros. Ya sea una simple pregunta o una sugerencia valiosa, estamos aquí
        las 24 horas del día, los 7 días de la semana.
      </Text>
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
            placeholder="Nombre Completo"
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
            placeholder="Correo Electronico"
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
            placeholder="Asunto"
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
            placeholder="Mensaje"
            editable
            maxLength={100}
          />
        )}
        name="mensaje"
      />
      {errors.mensaje && <Text>This is required.</Text>}
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Image source={button} style={styles.buttonImg}></Image>
      </TouchableOpacity>

      <Text
        style={{
          ...styles.textContact,
          width: '80%',
          marginBottom: 0,
          marginTop: -(windowHeight * 0.1),
        }}
      >
        Puede llamarnos por teléfono{' '}
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
        o escribirnos al correo{' '}
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
