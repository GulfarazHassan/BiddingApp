import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RewardsScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => navigate('GoldScreen')} style={styles.contentContainer}>
            <Icon name="btc" color={'#4a36db'} size={70} />
            <Text style={styles.text}>GOLD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('SilverScreen')} style={styles.contentContainer}>
            <Icon name="btc" color={'#4a36db'} size={70} />
            <Text style={styles.text}>SILVER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => navigate('WeeklyDraw')} style={styles.contentContainer}>
            <Icon name="spinner" color={'#4a36db'} size={100} />
            <Text style={styles.text}>WEEKLY DRAW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('MonthlyDraw')} style={styles.contentContainer}>
            <Icon name="spinner" color={'#4a36db'} size={100} />
            <Text style={styles.text}>MONTHLY DRAW</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer:{
    flex: 1,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0c007a',
    shadowColor: '#1700ed',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    margin: 5,
    backgroundColor: '#f2f2f2',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
});
