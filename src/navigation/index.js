import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home';
import Details from '../screens/Details';
const MainApp = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home'
      },
      path: 'home'
    },
    Details: {
      screen: Details,
      navigationOptions: {
        headerTitle: 'Details'
      },
      path: 'details/:userId'
    }
  })
  export default () => {
    const prefix = 'myapp://'
    const AppContainer = createAppContainer(MainApp);
    return <AppContainer uriPrefix={prefix} />
  }