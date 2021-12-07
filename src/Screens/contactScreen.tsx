import React, {useState} from 'react';
import {styles, windowHeight, windowWidth} from '../styles/styles';
import {
  ImageBackground,
  ScrollView,
  TextInput,
  Text,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const background = require('../assets/images/background_grey.png');
const button = require('../assets/images/bnEnviar.png');

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <ScrollView>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={{
          ...styles.image,
          backgroundColor: 'white',
          height: '100%',
          alignItems: 'center',
        }}>
        <Text style={{...styles.textContact, marginTop: 100}}>
          Sus opiniones son importantes para nosotros. Ya sea una simple
          pregunta o una sugerencia valiosa, estamos aquí las 24 horas del día,
          los 7 días de la semana.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={name => setName(name)}
          value={name}
          placeholderTextColor="#d3d3d3"
          placeholder="Nombre Completo"
        />
        <TextInput
          style={styles.input}
          onChangeText={email => setEmail(email)}
          value={email}
          placeholderTextColor="#d3d3d3"
          placeholder="Correo Electronico"
        />
        <TextInput
          style={styles.input}
          onChangeText={asunto => setAsunto(asunto)}
          value={asunto}
          placeholderTextColor="#d3d3d3"
          placeholder="Asunto"
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={{...styles.input, height: '20%'}}
          onChangeText={mensaje => setMensaje(mensaje)}
          value={mensaje}
          placeholderTextColor="#d3d3d3"
          placeholder="Mensaje"
          editable
          maxLength={40}
        />
        <Image source={button} style={styles.buttonImg}></Image>
        <Text
          style={{
            ...styles.textContact,
            width: '80%',
            marginBottom: 0,
            marginTop: -28,
          }}>
          Puede llamarnos por teléfono{' '}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#2F2FBC',
              fontSize: 12,
            }}>
            +573001234567
          </Text>
        </Text>

        <Text
          style={{
            ...styles.textContact,
            width: '80%',
          }}>
          o escribirnos al correo{' '}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#2F2FBC',
              fontSize: 12,
            }}>
            contacto@buildingnow.com
          </Text>
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default ContactScreen;
