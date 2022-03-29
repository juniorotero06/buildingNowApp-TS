import React from 'react';
import { styles, windowHeight, windowWidth } from '../styles/styles';
import { ImageBackground, TextInput, Text, Image, TouchableOpacity, Modal, Alert, View, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';
const background = 'https://buildingnow.co/assets-building-app/images/background_grey.png';

const ContactScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };
  const hideModal = () => setVisible(false);
  const { t, i18n } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      asunto: '',
      mensaje: '',
    },
  });

  const onSubmit = async () => {
    await axios
      .post('https://email-gaira.dinolabs.dev/public/send-email', control._formValues)
      .then(() => showModal())
      .catch(error => {
        console.error(error);
      });
    reset({
      name: '',
      email: '',
      asunto: '',
      mensaje: '',
    });
  };

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: background }}
        resizeMode="cover"
        style={{
          ...styles.image,
          backgroundColor: 'white',
          height: '140%',
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
            pattern:
              /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setVisible(!visible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ ...styles.modalText, fontSize: 20 }}>{t('alertTitle')}</Text>
              <Text style={styles.modalText}>{t('alertBody')}</Text>
              <Pressable style={[styles.button1, styles.buttonClose]} onPress={() => setVisible(!visible)}>
                <Text style={styles.textStyle}>Ok!!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={handleSubmit(onSubmit)} disabled={false}>
          {i18n.language === 'es' ? (
            <Image
              source={{ uri: 'https://buildingnow.co/assets-building-app/images/bnEnviar.png' }}
              style={styles.buttonImg2}
            />
          ) : (
            <Image
              source={{ uri: 'https://buildingnow.co/assets-building-app/images/btn_send.png' }}
              style={styles.buttonImg2}
            />
          )}
        </TouchableOpacity>

        <Text
          style={{
            ...styles.textContact,
            width: '80%',
            marginBottom: 0,
            marginTop: windowHeight * 0.001,
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
    </ScrollView>
  );
};

export default ContactScreen;
