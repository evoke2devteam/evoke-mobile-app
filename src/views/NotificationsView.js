import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, TouchableOpacity, Button, ProgressBarAndroid, ImageBackground, SafeAreaView,ScrollView } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';



export default class NotificationsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            userInfo: {},
            language: (!!this.props.navigation.getParam('language')) ? this.props.navigation.navigate.getParam('language') : null
        }
    }


    async componentDidMount(): void {
        const userInfo = await GoogleSignin.getCurrentUser();
        this.setState({ userInfo: userInfo.user });
    }



    render() {

        return (
            
            <ImageBackground source={require('../res/images/fondoCirculo.jpg')} style={styles.backgroundOne}>
                <ScrollView style={styles.container} >
                    <View style={styles.container_title}>
                        <Text style={styles.titleLabel}>Notificationes</Text>
                    </View>
                    <View style={{ margin:wp('2%'),borderColor:('#3FA9F5'), height: hp('100%%'),flexDirection:'column',backgroundColor:('#333A47'),opacity:0.9}}>
                        
                            
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../res/images/perfilPrueba.png')
                            }>
                                
                            <Image
                                source={require('../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            
                            
                            <Text style={styles.team}>Equipo 7</Text>
                            <Text style={styles.name}>David el gato muerto</Text>
                            <Text style={styles.rol}>Colaborador estrategico</Text>
                            
                            
                        </ImageBackground>
                        
                    </View>
                    
                

                </ScrollView>
            </ImageBackground>

        );
    }



}
const styles = {
    container: {
        flex: 1,
    },
    backgroundOne: {
        flex: 1,
        flexDirection: 'column'

    },
    lineProfile: {
        width: wp('98%'),
        height: hp('12%'),
        bottom:hp('8.4%'),
        right:wp('4%'),
        
    },
    photoIcon: {
        flex:1,
        height: hp('12%'),
        width: wp('22%'),
        left: wp('3%'),
        bottom: hp('2%'),
        opacity:1
    },
    
    photos: {
        
        width: wp('32%'),
        height: hp('20%'),
        left: wp('0.2%'),
        top:hp('0.5%')
    },
    name:{
        left:wp('24%'),
        bottom:hp('19%'),
        color: '#14def4',
        fontSize: hp('3.5%'),
        fontFamily: 'SpaceGrotesk-Bold'

    },
    rol:{
        left:wp('24%'),
        bottom:hp('19%'),
        color: 'white',
        fontSize: hp('2.6%'),
        fontFamily: 'SpaceGrotesk-Medium'

    },
    team:{
        left:wp('24%'),
        bottom:hp('19%'),
        color: 'white',
        fontSize: hp('2.3%'),
        fontFamily: 'SpaceGrotesk-Medium'

    },
    titleLabel: {
        top: hp('5%'),
        left: wp('6%'),
        color: '#14def4',
        fontSize: hp('4%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    container_title: {

        width: wp('100%'),
        height: hp('15%')
    },
    photos: {
        flex: 1,
        flexDirection: 'column',
        width: wp('90.2%'),
        height: hp('45%'),
        left: wp('5%'),
        bottom:hp('1.6%')
    },
    name:{
        left:wp('19%'),
        bottom:hp('8%'),
        color: 'white',
        fontSize: hp('3%'),
        fontFamily: 'SpaceGrotesk-Regular'

    },
    textRegular:{
        fontFamily: 'SpaceGrotesk-Regular',
        top:hp('0.5%'),
        fontSize: hp('2%'),
         
    },
    textBold:{
        fontFamily: 'SpaceGrotesk-Bold',
        top:hp('0.5%'),
        fontSize: hp('2%'),
        
    },
    textRegularSmall:{
        fontFamily: 'SpaceGrotesk-Regular',
        top:hp('1.1%'),
        fontSize: hp('1.4%'),
    }

};

AppRegistry.registerComponent('NotificationsView', () => NotificationsView);