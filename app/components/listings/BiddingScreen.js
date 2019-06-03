import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TextInput,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connectFirebase, saveData } from "../../backend/firebase/utility";

export default class BiddingScreen extends Component<Props> {
  refreshId = 0;
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      clear: false,
      bids: [],
      bidAmount: "",
      timeRemaining: this.props.navigation.state.params.timeRemaining,
      userPoints: this.props.navigation.state.params.userPoints
    };
    this.onPress = this.onPress.bind(this);
    this.countdown = this.countdown.bind(this);
    this.timer = this.timer.bind(this);
    this.storeDataSold = this.storeDataSold.bind(this);
    this.storeDataNotsold = this.storeDataNotsold.bind(this);
    this.countdown();
  }

  componentDidMount() {
    connectFirebase();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  async onPress() {
    if (this.state.timeRemaining == 0) {
      alert("This bid is already finished");
      return 0;
    }
    const copieds = [...this.state.bids];
    const copied = [this.state.bidAmount].concat(copieds);
    await this.setState({
      bids: copied,
      userPoints:
        this.state.userPoints -
        this.props.navigation.state.params.pointsRequired
    });
    saveData("Users", "uHXxggPAzoJjHXasBapt", {
      points: this.state.userPoints
    });
    // clearInterval(refreshId);
    clearInterval(refreshId);

    this.countdown();
  }

  countdown() {
    this.setState({ timeRemaining: 15, clear: true });
    refreshId = setInterval(this.timer, 1000);
  }

  // This is function counting interval
  timer() {
    this.setState(previousState => {
      return { timeRemaining: previousState.timeRemaining - 1 };
    });
    //bidding countdown finished
    if (this.state.timeRemaining == 0) {
      clearInterval(refreshId);
      //sold
      if (
        parseInt(this.state.bidAmount) >
        parseInt(this.props.navigation.state.params.minPrice)
      ) {
        // saveData("Listings", this.props.navigation.state.params.docId, {
        //   sold: true,
        //   active: false,
        //   sold_price: this.state.bidAmount
        // });

        this.storeDataSold();
        alert("Item Sold");
      }
      //not sold
      else {
        saveData("Users", "uHXxggPAzoJjHXasBapt", {
          points:
            parseInt(this.state.userPoints) +
            parseInt(this.props.navigation.state.params.pointsRequired)
        });
        this.setState({
          userPoints:
            parseInt(this.state.userPoints) +
            parseInt(this.props.navigation.state.params.pointsRequired)
        });
        this.storeDataNotsold();
        alert(
          "Item Not Sold as the minimum price was not matched. Your points have been added back to your account"
        );
      }
    }
  }

  async storeDataSold() {
    await saveData("Listings", this.props.navigation.state.params.docId, {
      sold: true,
      active: false,
      sold_price: this.state.bidAmount
    });
  }

  async storeDataNotsold() {
    await saveData("Listings", this.props.navigation.state.params.docId, {
      sold: false,
      active: false
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{ width: "100%", height: 250 }}
          source={{ uri: this.props.navigation.state.params.image }}
        />

        <Text style={styles.titleText}>
          Min Price: {this.props.navigation.state.params.minPrice}
        </Text>
        {/* <Text style={styles.titleText}>
          Points Required: {this.props.navigation.state.params.pointsRequired}
        </Text> */}
        <Text style={styles.titleText}>
          Points Available: {this.state.userPoints}
        </Text>
        <Text style={styles.timeText}>
          Time Remaining: {this.state.timeRemaining} seconds
        </Text>

        <View style={styles.bidsContainer}>
          <FlatList
            data={this.state.bids}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Text style={styles.titleText2}>
                {this.props.navigation.state.params.userName}: {item}{" "}
              </Text>
            )}
          />
        </View>

        <TextInput
          placeholder={"Enter your bid here..."}
          style={styles.textInput}
          onChangeText={text => this.setState({ bidAmount: text })}
          value={this.state.bidAmount}
        />

        <View style={styles.pickupButtonContainer}>
          <Button onPress={() => this.onPress()} title='BID' />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    flex: 0.2,
    flexDirection: "row",
    margin: 10
  },
  userAvatar: {
    flex: 0.15,
    justifyContent: "center"
  },
  title: {
    flex: 0.85,
    justifyContent: "center"
  },
  bidsContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 10
  },
  pickupTimeContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 10
  },
  textInput: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#adadad",
    fontSize: 18,
    paddingLeft: 20,
    marginHorizontal: "20%"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  },
  titleText2: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  timeText: {
    textAlign: "center",
    color: "#4f4f4f",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  dateText: {
    color: "#333333",
    marginBottom: 5,
    marginLeft: 10
  },
  boldText: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10
  },
  pickupButtonContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingVertical: 10,
    marginHorizontal: 25
  }
});
