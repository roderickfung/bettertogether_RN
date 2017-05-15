import { Dimensions } from 'react-native';
const {screenHeight: screenHeight} = Dimensions.get('window');

export default {
  errorText: {
    color: '#D25D62',
    fontSize: 12,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#D25D62'
  },
  content: {
    flex: 1,
    // backgroundColor: '#D25D62,'
  },
  title: {
    color: '#FFF'
  },
  logoContainer:{
    flex: 1,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 100
  },
  item:{
    marginBottom: 10,
    borderRadius: 5
  },
  input: {
    height: 40,
    fontSize: 14,
  },
  form: {
    padding: 20,
  },
  btn:{
    backgroundColor: '#D25D62',
    margin: 20,
  },
  lstbtn:{
    backgroundColor: '#D25D62'
  },
  btnText: {
    color: '#FFF',
    fontSize: 14,
  },
  list:{

  },
  footer: {
    flex: 1
  }
}
