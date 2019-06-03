import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RewardsListingComponent from './RewardsListingComponent';


const data = [
  {title: 'Expensive rolex watch', imageSource: require('../../assets/watch.jpg'), footerValue: 'points required: 50'},
  {title: 'Vintage pot from 2500 B.C', imageSource: require('../../assets/pot.jpg'), footerValue: 'points required: 70'},
  {title: 'Old school car', imageSource: require('../../assets/car.jpg'), footerValue: 'points required: 100'},
  {title: 'Pablo Picasso painting', imageSource: require('../../assets/painting.jpg'), footerValue: 'points required: 125'},
]


export default class GoldScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <RewardsListingComponent numColumns={2} data={data} height={200} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Tickets earned: 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 0.95,
  },
  footer: {
    flex: 0.05,
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 3,
    backgroundColor: '#F5FCFF'
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});
