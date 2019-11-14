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



export default class SocialView extends React.Component {

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
            
            <ImageBackground source={require('../../res/images/fondoCirculo.jpg')} style={styles.backgroundOne}>
                <ScrollView style={styles.container} >
                    
                    <View style={styles.container_title}>
                        <Text style={styles.titleLabel}>Área social </Text>
                    </View>
                    <View>
                    <View style={{ width: wp('100%'), height: hp('10%'), bottom: hp('5%')}}>
                        
                            
                            <View style={{backgroundColor:'#3b415b', width:wp('90.5%'),height:hp('8.5%'),left:wp('5%'),flexDirection:'row'}}>
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                            <TouchableOpacity onPress={() => this.state.navigate('HomeSocialView')} activeOpacity={1} >
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            </TouchableOpacity>
                            <MenuProvider style={{ flexDirection: 'column', bottom:hp('6.7%'), left:wp('65%')}}>
                                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger >
                                        <Image source={require('../../res/images/puntos.png')}
                                        style={{height:hp('5.2%'),width:wp('2.3%'),bottom:hp('1.5%'),left:wp('20%')}}/>
                                        </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value={1} >
                                            <Text style={{ color: 'red' }}>one</Text>
                                            </MenuOption>
                                        <MenuOption value={2} >
                                            <Text style={{ color: 'red' }}>Two</Text>
                                        </MenuOption>
                                        <MenuOption value={3} >
                                        <Text style={{ color: 'red' }}>three</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </MenuProvider>
                            <Text style={styles.name}>David Hernández </Text>
                            
                        </ImageBackground>
                        </View> 
                    </View>
                     <View style={{ width: wp('100%'), height: hp('40%'), bottom: hp('5%'), flexDirection: 'column' }}>
                        <ImageBackground
                            style={styles.photos}
                            source={require('../../res/images/fotoPrueba.png')}>

                        </ImageBackground>
                    </View>
                   

                    <View style={{ height: hp('35%'), width:wp('100%') }}>
                    <View style={{backgroundColor:'#3b4171', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.4%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Image source={require('../../res/images/corazon.png')}
                    style={{height:hp('4%'),width:wp('7.2%'),left:wp('1%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/comentar.png')}
                    style={{height:hp('4%'),width:wp('7.5%'),left:wp('3%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/compartir.png')}
                    style={{height:hp('4%'),width:wp('8%'),left:wp('5%'),top:hp('0.4%')}}/>
                    </View>
                    <View style={{backgroundColor:'#404474', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.35%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textRegular}> A</Text>
                    <Text style={styles.textBold}> 19 </Text>
                    <Text style={styles.textRegular}>personas les gusta esta evidencia</Text>
                    </View>
                    <View style={{backgroundColor:'#2e3b68', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.3%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textBold}> David Hernández : </Text>
                    <Text style={styles.textRegularSmall}>Evidencias de la misión  on por la paz </Text>
                    <Text style={{color:'yellow',top:hp('1%'),fontSize:hp('1.4%')}}> +info</Text>

                    </View>


                    </View> 
                    </View>

                    <View>
                    <View style={{ width: wp('100%'), height: hp('10%'), bottom: hp('5%')}}>
                        
                            
                            <View style={{backgroundColor:'#3b415b', width:wp('90.5%'),height:hp('8.5%'),left:wp('5%'),flexDirection:'row'}}>
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                            <TouchableOpacity onPress={() => this.state.navigate('HomeSocialView')} activeOpacity={1} >
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            </TouchableOpacity>
                            <MenuProvider style={{ flexDirection: 'column', bottom:hp('6.7%'), left:wp('65%')}}>
                                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger >
                                        <Image source={require('../../res/images/puntos.png')}
                                        style={{height:hp('5.2%'),width:wp('2.3%'),bottom:hp('1.5%'),left:wp('20%')}}/>
                                        </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value={1} >
                                            <Text style={{ color: 'red' }}>one</Text>
                                            </MenuOption>
                                        <MenuOption value={2} >
                                            <Text style={{ color: 'red' }}>Two</Text>
                                        </MenuOption>
                                        <MenuOption value={3} >
                                        <Text style={{ color: 'red' }}>three</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </MenuProvider>
                            <Text style={styles.name}>David Hernández </Text>
                            
                        </ImageBackground>
                        </View> 
                    </View>
                     <View style={{ width: wp('100%'), height: hp('40%'), bottom: hp('5%'), flexDirection: 'column' }}>
                        <ImageBackground
                            style={styles.photos}
                            source={require('../../res/images/fotoPrueba2.png')}>

                        </ImageBackground>
                    </View>
                   

                    <View style={{ height: hp('35%'), width:wp('100%') }}>
                    <View style={{backgroundColor:'#3b4171', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.4%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Image source={require('../../res/images/corazon.png')}
                    style={{height:hp('4%'),width:wp('7.2%'),left:wp('1%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/comentar.png')}
                    style={{height:hp('4%'),width:wp('7.5%'),left:wp('3%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/compartir.png')}
                    style={{height:hp('4%'),width:wp('8%'),left:wp('5%'),top:hp('0.4%')}}/>
                    </View>
                    <View style={{backgroundColor:'#404474', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.35%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textRegular}> A</Text>
                    <Text style={styles.textBold}> 19 </Text>
                    <Text style={styles.textRegular}>personas les gusta esta evidencia</Text>
                    </View>
                    <View style={{backgroundColor:'#2e3b68', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.3%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textBold}> David Hernández : </Text>
                    <Text style={styles.textRegularSmall}>Evidencias de la misión  por la paz </Text>
                    <Text style={{color:'yellow',top:hp('1%'),fontSize:hp('1.4%')}}> +info</Text>

                    </View>


                    </View> 
                    </View>
                    <View>
                    <View style={{ width: wp('100%'), height: hp('10%'), bottom: hp('5%')}}>
                        
                            
                            <View style={{backgroundColor:'#3b415b', width:wp('90.5%'),height:hp('8.5%'),left:wp('5%'),flexDirection:'row'}}>
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                            <TouchableOpacity onPress={() => this.state.navigate('HomeSocialView')} activeOpacity={1} >
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            </TouchableOpacity>
                            <MenuProvider style={{ flexDirection: 'column', bottom:hp('6.7%'), left:wp('65%')}}>
                                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger >
                                        <Image source={require('../../res/images/puntos.png')}
                                        style={{height:hp('5.2%'),width:wp('2.3%'),bottom:hp('1.5%'),left:wp('20%')}}/>
                                        </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value={1} >
                                            <Text style={{ color: 'red' }}>one</Text>
                                            </MenuOption>
                                        <MenuOption value={2} >
                                            <Text style={{ color: 'red' }}>Two</Text>
                                        </MenuOption>
                                        <MenuOption value={3} >
                                        <Text style={{ color: 'red' }}>three</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </MenuProvider>
                            <Text style={styles.name}>David Hernández </Text>
                            
                        </ImageBackground>
                        </View> 
                    </View>
                     <View style={{ width: wp('100%'), height: hp('40%'), bottom: hp('5%'), flexDirection: 'column' }}>
                        <ImageBackground
                            style={styles.photos}
                            source={require('../../res/images/fotoPrueba.png')}>

                        </ImageBackground>
                    </View>
                   

                    <View style={{ height: hp('35%'), width:wp('100%') }}>
                    <View style={{backgroundColor:'#3b4171', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.4%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Image source={require('../../res/images/corazon.png')}
                    style={{height:hp('4%'),width:wp('7.2%'),left:wp('1%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/comentar.png')}
                    style={{height:hp('4%'),width:wp('7.5%'),left:wp('3%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/compartir.png')}
                    style={{height:hp('4%'),width:wp('8%'),left:wp('5%'),top:hp('0.4%')}}/>
                    </View>
                    <View style={{backgroundColor:'#404474', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.35%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textRegular}> A</Text>
                    <Text style={styles.textBold}> 19 </Text>
                    <Text style={styles.textRegular}>personas les gusta esta evidencia</Text>
                    </View>
                    <View style={{backgroundColor:'#2e3b68', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.3%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textBold}> David Hernández : </Text>
                    <Text style={styles.textRegularSmall}>Evidencias de la misión  por la paz </Text>
                    <Text style={{color:'yellow',top:hp('1%'),fontSize:hp('1.4%')}}> +info</Text>

                    </View>


                    </View> 
                    </View>
                    <View>
                    <View style={{ width: wp('100%'), height: hp('10%'), bottom: hp('5%')}}>
                        
                            
                            <View style={{backgroundColor:'#3b415b', width:wp('90.5%'),height:hp('8.5%'),left:wp('5%'),flexDirection:'row'}}>
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                            <TouchableOpacity onPress={() => this.state.navigate('HomeSocialView')} activeOpacity={1} >
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            </TouchableOpacity>
                            <MenuProvider style={{ flexDirection: 'column', bottom:hp('6.7%'), left:wp('65%')}}>
                                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger >
                                        <Image source={require('../../res/images/puntos.png')}
                                        style={{height:hp('5.2%'),width:wp('2.3%'),bottom:hp('1.5%'),left:wp('20%')}}/>
                                        </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value={1} >
                                            <Text style={{ color: 'red' }}>one</Text>
                                            </MenuOption>
                                        <MenuOption value={2} >
                                            <Text style={{ color: 'red' }}>Two</Text>
                                        </MenuOption>
                                        <MenuOption value={3} >
                                        <Text style={{ color: 'red' }}>three</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </MenuProvider>
                            <Text style={styles.name}>David Hernández </Text>
                            
                        </ImageBackground>
                        </View> 
                    </View>
                     <View style={{ width: wp('100%'), height: hp('40%'), bottom: hp('5%'), flexDirection: 'column' }}>
                        <ImageBackground
                            style={styles.photos}
                            source={require('../../res/images/fotoPrueba2.png')}>

                        </ImageBackground>
                    </View>
                   

                    <View style={{ height: hp('35%'), width:wp('100%') }}>
                    <View style={{backgroundColor:'#3b4171', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.4%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Image source={require('../../res/images/corazon.png')}
                    style={{height:hp('4%'),width:wp('7.2%'),left:wp('1%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/comentar.png')}
                    style={{height:hp('4%'),width:wp('7.5%'),left:wp('3%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/compartir.png')}
                    style={{height:hp('4%'),width:wp('8%'),left:wp('5%'),top:hp('0.4%')}}/>
                    </View>
                    <View style={{backgroundColor:'#404474', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.35%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textRegular}> A</Text>
                    <Text style={styles.textBold}> 19 </Text>
                    <Text style={styles.textRegular}>personas les gusta esta evidencia</Text>
                    </View>
                    <View style={{backgroundColor:'#2e3b68', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.3%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textBold}> David Hernández : </Text>
                    <Text style={styles.textRegularSmall}>Evidencias de la misión  por la paz </Text>
                    <Text style={{color:'yellow',top:hp('1%'),fontSize:hp('1.4%')}}> +info</Text>

                    </View>


                    </View> 
                    </View>
                    <View>
                    <View style={{ width: wp('100%'), height: hp('10%'), bottom: hp('5%')}}>
                        
                            
                            <View style={{backgroundColor:'#3b415b', width:wp('90.5%'),height:hp('8.5%'),left:wp('5%'),flexDirection:'row'}}>
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                            <TouchableOpacity onPress={() => this.state.navigate('HomeSocialView')} activeOpacity={1} >
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            </TouchableOpacity>
                            <MenuProvider style={{ flexDirection: 'column', bottom:hp('6.7%'), left:wp('65%')}}>
                                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger >
                                        <Image source={require('../../res/images/puntos.png')}
                                        style={{height:hp('5.2%'),width:wp('2.3%'),bottom:hp('1.5%'),left:wp('20%')}}/>
                                        </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value={1} >
                                            <Text style={{ color: 'red' }}>one</Text>
                                            </MenuOption>
                                        <MenuOption value={2} >
                                            <Text style={{ color: 'red' }}>Two</Text>
                                        </MenuOption>
                                        <MenuOption value={3} >
                                        <Text style={{ color: 'red' }}>three</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </MenuProvider>
                            <Text style={styles.name}>David Hernández </Text>
                            
                        </ImageBackground>
                        </View> 
                    </View>
                     <View style={{ width: wp('100%'), height: hp('40%'), bottom: hp('5%'), flexDirection: 'column' }}>
                        <ImageBackground
                            style={styles.photos}
                            source={require('../../res/images/fotoPrueba.png')}>

                        </ImageBackground>
                    </View>
                   

                    <View style={{ height: hp('35%'), width:wp('100%') }}>
                    <View style={{backgroundColor:'#3b4171', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.4%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Image source={require('../../res/images/corazon.png')}
                    style={{height:hp('4%'),width:wp('7.2%'),left:wp('1%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/comentar.png')}
                    style={{height:hp('4%'),width:wp('7.5%'),left:wp('3%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/compartir.png')}
                    style={{height:hp('4%'),width:wp('8%'),left:wp('5%'),top:hp('0.4%')}}/>
                    </View>
                    <View style={{backgroundColor:'#404474', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.35%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textRegular}> A</Text>
                    <Text style={styles.textBold}> 19 </Text>
                    <Text style={styles.textRegular}>personas les gusta esta evidencia</Text>
                    </View>
                    <View style={{backgroundColor:'#2e3b68', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.3%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textBold}> David Hernández : </Text>
                    <Text style={styles.textRegularSmall}>Evidencias de la misión  por la paz </Text>
                    <Text style={{color:'yellow',top:hp('1%'),fontSize:hp('1.4%')}}> +info</Text>

                    </View>


                    </View> 
                    </View>
                    <View>
                    <View style={{ width: wp('100%'), height: hp('10%'), bottom: hp('5%')}}>
                        
                            
                            <View style={{backgroundColor:'#3b415b', width:wp('90.5%'),height:hp('8.5%'),left:wp('5%'),flexDirection:'row'}}>
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                            <TouchableOpacity onPress={() => this.state.navigate('HomeSocialView')} activeOpacity={1} >
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            </TouchableOpacity>
                            <MenuProvider style={{ flexDirection: 'column', bottom:hp('6.7%'), left:wp('65%')}}>
                                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger >
                                        <Image source={require('../../res/images/puntos.png')}
                                        style={{height:hp('5.2%'),width:wp('2.3%'),bottom:hp('1.5%'),left:wp('20%')}}/>
                                        </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value={1} >
                                            <Text style={{ color: 'red' }}>one</Text>
                                            </MenuOption>
                                        <MenuOption value={2} >
                                            <Text style={{ color: 'red' }}>Two</Text>
                                        </MenuOption>
                                        <MenuOption value={3} >
                                        <Text style={{ color: 'red' }}>three</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </MenuProvider>
                            <Text style={styles.name}>David Hernández </Text>
                            
                        </ImageBackground>
                        </View> 
                    </View>
                     <View style={{ width: wp('100%'), height: hp('40%'), bottom: hp('5%'), flexDirection: 'column' }}>
                        <ImageBackground
                            style={styles.photos}
                            source={require('../../res/images/fotoPrueba2.png')}>

                        </ImageBackground>
                    </View>
                   

                    <View style={{ height: hp('35%'), width:wp('100%') }}>
                    <View style={{backgroundColor:'#3b4171', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.4%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Image source={require('../../res/images/corazon.png')}
                    style={{height:hp('4%'),width:wp('7.2%'),left:wp('1%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/comentar.png')}
                    style={{height:hp('4%'),width:wp('7.5%'),left:wp('3%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/compartir.png')}
                    style={{height:hp('4%'),width:wp('8%'),left:wp('5%'),top:hp('0.4%')}}/>
                    </View>
                    <View style={{backgroundColor:'#404474', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.35%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textRegular}> A</Text>
                    <Text style={styles.textBold}> 19 </Text>
                    <Text style={styles.textRegular}>personas les gusta esta evidencia</Text>
                    </View>
                    <View style={{backgroundColor:'#2e3b68', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.3%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textBold}> David Hernández : </Text>
                    <Text style={styles.textRegularSmall}>Evidencias de la misión  por la paz </Text>
                    <Text style={{color:'yellow',top:hp('1%'),fontSize:hp('1.4%')}}> +info</Text>

                    </View>


                    </View> 
                    </View>
                    <View>
                    <View style={{ width: wp('100%'), height: hp('10%'), bottom: hp('5%')}}>
                        
                            
                            <View style={{backgroundColor:'#3b415b', width:wp('90.5%'),height:hp('8.5%'),left:wp('5%'),flexDirection:'row'}}>
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                            <TouchableOpacity onPress={() => this.state.navigate('HomeSocialView')} activeOpacity={1} >
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            </TouchableOpacity>
                            <MenuProvider style={{ flexDirection: 'column', bottom:hp('6.7%'), left:wp('65%')}}>
                                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger >
                                        <Image source={require('../../res/images/puntos.png')}
                                        style={{height:hp('5.2%'),width:wp('2.3%'),bottom:hp('1.5%'),left:wp('20%')}}/>
                                        </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value={1} >
                                            <Text style={{ color: 'red' }}>one</Text>
                                            </MenuOption>
                                        <MenuOption value={2} >
                                            <Text style={{ color: 'red' }}>Two</Text>
                                        </MenuOption>
                                        <MenuOption value={3} >
                                        <Text style={{ color: 'red' }}>three</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </MenuProvider>
                            <Text style={styles.name}>David Hernández </Text>
                            
                        </ImageBackground>
                        </View> 
                    </View>
                     <View style={{ width: wp('100%'), height: hp('40%'), bottom: hp('5%'), flexDirection: 'column' }}>
                        <ImageBackground
                            style={styles.photos}
                            source={require('../../res/images/fotoPrueba.png')}>

                        </ImageBackground>
                    </View>
                   

                    <View style={{ height: hp('35%'), width:wp('100%') }}>
                    <View style={{backgroundColor:'#3b4171', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.4%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Image source={require('../../res/images/corazon.png')}
                    style={{height:hp('3%'),width:wp('9%'),left:wp('1%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/comentar.png')}
                    style={{height:hp('3%'),width:wp('9%'),left:wp('3%'),top:hp('0.4%')}}/>
                    <Image source={require('../../res/images/compartir.png')}
                    style={{height:hp('3%'),width:wp('8%'),left:wp('5%'),top:hp('0.4%')}}/>
                    </View>
                    <View style={{backgroundColor:'#404474', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.35%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textRegular}> A</Text>
                    <Text style={styles.textBold}> 19 </Text>
                    <Text style={styles.textRegular}>personas les gusta esta evidencia</Text>
                    </View>
                    <View style={{backgroundColor:'#2e3b68', width:wp('90.2%'),height:hp('5%'),bottom:hp('1.3%'),left:wp('5.2%'),flexDirection:'row'}}>
                    <Text style={styles.textBold}> David Hernández : </Text>
                    <Text style={styles.textRegularSmall}>Evidencias de la misión  por la paz </Text>
                    <Text style={{color:'yellow',top:hp('1%'),fontSize:hp('1.4%')}}> +info</Text>

                    </View>


                    </View> 
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
        width: wp('94.3%'),
        height: hp('10%'),
        bottom:hp('1.56%'),
        right:wp('3.95%'),
        flexDirection: 'row'
    },
    photoIcon: {
        flex:1,
        height: hp('8.5%'),
        width: wp('16.5%'),
        
    },
    titleLabel: {
        top: hp('3%'),
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
        color:'white'
         
    },
    textBold:{
        fontFamily: 'SpaceGrotesk-Bold',
        top:hp('0.8%'),
        fontSize: hp('1.8%'),
        color:'white'
        
    },
    textRegularSmall:{
        fontFamily: 'SpaceGrotesk-Regular',
        top:hp('1.1%'),
        fontSize: hp('1.4%'),
        color:'white'
    }

};

AppRegistry.registerComponent('SocialView', () => SocialView);