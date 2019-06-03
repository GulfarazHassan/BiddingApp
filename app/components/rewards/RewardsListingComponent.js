import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native';


export default class RewardsListingComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={this.props.numColumns}
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>
            <TouchableOpacity style={styles.listCardContainer}>
              <View style={styles.listCardInnerContainer}>

                <View style={styles.header}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>
                </View>

                <View style={styles.imageContainer}>
                  <Image
                    style={{width: '100%', height: this.props.height}}
                    source={item.imageSource}
                  />
                </View>

                <View style={styles.footerContainer}>
                  <Text style={styles.footerText}>{item.footerValue}</Text>
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
    borderColor: '#adadad',
    shadowColor: '#000000',
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
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  titleContainer:{
    flex: 1,
  },
  shareIconContainer:{
    flex: 0.1,
  },
  imageContainer: {
    flex: 0.5,
    backgroundColor: '#aaaaaa',
  },
  footerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: '#aaaaaa',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 15,
  },
});
