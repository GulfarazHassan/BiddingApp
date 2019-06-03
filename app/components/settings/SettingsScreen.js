import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SettingsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      visibility: false,
    });
    this.props.navigation.openDrawer();
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
        <Text>Settings</Text>
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
  },
});
