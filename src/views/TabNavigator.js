import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, Button, ProgressBarAndroid } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ProfileView from './ProfileView';
import SocialView from './SocialView';
import MisionDetailView from './MisionDetailView';
import DrawerView from './DrawerView';
import CampaignListView from "./CampaignListView";
import CampaignDetailView from "./CampaignDetailView";



export default createMaterialTopTabNavigator({
    Profile: {
        screen: ProfileView,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../res/images/profileIcon.png')} style={{height:'235%', width:'200%', bottom:15}} />
            )
        }
    },
    Social: { screen: SocialView, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../res/images/socialIcon.png')} style={{height:'235%', width:'200%', bottom:15}} />
        )
    } },
    Notification: { screen: CampaignDetailView, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../res/images/notificationsIcon.png')} style={{height:'235%', width:'200%', bottom:15}} />
        )
    } },
    Drawer: { screen: DrawerView, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../res/images/drawerIcon.png')} style={{height:'170%', width:'200%', bottom:10}} />
        )
    } },



}, {
    initialRouteName: 'Profile',
    order: ['Profile', 'Social', 'Notification', 'Drawer'],
    activeTintColor: 'blue',
    tabBarOptions: {
        activeTintColor:'#3b415b',
        inactiveTintColor: '#333947',
        showLabel: false,
        tabStyle: {
            width: 150,
            height: 80,
        },
        style: {
            backgroundColor: '#3b415b',
        },
        showIcon: true,


    }

})

AppRegistry.registerComponent('TabNavigator', () => TapNavigator);
