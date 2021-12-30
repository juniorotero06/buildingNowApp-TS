import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const colors = {
  nero: '#262626',
  persianBlue: '#2F2FBC',
  white: '#FFFFFF',
  orange: '#FFAA00',
};

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
    width: windowWidth * 0.9,
    height: windowHeight * 0.22,
    marginBottom: -(windowHeight * 0.035),
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
    width: '60%',
    resizeMode: 'center',
  },
  //AppBar Styles
  backIcon: {
    width: 26,
    height: 26,
  },
  appBarContentContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    paddingVertical: windowHeight * 0.02,
    textAlign: 'center',
  },
  appBarBackButton: {
    left: windowWidth * 0.075,
    position: 'absolute',
    zIndex: 2,
  },
  appBarTitle: {
    color: colors.nero,
    fontFamily: 'Quicksand-Bold',
    fontSize: windowWidth * 0.07,
    paddingBottom: 5,
  },
  appBarTitleLine: {
    width: 50,
    height: 3,
    backgroundColor: colors.orange,
    borderRadius: 20,
  },
  //tabNavigator
  libraryIcon: {
    width: windowWidth * 0.09,
    height: windowHeight * 0.05,
    resizeMode: 'center',
  },
  //howFunction Styles
  imgHf: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.17,
    resizeMode: 'center',
    marginHorizontal: windowWidth * 0.01,
  },
  textPaso: {
    flexDirection: 'row',
    fontSize: windowWidth * 0.04,
    color: 'black',
    marginBottom: windowHeight * 0.06,
    marginLeft: windowWidth * 0.25,
  },
  textSubtitle: {
    flexDirection: 'row',
    fontSize: windowWidth * 0.08,
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
    alignItems: 'center',
    borderRadius: 8,
    flexWrap: 'wrap',
    padding: 10,
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
    padding: 3,
    backgroundColor: 'white',
    borderColor: '#2F2FBC',
    borderRadius: 5,
    color: 'black',
  },
  textContact: {
    fontSize: windowWidth * 0.03,
    color: '#2F2FBC',
    marginBottom: windowHeight * 0.03,
    textAlign: 'center',
    width: '70%',
  },
  buttonImg: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.3,
    resizeMode: 'center',
    marginTop: -(windowHeight * 0.09),
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
    fontSize: windowWidth * 0.05,
    textAlign: 'center',
    width: '100%',
  },
  switchSelector: {
    width: '35%',
    top: windowHeight * 0.1,
    marginLeft: windowWidth * 0.6,
  },
  tabBar: {
    backgroundColor: colors.persianBlue,
    height: windowHeight * 0.1,
    borderTopWidth: 0,
    shadowColor: 'transparent',
  },
  tabBarItem: {
    marginVertical: 10,
  },
  tabBarLabel: {
    fontFamily: 'Quicksand-Medium',
    fontSize: windowWidth * 0.03,
  },
});

export { styles, windowHeight, windowWidth, colors };
