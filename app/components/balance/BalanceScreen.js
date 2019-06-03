import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BalanceScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={[
            {price: '$4.99', points: '5' },
            {price: '$9.99', points: '10' },
            {price: '$14.99', points: '15' },
            {price: '$19.99', points: '20' },
            {price: '$24.99', points: '25' },
            {price: '$29.99', points: '30' },
            {price: '$34.99', points: '35' },
            {price: '$39.99', points: '40' },
            {price: '$44.99', points: '45' },
            {price: '$49.99', points: '50' },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>
            <TouchableOpacity style={styles.listCardContainer}>

              <View style={styles.listCardInnerContainer}>

                <View style={styles.header}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item.price}</Text>
                  </View>
                </View>

                <View style={styles.logoContainer}>
                  <Icon name="btc" color={'#4a36db'} size={70} />
                </View>

                <View style={styles.footerContainer}>
                  <Text style={styles.footerText}>{item.points} points</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listCardInnerContainer:{
    flex: 1,
  },
  listCardContainer: {
    flex: 1,
    flexDirection: 'row',
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
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#aaaaaa',
  },
  header: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderBottomColor: '#615b99',
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  titleContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
  },
  footerContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: '#aaaaaa',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
});
