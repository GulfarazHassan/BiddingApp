import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput, BackHandler,
  Dimensions, SafeAreaView, TouchableOpacity
} from 'react-native';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      loader: false
    });
    this.onLoginFunc = this.onLoginFunc.bind(this);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  onLoginFunc() {
    //login('email', 'password');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.container}>

            <View style={styles.logoContainer}>
              <Image style={styles.logo} resizeMode="contain" source={require('../../assets/logo.png')} />
              <Image style={styles.logo} resizeMode="contain" source={require('../../assets/caption.png')} />
            </View>

            <View style={styles.center}>
              <TextInput placeholder='Email or phone number' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput placeholder='Password' secureTextEntry returnKeyType='go'
                keyboardAppearance='default' style={styles.textbox}
                onChangeText={password => this.setState({ password })}
              />
              <Button block style={styles.button} onPress={this.onLoginFunc}>
                <Text style={{ fontSize: 15 }}>Sign in</Text>
              </Button>
              <TouchableOpacity onPress={() => navigate('ForgotPassswordScreen')}>
                <Text style={{ fontSize: 15, color: '#6b6b6b' }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>


            <View style={styles.row}>
              <Button block style={styles.button2} onPress={() => navigate('SignUpScreen')}>
                <Text style={{ fontSize: 15 }}>Sign up</Text>
              </Button>
              <Button block style={styles.button2} onPress={this.onLoginFunc}>
                <Text style={{ fontSize: 15 }}>As a guest</Text>
              </Button>
            </View>

            {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

          </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  center: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginTop: 30
  },
  textbox: {
    fontSize: 18,
    textAlign: 'left',
    width: '80%',
    paddingHorizontal: 10,
    borderColor: '#c0c3c3',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    color: "#000000",
    marginBottom: '3%',
  },
  logo: {
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').height/10,
  },
  button: {
    backgroundColor: '#257BC4',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
    marginBottom: '2%',
  },
  button2: {
    alignSelf:'flex-end',
    backgroundColor: '#257BC4',
    width: '40%',
    height: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
  },
});
