import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, Button, ProgressBarAndroid } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ProfileView from './ProfileView';
import NotificationsView from './NotificationsView';
import DrawerView from './DrawerView';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SocialView from './Social/SocialView';



export default createMaterialTopTabNavigator({
    Profile: {
        screen: ProfileView,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../res/images/profileIcon.png')} style={{height:hp('7%'), width:wp('12%'),bottom:hp('2.3%')}} />
            )
        }
    },
    Social: { screen: SocialView, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../res/images/socialIcon.png')} style={{height:hp('6%'), width:wp('11%'), bottom:hp('1.8%')}} />
        )
    } },
    Notification: { screen: NotificationsView, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../res/images/notificationsIcon.png')} style={{height:hp('6%'), width:wp('11%'), bottom:hp('1.7%')}} />
        )
    } },
    Drawer: { screen: DrawerView, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../res/images/drawerIcon.png')} style={{height:hp('6%'), width:wp('15%'), bottom:hp('1.6%'),right:wp('1.8%')}} />
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
            position:'relative',
            flex:1,
            height:hp('8%'),
            width:wp('25%')
            
        },
        style: {
            backgroundColor: '#3b415b',
        },
        showIcon: true,
        indicatorStyle:{
            backgroundColor:'#fed945',
            height:hp('1%'),
            width:wp('20%'),
            left:wp('5%'),
            borderRadius:20
        }
        

    }

})

AppRegistry.registerComponent('TabNavigator', () => TapNavigator);