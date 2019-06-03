import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ChangeLanguageScreen extends Component<Props> {
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
        <TouchableOpacity onPress={() => { alert('English selected!'); }} style={styles.contentContainer}>
          <Text style={styles.text}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { alert('Arabic selected'); }} style={styles.contentContainer}>
          <Text style={styles.text}>Arabic</Text>
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
