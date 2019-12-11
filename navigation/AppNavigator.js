import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import 'react-native-gesture-handler';

import Movies from '../screens/Movies';
import Booking from '../screens/Booking';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator({
  Login,
  Signup,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

const AppStack = createBottomTabNavigator(
  {
      Movies,
      // Booking,
      Profile,
    },
    {
      defaultNavigationOptions:({navigation}) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const {routeName} = navigation.state;
          let iconName;
          switch(routeName){
            case 'Movies': iconName = "md-home";break;
            // case 'Booking': iconName = "md-add-circle";break;
            case 'Profile': iconName = "md-person";break;
          }
          return (<Ionicons name={iconName} size={32} color={tintColor} />)
        },tabBarLabel: <View />
      }),
      tabBarOptions:{
        activeTintColor: '#3366ff',
        inactiveTintColor: 'gray',
      }
    }
)



const App = createSwitchNavigator(
  {
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  App: AppStack,
  Booking
},{
  initialRouteName: 'AuthLoading',
}
);

  export default createAppContainer(App);