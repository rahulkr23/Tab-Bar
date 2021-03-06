import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import SearchIcon from '@material-ui/icons/Search';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ShramIn HomeScreen</Text>
      </View>
    )
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ShramIn ProfileScreen</Text>
      </View>
    )
  }
}

class FindJobScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ShramIn Find JobScreen</Text>
      </View>
    )
  }
}

class PopularScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ShramIn Popular JobScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={30} name={'ios-home'} />
          </View>
        ),
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={30} name={'ios-person'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#990000' },
      }
    },
    FindJobs: {
      screen: FindJobScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={30} name={'ios-search'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    Popular: {
      screen: PopularScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={30} name={'ios-rocket'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' },
      }
    },
  },
  {
    initialRouteName: 'Home',
     activeColor: '#ffffff',
     inactiveColor: '#bda1f7',
   barStyle: { backgroundColor: '#6948f4' },
  }
);

export default createAppContainer(TabNavigator);
