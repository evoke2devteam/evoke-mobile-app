import React, {Component} from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, Button, ProgressBarAndroid } from 'react-native';
import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ProfileView from './ProfileView';
import MisionListView from './MisionListView';
import MisionDetailView from './MisionDetailView';


export default createMaterialTopTabNavigator({
    Profile:{screen:ProfileView},
    Missions:{screen:MisionListView},
    Notification:{screen:MisionDetailView},
   

},{
    initialRouteName:'Profile',
    order:['Profile','Missions','Notification'],
    activeTintColor:'blue',
})

AppRegistry.registerComponent('TabNavigator', () => TapNavigator);