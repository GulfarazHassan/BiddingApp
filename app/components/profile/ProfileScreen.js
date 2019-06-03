import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, FlatList} from 'react-native';
import ModalComponent from '../others/ModalComponent';
import Label_Field from '../others/Label_Field'


export default class ProfileScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'false',
    };
    this._renderItems = this._renderItems.bind(this);
  }

  _renderItems(fieldsPage){
    if(fieldsPage == 'editProfile'){
      return (
        <View style={styles.modalContent}>
          <Label_Field flexDirection={'column'} label={'First Name:          '} text={'Ahmad'} placeholder={'New Name'}/>
          <Label_Field flexDirection={'column'} label={'Last Name:          '} text={'Sheikh'} placeholder={'New Name'}/>
          <Label_Field flexDirection={'column'} label={'Email:                     '} text={'abc@abc.com'} placeholder={'abc@gmail.com'}/>
          <Label_Field flexDirection={'column'} label={'Country:               '} text={'Canada'} placeholder={'New country'}/>
          <Label_Field flexDirection={'column'} label={'Phone Number:'} text={'00301833232'} placeholder={'0092 301833232'}/>
          <Label_Field flexDirection={'column'} label={'Gender:                 '} text={'Male'} placeholder={'male/female'}/>
          <Label_Field flexDirection={'column'} label={'Birthday:              '} text={'18-12-2000'} placeholder={'18-09-1990'}/>
          <View style={{ paddingTop: 5}}>
            <Button
              onPress={() => alert('Updated!')}
              title="Update"
              color="#841584"
            />
          </View>
        </View>
      )
    }
    else if(fieldsPage == 'editAddress'){
      return(
        <View style={styles.modalContent}>
          <Label_Field flexDirection={'column'} label={'Country:              '} text={'Canada'} placeholder={'Canada'}/>
          <Label_Field flexDirection={'column'} label={'Province:             '} text={'Ontario'} placeholder={'Ontario'}/>
          <Label_Field flexDirection={'column'} label={'City:                       '} text={'Torronto'} placeholder={'Torronto'}/>
          <Label_Field flexDirection={'column'} label={'Address Line 1:'} text={'24 Bryngwyn'} placeholder={'24 Bryngwyn road'}/>
          <Label_Field flexDirection={'column'} label={'Address Line 2:'} text={'Newport road'} placeholder={'Newport road'}/>
          <Label_Field flexDirection={'column'} label={'Address Line 3:'} text={'Cantt'} placeholder={''}/>
          <View style={{ paddingTop: 5}}>
            <Button
              onPress={() => alert('Updated!')}
              title="Update"
              color="#841584"
            />
          </View>
        </View>
      )
    }
    else if(fieldsPage == 'itemsOwned'){
      return(
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <View style={styles.rowContainer}>
              <View style={[styles.rowItems, {paddingHorizontal: 1}]}>
                <Text style={styles.labelText}>ITEM</Text>
              </View>
              <View style={[styles.rowItems, {paddingHorizontal: 5}]}>
                <Text style={styles.labelText}>PRICE</Text>
              </View>
              <View style={[styles.rowItems, {paddingHorizontal: 1}]}>
                <Text style={styles.labelText}>DATE</Text>
              </View>
              <View style={[styles.rowItems, {paddingHorizontal: 1}]}>
                <Text style={styles.labelText}>TIME</Text>
              </View>
            </View>
          </View>
          <View style={styles.listContainer}>
            <FlatList
            data={[
                {title: 'Crisp and sharp TV', imageSource: require('../../assets/tv.jpg'), sold: true, soldString: 'SOLD' ,soldPrice: '$900', date: '01 Jan 2019', time: '12:30'},
                {title: 'Half Sleeves shirt', imageSource: require('../../assets/shirt.jpg'), sold: false, soldString: 'NOT SOLD', soldPrice: '$25.99', date: '01 Dec 2018', time: '02:30'},
                {title: 'Crisp and sharp TV', imageSource: require('../../assets/tv.jpg'), soldPrice: '$900', sold: true, soldString: 'SOLD', date: '21 Mar 2018', time: '10:32'},
                {title: 'Cool iPhone cases', imageSource: require('../../assets/cases.jpg'), soldPrice: '$14.99', sold: true, soldString: 'SOLD', date: '19 Sep 2018', time: '18:22'},
                {title: 'Half Sleeves shirt', imageSource: require('../../assets/shirt.jpg'), sold: false, soldString: 'NOT SOLD', soldPrice: '$25.99', date: '01 April 2018', time: '19:00'},
                {title: 'Crisp and sharp TV', imageSource: require('../../assets/tv.jpg'), soldPrice: '$900', sold: true, soldString: 'SOLD', date: '01 Jan 2018', time: '15:02'},
                {title: 'Crisp and sharp TV', imageSource: require('../../assets/tv.jpg'), soldPrice: '$900', sold: true, soldString: 'SOLD', date: '21 Mar 2018', time: '22:05'},
                {title: 'Cool iPhone cases', imageSource: require('../../assets/cases.jpg'), soldPrice: '$14.99', sold: true, soldString: 'SOLD', date: '19 Sep 2018', time: '19:56'},
                {title: 'Half Sleeves shirt', imageSource: require('../../assets/shirt.jpg'), sold: false, soldString: 'NOT SOLD', soldPrice: '$25.99', date: '01 April 2018', time: '10:45'},
                {title: 'Crisp and sharp TV', imageSource: require('../../assets/tv.jpg'), soldPrice: '$900', sold: true, soldString: 'SOLD', date: '01 Jan 2018', time: '11:30'},
                {title: 'Crisp and sharp TV', imageSource: require('../../assets/tv.jpg'), soldPrice: '$900', sold: true, soldString: 'SOLD', date: '12 Jan 2018', time: '15:30'},
                {title: 'Cool iPhone cases', imageSource: require('../../assets/cases.jpg'), soldPrice: '$14.99', sold: true, oldString: 'SOLD', date: '01 Oct 2018', time: '12:39'},
                {title: 'Extra classy half sleeves shirt', imageSource: require('../../assets/shirt.jpg'), sold: false, soldString: 'NOT SOLD', soldPrice: '$25.99', date: '01 Nov 2018', time: '12:10'},
                {title: 'iPhone cases', imageSource: require('../../assets/cases.jpg'), soldPrice: '$14.99', sold: true, soldString: 'SOLD', date: '01 Aug 2018', time: '16:40'},
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) =>
                <View style={styles.rowContainer}>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.soldPrice}</Text>
                  </View>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.date}</Text>
                  </View>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.time}</Text>
                  </View>
                </View>
            } />
          </View>
        </View>
      )
    }
    else if(fieldsPage == 'creditHistory'){
      return(
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <View style={styles.rowContainer}>
              <View style={[styles.rowItems, {paddingHorizontal: 1}]}>
                <Text style={styles.labelText}>ACTION</Text>
              </View>
              <View style={[styles.rowItems, {paddingHorizontal: 5}]}>
                <Text style={styles.labelText}>QUALITY</Text>
              </View>
              <View style={[styles.rowItems, {paddingHorizontal: 1}]}>
                <Text style={styles.labelText}>DATE</Text>
              </View>
              <View style={[styles.rowItems, {paddingHorizontal: 1}]}>
                <Text style={styles.labelText}>TIME</Text>
              </View>
            </View>
          </View>
          <View style={styles.listContainer}>
            <FlatList
            data={[
                {action: 'Bought', imageSource: require('../../assets/tv.jpg'), quality: 'silver', date: '01 Jan 2019', time: '12:30'},
                {action: 'Spent', imageSource: require('../../assets/shirt.jpg'), quality: 'gold', date: '01 Dec 2018', time: '09:59'},
                {action: 'Spent', imageSource: require('../../assets/tv.jpg'), quality: 'gold', date: '21 Mar 2018', time: '18:21'},
                {action: 'Bought', imageSource: require('../../assets/cases.jpg'), quality: 'gold', date: '19 Sep 2018', time: '12:30'},
                {action: 'Spent', imageSource: require('../../assets/shirt.jpg'), quality: 'silver', date: '01 Apr 2018', time: '22:04'},
                {action: 'Bought', imageSource: require('../../assets/tv.jpg'), quality: 'silver', date: '01 Jan 2018', time: '15:56'},
                {action: 'Bought', imageSource: require('../../assets/tv.jpg'), quality: 'gold', date: '21 Mar 2018', time: '19:22'},
                {action: 'Bought', imageSource: require('../../assets/tv.jpg'), quality: 'silver', date: '01 Jan 2019', time: '12:30'},
                {action: 'Spent', imageSource: require('../../assets/shirt.jpg'), quality: 'gold', date: '01 Dec 2018', time: '09:59'},
                {action: 'Spent', imageSource: require('../../assets/tv.jpg'), quality: 'gold', date: '21 Mar 2018', time: '18:21'},
                {action: 'Bought', imageSource: require('../../assets/cases.jpg'), quality: 'gold', date: '19 Sep 2018', time: '12:30'},
                {action: 'Spent', imageSource: require('../../assets/shirt.jpg'), quality: 'silver', date: '01 Apr 2018', time: '22:04'},
                {action: 'Bought', imageSource: require('../../assets/tv.jpg'), quality: 'silver', date: '01 Jan 2018', time: '15:56'},
                {action: 'Bought', imageSource: require('../../assets/tv.jpg'), quality: 'gold', date: '21 Mar 2018', time: '19:22'},
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) =>
                <View style={styles.rowContainer}>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.action}</Text>
                  </View>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.quality}</Text>
                  </View>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.date}</Text>
                  </View>
                  <View style={styles.rowItems}>
                    <Text style={styles.titleText}>{item.time}</Text>
                  </View>
                </View>
            } />
          </View>
        </View>
      )
    }
    else if(fieldsPage == 'updatePassword'){
      return(
        <View style={[styles.modalContent, {flex: 0.5}]}>
          <Label_Field flexDirection={'column'} label={'Old Password'} text={'Edit'} placeholder={'Enter your old password'}/>
          <Label_Field flexDirection={'column'} label={'New Password'} text={'Edit'} placeholder={'Enter your new password'}/>
          <Label_Field flexDirection={'column'} label={'Confirm Password'} text={'Edit'} placeholder={'Re-neter your new password'}/>
          <View style={{ paddingTop: 5}}>
            <Button
              onPress={() => alert('Updated!')}
              title="Update"
              color="#841584"
            />
          </View>
        </View>
      )
    }
    else if(fieldsPage == 'updatePhone'){
      return(
        <View style={[styles.modalContent, {flex: 0.4}]}>
          <Label_Field flexDirection={'column'} label={'New Phone number'} text={'Edit'} placeholder={'0034 534322'}/>
          <Label_Field flexDirection={'column'} label={'Verification code'} text={'Edit'} placeholder={'Enter code '}/>
          <View style={{ paddingTop: 5}}>
            <Button
              onPress={() => alert('Updated!')}
              title="Confirm"
              color="#841584"
            />
          </View>
        </View>
      )
    }
  }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.contentContainer}>
            <ModalComponent label={'Edit Profile info'} modalComponent={this._renderItems('editProfile') } />
          </View>
          <View style={styles.contentContainer}>
            <ModalComponent label={'Edit Address'} modalComponent={this._renderItems('editAddress') } />
          </View>
          <View style={styles.contentContainer}>
            <ModalComponent label={'Items Owned'} modalComponent={this._renderItems('itemsOwned') } />
          </View>
          <View style={styles.contentContainer}>
            <ModalComponent label={'Credit History'} modalComponent={this._renderItems('creditHistory') } />
          </View>
          <View style={styles.contentContainer}>
            <ModalComponent label={'Update Password'} modalComponent={this._renderItems('updatePassword') } />
          </View>
          <View style={styles.contentContainer}>
            <ModalComponent label={'Update Phone Number'} modalComponent={this._renderItems('updatePhone') } />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
  },
  headingContainer:{
    flex: 0.1
  },
  listContainer:{
    flex: 0.9
  },
  modalContent: {
    flex:1,
    marginVertical: 5,
    marginHorizontal: 25,
  },
  rowContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
    margin: 5,
    backgroundColor: '#ededed',
  },
  rowItems:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  titleText: {
    fontSize: 15,
  },
  labelText: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});
