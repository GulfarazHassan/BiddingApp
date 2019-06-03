import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ContactUsScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <Icon name="navicon" color={'#71a1ed'} size={40}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { alert('Email app will open'); }} style={styles.contentContainer}>
          <Text style={styles.text}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { alert('Whatsapp number will be displayed'); }} style={styles.contentContainer}>
          <Text style={styles.text}>Whatsapp</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 0.1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  contentContainer: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
});
