import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import styles from "../../styles/GlobalStyles";
import {
  connectFirebase,
  getAllOfCollection,
  getData
} from "../../backend/firebase/utility";

export default class ActiveListingsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      userName: "",
      userPoints: "",
      docIds: [],
      data: []
    };
    this.loadListings = this.loadListings.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    connectFirebase();
    this.props.navigation.addListener("willFocus", () => {
      this.loadListings();
      this.getUserData();
    });
  }

  async loadListings() {
    await this.toggleLoader();
    let listingsData = await getAllOfCollection("Listings");
    let activeListings = [];
    let activeListingIds = [];
    for (let i = 0; i < listingsData[0].length; i++) {
      if (listingsData[0][i].active) {
        listingsData[0][i].key = listingsData[1][i];
        activeListings.push(listingsData[0][i]);
      }
    }
    this.setState({
      data: activeListings,
      docIds: activeListingIds
    });
    console.log("This is output");
    console.log(listingsData);
    await this.toggleLoader();
  }

  async getUserData() {
    let userData = await getData("Users", "uHXxggPAzoJjHXasBapt");
    this.setState({ userName: userData.name, userPoints: userData.points });
  }

  toggleLoader() {
    this.setState({ loader: !this.state.loader });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {this.state.loader ? (
            <ActivityIndicator size='large' color='#0000ff' />
          ) : null}
          <FlatList
            numColumns={2}
            data={this.state.data}
            extraData={this.state}
            onRefresh={() => this.loadListings()}
            refreshing={this.state.loader}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.listCardContainer}
                onPress={() =>
                  navigate("BiddingScreen", {
                    image: item.imageUrl,
                    title: item.title,
                    minPrice: item.min_price,
                    timeRemaining: item.remaining_time,
                    pointsRequired: item.points_required,
                    userName: this.state.userName,
                    userPoints: this.state.userPoints,
                    docId: item.key
                  })
                }>
                <View style={styles.listCardInnerContainer}>
                  <View style={styles.header}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                    <View>
                      <Text style={styles.priceText}>
                        Original Pirce: {item.original_price}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.imageContainer}>
                    <Image
                      style={{ width: "100%", height: 200 }}
                      source={{ uri: item.imageUrl }}
                    />
                  </View>

                  <View style={styles.footerContainer}>
                    <View>
                      <Text style={styles.footerText}>
                        {item.remaining_time}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.footerText}>{item.min_price}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
