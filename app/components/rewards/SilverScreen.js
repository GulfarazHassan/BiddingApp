import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RewardsListingComponent from './RewardsListingComponent';


const data = [
  {title: 'Scratchless phone', imageSource: require('../../assets/phone.jpg'), footerValue: 'points required: 30'},
  {title: 'New Original leather jacket', imageSource: require('../../assets/leather.jpg'), footerValue: 'points required: 80'},
  {title: 'Washing machine for your house', imageSource: require('../../assets/washing.jpg'), footerValue: 'points required: 50'},
  {title: 'Used Samsung TV', imageSource: require('../../assets/tv.jpg'), footerValue: 'points required: 25'},
]


export default class SilverScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <RewardsListingComponent numColumns={2} data={data} height={200} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Tickets earned: 6</Text>
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
