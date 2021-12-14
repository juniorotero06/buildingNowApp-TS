import React, { useState } from 'react';
import { styles, windowHeight, windowWidth } from '../styles/styles';
import { ImageBackground, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native';

import axios from 'axios';
const background = require('../assets/images/background_grey.png');
const button = require('../assets/images/bnEnviar.png');

const ContactScreen = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleSubmit = async () => {
    await axios.post('https://email-gaira.dinolabs.dev/public/send-email', input).catch(error => {
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
      <TextInput
        style={styles.input}
        onChangeText={name => setInput({ ...input, name })}
        value={input.name}
        placeholderTextColor="#d3d3d3"
        placeholder="Nombre Completo"
      />
      <TextInput
        style={styles.input}
        onChangeText={email => setInput({ ...input, email })}
        value={input.email}
        placeholderTextColor="#d3d3d3"
        placeholder="Correo Electronico"
      />
      <TextInput
        style={styles.input}
        onChangeText={asunto => setInput({ ...input, asunto })}
        value={input.asunto}
        placeholderTextColor="#d3d3d3"
        placeholder="Asunto"
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{ ...styles.input, height: '15%' }}
        onChangeText={mensaje => setInput({ ...input, mensaje })}
        value={input.mensaje}
        placeholderTextColor="#d3d3d3"
        placeholder="Mensaje"
        editable
        maxLength={40}
      />
      <TouchableOpacity onPress={handleSubmit}>
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
