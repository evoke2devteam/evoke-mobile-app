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
  import LinearGradient from 'react-native-linear-gradient';



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
                        <Text style={styles.titleLabel}>Notificaciones</Text>
                    </View>
                    <View style={{ margin:wp('2%'),borderWidth:wp('0.5%'),borderColor:('#3FA9F5'), height: hp('100%%'),flexDirection:'column',backgroundColor:('#333A47'),opacity:0.9,bottom:hp('4%'),justifyContent:'space-between'}}>
                        
                            
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../res/images/perfilPrueba.png')
                            }>
                                
                            <Image
                                source={require('../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            
                        
                            
                            <LinearGradient colors={['#FFFFFF', '#E5BE01', '#FF8000']} style={{width:wp('66%'),height:hp('0.2%'),bottom:hp('7%'),left:wp('25%')}}>
                            <View style={{ height:hp('0.2%'),width:wp('30%'),backgroundColor:('#FFFFFF')}}></View>
                            </LinearGradient>
                            <Text style={{bottom:hp('11.5%'),width:wp('90%'),left:wp('28%'),fontFamily: 'SpaceGrotesk-Medium',fontSize:hp('3%'),color:'white',flexDirection:'row'}}>David Hernández </Text>
                            <Text style={styles.comment}>Le gusta tú  evidencia de la misión "poder es ganar"</Text>
                            <View style={{borderWidth:wp('0.5%'),borderColor:'grey',borderRadius:wp('100%'),height:hp('5%'),width:wp('8.5%'),left:wp('82.5%'),bottom:hp('14.5%')}}>
                                <Image source={require('./../res/images/like.png')} style={{height:hp('3%'),width:wp('6%'),left:wp('0.8%'),top:hp('0.8%')}}/>
                            </View>
                            <ImageBackground source={require('./../res/images/etiqueta.png')} style={{width:wp('20%'),height:hp('3%'),bottom:hp('14'),left:wp('71%')}}>
                                <Text style={{color:'yellow',left:wp('5%')}}>+ info</Text>
                            </ImageBackground>

                            
                            
                            
                        </ImageBackground>
                        
                        <ImageBackground
                            style={{flex:1,
                                flexDirection:'column',height: hp('15%'),width: wp('25%'),left: wp('2%'),bottom: hp('15%'),}}
                            source={require('../res/images/perfilPrueba.png')
                            }>
                                
                            <Image
                                source={require('../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            
                        
                            
                            <LinearGradient colors={['#FFFFFF', '#E5BE01', '#FF8000']} style={{width:wp('66%'),height:hp('0.2%'),bottom:hp('7%'),left:wp('25%')}}>
                            <View style={{ height:hp('0.2%'),width:wp('30%'),backgroundColor:('#FFFFFF')}}></View>
                            </LinearGradient>
                            <Text style={{bottom:hp('11.5%'),width:wp('90%'),left:wp('28%'),fontFamily: 'SpaceGrotesk-Medium',fontSize:hp('3%'),color:'white',flexDirection:'row'}}>Mentor Davie Lorenz</Text>
                            <Text style={styles.comment}> Calificó  tú  evidencia de la misión es poder con 5 estrellas  </Text>
                            <View style={{borderWidth:wp('0.5%'),borderColor:'grey',borderRadius:wp('100%'),height:hp('5%'),width:wp('8.5%'),left:wp('82.5%'),bottom:hp('14.5%')}}>
                                <Image source={require('./../res/images/estrella.png')} style={{height:hp('3%'),width:wp('6%'),left:wp('0.8%'),top:hp('0.6%')}}/>
                            </View>
                            <ImageBackground source={require('./../res/images/etiqueta.png')} style={{width:wp('20%'),height:hp('3%'),bottom:hp('14'),left:wp('71%')}}>
                                <Text style={{color:'yellow',left:wp('5%')}}>+ info</Text>
                            </ImageBackground>
                            <Image source={require('./../res/images/estrella.png')} style={{height:hp('3%'),width:wp('5%'),left:wp('27%'),bottom:hp('18%')}}/>

                            
                            
                            
                        </ImageBackground>

                        <ImageBackground
                            style={{flex:1,
                                flexDirection:'column',height: hp('15%'),width: wp('25%'),left: wp('2%'),bottom: hp('30%'),}}
                            source={require('../res/images/perfilPrueba.png')
                            }>
                                
                            <Image
                                source={require('../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            
                        
                            
                            <LinearGradient colors={['#FFFFFF', '#E5BE01', '#FF8000']} style={{width:wp('66%'),height:hp('0.2%'),bottom:hp('7%'),left:wp('25%')}}>
                            <View style={{ height:hp('0.2%'),width:wp('30%'),backgroundColor:('#FFFFFF')}}></View>
                            </LinearGradient>
                            <Text style={{bottom:hp('11.5%'),width:wp('90%'),left:wp('28%'),fontFamily: 'SpaceGrotesk-Medium',fontSize:hp('3%'),color:'white',flexDirection:'row'}}>Robert Hawkins</Text>
                            <Text style={styles.comment}>Esta revisando todas las evidencias para aprobar la transacción de Evocoins </Text>
                            <View style={{borderWidth:wp('0.5%'),borderColor:'grey',borderRadius:wp('100%'),height:hp('5%'),width:wp('8.5%'),left:wp('82.5%'),bottom:hp('16.5%')}}>
                                <Image source={require('./../res/images/reloj.png')} style={{height:hp('3%'),width:wp('5%'),left:wp('1.3%'),top:hp('0.8%')}}/>
                            </View>
                            <ImageBackground source={require('./../res/images/etiqueta.png')} style={{width:wp('20%'),height:hp('3%'),bottom:hp('15'),left:wp('71.5%')}}>
                                <Text style={{color:'yellow',left:wp('5%')}}>+ info</Text>
                            </ImageBackground>

                            
                            
                            
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
        
        width: wp('92%'),
        height: hp('12%'),
        bottom:hp('1.8%'),
        
        
        
    },
    photoIcon: {
        flex:1,
        flexDirection:'column',
        height: hp('15%'),
        width: wp('25%'),
        left: wp('2%'),
        top: hp('1.5%'),
        
    },
    
    
    comment:{
        width:wp('54%'),
        left:wp('28%'),
        bottom:hp('10%'),
        color: '#FFFFFF',
        fontSize: wp('3.8%'),
        fontFamily: 'SpaceGrotesk-Regular'

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
    
    
    
    

};

AppRegistry.registerComponent('NotificationsView', () => NotificationsView);