import React, {useState} from 'react';
import {styles, windowHeight, windowWidth} from '../styles/styles';
import {
  ImageBackground,
  ScrollView,
  TextInput,
  Text,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const background = require('../assets/images/background_grey.png');

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{...styles.image, backgroundColor: 'white'}}>
      <SafeAreaView style={styles.containerForm}>
        <Text style={styles.textContact}>
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
        <Text
          style={{
            ...styles.textContact,
            width: '80%',
            marginBottom: 0,
            marginTop: windowHeight * 0.15,
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

        <Text style={{...styles.textContact, width: '80%'}}>
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
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.1, 1]}
          colors={['#2F2FBC', '#9310ea']}
          style={{
            ...styles.cardButtonGradient,
            marginBottom: windowHeight * 0.18,
            marginTop: windowHeight * -0.2,
            width: '55%',
          }}>
          <Text style={{...styles.textButton, fontSize: windowWidth * 0.05}}>
            Enviar
          </Text>
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ContactScreen;
