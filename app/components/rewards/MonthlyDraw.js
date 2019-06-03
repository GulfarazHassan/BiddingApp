import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RewardsListingComponent from './RewardsListingComponent';


const data = [
  {title: 'Used Samsung TV', imageSource: require('../../assets/tv.jpg'), footerValue: 'Remaining Time: 2 hours'},
]


export default class MonthlyDraw extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <RewardsListingComponent numColumns={1} data={data} height={200} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Chances: 5</Text>
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
