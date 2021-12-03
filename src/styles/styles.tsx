import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

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
    height: '20%',
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
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F2A01F',
    padding: 10,
    borderRadius: 20,
    width: '85%',
    marginTop: 20,
    elevation: 10,
    shadowColor: '#000',
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
  },
  logoWelcome: {
    resizeMode: 'center',
  },
  //AppBar Styles
  backIcon: {
    width: 26,
    height: 26,
    marginLeft: windowWidth * 0.02,
  },
  appbarContentContainer: {
    flexDirection: 'row',
    paddingTop: windowHeight * 0.02,
    paddingBottom: windowHeight * 0.05,
    paddingHorizontal: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appbarTitle: {
    color: 'black',
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
  },
  //tabNavigator
  libraryIcon: {
    width: 26,
    height: 26,
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
});

export {styles, windowHeight, windowWidth};
