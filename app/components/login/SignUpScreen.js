import React, { Component } from "react";
import {Keyboard, Text, ScrollView, StyleSheet, View, Dimensions, Platform, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Button, TouchableOpacity} from 'react-native';


const appId = "1047121222092614"

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      country: '',
      phone: '',
      email: '',
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.containerView}>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Bidding App</Text>
              <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} />
              <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} />
              <TextInput placeholder="Country" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(country) => this.setState({country})} value={this.state.country} />
              <TextInput placeholder="Phone number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(phone) => this.setState({phone})} value={this.state.phone} />
              <TextInput placeholder="Email address" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(email) => this.setState({email})} value={this.state.email} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <TextInput placeholder="Confirm password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <View style={styles.loginButton}>
                <Button
                  onPress={() => navigate('SignupVerificationScreen',
                    {
                      firstName: this.state.firstName,
                      lastName: this.state.lastName,
                      email: this.state.email,
                      country: this.state.country,
                      phone: this.state.phone,
                    }
                  )}
                  title="Sign up"
                  color={Platform.OS === 'ios' ? '#ffffff' : '#257BC4'}
                />
              </View>
              <TouchableOpacity onPress={() => navigate('TermsAndConditionsScreen')} style={styles.termsConditionsContainers}>
                <Text style={{color: 'grey'}}>Terms and conditions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    color: 'black',
    marginTop: 20,
    marginBottom: Dimensions.get('window').height/20,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginHorizontal: Dimensions.get('window').width/10,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: Platform.OS === 'ios' ? '#257BC4' : 'rgba(0,0,0,0)',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Dimensions.get('window').width/10,
    marginTop: 20,
    marginHorizontal: 60
  },
  termsConditionsContainers:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
