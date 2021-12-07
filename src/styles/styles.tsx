import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  //Home Screen Styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    height: '15%',
    backgroundColor: '#fff',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: '#333',
  },
  logo: {
    width: '100%',
    resizeMode: 'center',
  },
  backgroundButton: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // flexDirection: 'row',
    // backgroundColor: '#F2A01F',
    // padding: 10,
    // borderRadius: 20,
    // width: '85%',
    // marginTop: 20,
    // elevation: 10,
    // shadowColor: '#000',
    width: 350,
    height: 180,

    marginBottom: windowHeight * -0.05,
  },
  textButton: {
    flexDirection: 'row',
    fontSize: 30,
    flexShrink: 1,
    color: 'white',
  },
  icon: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
  //Welcome Screen
  containerWelcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '180%',
    width: '100%',
  },
  logoWelcome: {
    resizeMode: 'center',
  },
  //AppBar Styles
  backIcon: {
    width: 26,
    height: 26,
  },
  appbarContentContainer: {
    flexDirection: 'row',
    paddingTop: windowHeight * 0.04,
    paddingBottom: windowHeight * 0.009,
    paddingHorizontal: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  appbarTitle: {
    color: 'black',
    fontSize: windowWidth * 0.07,
    fontWeight: 'normal',
  },
  //tabNavigator
  libraryIcon: {
    width: 30,
    height: 30,
  },
  //howFunction Styles
  imgHf: {
    width: 150,
    height: 150,
    marginHorizontal: windowWidth * 0.01,
  },
  textPaso: {
    flexDirection: 'row',
    fontSize: 20,
    color: 'black',
    marginBottom: windowHeight * 0.06,
    marginLeft: windowWidth * 0.25,
  },
  textSubtitle: {
    flexDirection: 'row',
    fontSize: 30,
    color: '#F2A01F',
    fontWeight: 'bold',
  },
  howFContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    width: '75%',
    marginTop: windowHeight * 0.005,
  },
  // Linear Gradiant Style
  cardButtonGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: windowHeight * 0.13,
    marginTop: windowHeight * -0.07,
    // alignItems: 'center',
    // borderRadius: 8,
    // flexWrap: 'wrap',
    // padding: 10,
  },
  //Input styles
  containerForm: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: windowHeight * 0.14,
  },
  input: {
    width: '80%',
    height: windowHeight * 0.04,
    margin: 6,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#2F2FBC',
    borderRadius: 5,
    color: 'black',
  },
  textContact: {
    fontSize: 12,
    color: '#2F2FBC',
    marginBottom: windowHeight * 0.03,
    textAlign: 'center',
    width: '70%',
  },
  buttonImg: {
    width: 130,
    height: 130,
    borderRadius: 35,
    marginTop: -20,
  },
  ////////////////
  fwSemiBold: {
    fontFamily: 'Quicksand-SemiBold',
  },
  cardButton: {
    width: '80%',
    position: 'absolute',
    bottom: -(windowHeight * 0.09),
  },
  cardButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
});

export { styles, windowHeight, windowWidth };
