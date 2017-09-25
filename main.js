import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Home from './src/drawer/home';
import Ratings from './src/drawer/ratings';
import Playground from './src/drawer/playground';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./src/images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <DrawerItems {...props} />
  </View>
);

export default MainRoot = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    },
    Ratings: {
      path: '/ratings',
      screen: Ratings,
    },
    Playground: {
      path: '/playground',
      screen: Playground
    }
  },
  {
    initialRouteName: 'Home', 
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
  }
);