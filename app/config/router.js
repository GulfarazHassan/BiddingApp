import React from 'react';
import { createMaterialTopTabNavigator, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from '../components/login/LoginScreen';
import SignUpScreen from '../components/login/SignUpScreen';
import SignupVerificationScreen from '../components/login/SignupVerificationScreen';
import ForgotPassswordScreen from '../components/login/ForgotPassswordScreen';
import AuthLoadingScreen from '../components/login/AuthLoadingScreen';

import RewardsScreen from '../components/rewards/RewardsScreen';
import GoldScreen from '../components/rewards/GoldScreen';
import SilverScreen from '../components/rewards/SilverScreen';
import WeeklyDraw from '../components/rewards/WeeklyDraw';
import MonthlyDraw from '../components/rewards/MonthlyDraw';

import ActiveListingsScreen from '../components/listings/ActiveListingsScreen';
import SoldListingsScreen from '../components/listings/SoldListingsScreen';
import CreateListingScreen from '../components/listings/CreateListingScreen';
import BiddingScreen from '../components/listings/BiddingScreen';


import BalanceScreen from '../components/balance/BalanceScreen';

import ProfileScreen from '../components/profile/ProfileScreen';
import SettingsScreen from '../components/settings/SettingsScreen';
import SocialMediaScreen from '../components/settings/SocialMediaScreen';
import ContactUsScreen from '../components/settings/ContactUsScreen';
import TermsAndConditionsScreen from '../components/settings/TermsAndConditionsScreen';
import AboutUsScreen from '../components/settings/AboutUsScreen';
import RateUsScreen from '../components/settings/RateUsScreen';
import ReportProblemScreen from '../components/settings/ReportProblemScreen';
import ChangeLanguageScreen from '../components/settings/ChangeLanguageScreen';


import LogoComponent from '../components/others/LogoComponent';
import PlaceholderScreen from '../components/PlaceholderScreen';

console.disableYellowBox = true;

//***************AUTH STACK NAVIGATOR*********************
const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Sign in',
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign up',
    },
  },
  SignupVerificationScreen: {
    screen: SignupVerificationScreen,
    navigationOptions: {
      title: 'Verify',
    },
  },
  ForgotPassswordScreen: {
    screen: ForgotPassswordScreen,
    navigationOptions: {
      title: 'Forgot password',
    },
  }
});

//***************APP STACK NAVIGATOR*********************
export const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
    },
  },
});

export const ActiveListingsStack = createStackNavigator({
  Activelistings: {
    screen: ActiveListingsScreen,
    navigationOptions: {
      // title: 'Active Listings',
      header: null,
    },
  },
  CreateListing: {
    screen: CreateListingScreen,
    navigationOptions: {
       title: 'Create a New Listing',
      header: null,
    },
  },
  BiddingScreen: {
    screen: BiddingScreen,
    navigationOptions: {
    },
  },
});

export const SoldListingsStack = createStackNavigator({
  SoldListings: {
    screen: SoldListingsScreen,
    navigationOptions: {
      // title: 'Active Listings',
      header: null,
    },
  },
  CreateListing: {
    screen: CreateListingScreen,
    navigationOptions: {
       title: 'Create a New Listing',
      header: null,
    },
  },
  BiddingScreen: {
    screen: BiddingScreen,
    navigationOptions: {
    },
  },
});

ActiveListingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

SoldListingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const RewardsStack = createStackNavigator({
  Rewards: {
    screen: RewardsScreen,
    navigationOptions: {
      title: 'Your Rewards',
    },
  },
  GoldScreen: {
    screen: GoldScreen,
    navigationOptions: {
        title: 'Gold Screen',
      },
  },
  SilverScreen: {
    screen: SilverScreen,
    navigationOptions: {
        title: 'Silver Screen',
      },
  },
  WeeklyDraw: {
    screen: WeeklyDraw,
    navigationOptions: {
        title: 'Weekly Draw',
      },
  },
  MonthlyDraw: {
    screen: MonthlyDraw,
    navigationOptions: {
        title: 'Monthly Draw',
      },
  },
},{
 }
);

export const BalanceStack = createStackNavigator({
  Balance: {
    screen: BalanceScreen,
    navigationOptions: {
      title: 'Your Points Balance',
    },
  },
});
export const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
    },
  },
});





//***************DRAWER NAVIGATOR*********************
const SettingsDrawer = createDrawerNavigator({
  SocialMedia: {
    screen: SocialMediaScreen,
      navigationOptions: {
        title: 'Social Media',
      },
  },
  ChangeLanguage: {
    screen: ChangeLanguageScreen,
      navigationOptions: {
        title: 'Change language',
      },
  },
  ContactUs: {
    screen: ContactUsScreen,
      navigationOptions: {
        title: 'Contact Us',
      },
  },
  AboutUs: {
    screen: AboutUsScreen,
      navigationOptions: {
        title: 'About us',
      },
  },
  RateUs: {
    screen: RateUsScreen,
      navigationOptions: {
        title: 'Rate Us',
      },
  },
  ReportProblem: {
    screen: ReportProblemScreen,
      navigationOptions: {
        title: 'Report a problem',
      },
  },
  TermsAndConditions: {
    screen: TermsAndConditionsScreen,
      navigationOptions: {
        title: 'Terms and conditions',
      },
  },
  LogOut: {
    screen: LogoComponent,
      navigationOptions: {
        title: 'Log out',
      },
  }
});





//***************LISTINGS Tab NAVIGATOR*********************
const ListingsTopTab = createMaterialTopTabNavigator({
  Active: {
  screen: ActiveListingsStack
  },
  Finished: {
  screen: SoldListingsStack
  },
  //Add in more tabs here
},
{
  initialRouteName: 'Active',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#F8F8F8', // active icon color
    style: {
        backgroundColor: '#171F33' // TabBar background
    },
    labelStyle: {
      fontSize: 15,
    }
  }
});




//***************APP TAB NAVIGATOR*********************
const RootTabNav = createBottomTabNavigator({
  Profile:   {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="user-o" color={tintColor} size={24}
        />
      )
    },
  },
  Rewards:   {
    screen: RewardsStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="gift" color={tintColor} size={24}
        />
      )
    },
  },
  Lisitings: {
    screen: ListingsTopTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="list-alt" color={tintColor} size={24}
        />
      )
    },
  },
  Balance:   {
    screen: BalanceStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="btc" color={tintColor} size={24}
        />
      )
    },
  },
  Settings:  {
    screen: SettingsDrawer,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="gears" color={tintColor} size={24}
        />
      )
    },
  },
}, {
  initialRouteName: 'Lisitings',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#F8F8F8', // active icon color
    style: {
        backgroundColor: '#171F33' // TabBar background
    },
    labelStyle: {
      fontSize: 15,
    }
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootTabNav,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
