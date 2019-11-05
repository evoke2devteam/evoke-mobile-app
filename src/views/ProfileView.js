import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, TouchableWithoutFeedback, Button, ProgressBarAndroid, ImageBackground, SafeAreaView } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import StringsLanguage from '../utils/StringsLanguage';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default class ProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            userInfo: {},
            // evocoins: 0,
            language: (!!this.props.navigation.getParam('language')) ? this.props.navigation.navigate.getParam('language') : null
        }
    }


    async componentDidMount(): void {
        const userInfo = await GoogleSignin.getCurrentUser();
        this.setState({ userInfo: userInfo.user });
        // this.getEvocoins();
    }



    render() {

        return (

            <ImageBackground source={require('../res/images/fondoCirculo.jpg')} style={styles.backgroundOne}>
                <SafeAreaView style={styles.container} opacity={0.76}>

                    <ImageBackground style={styles.backgroundTwo}
                        source={require('../res/images/cajaCounter.png')}>
                        <Image source={require('../res/images/rubiesIcon.png')} style={styles.rubies} />
                        <Text style={styles.rubiesCounter}>5000</Text>
                        <Text style={styles.rubiesLabel}>Rubies</Text>
                        <Image source={require('../res/images/EvocointIcon.png')} style={styles.evocoins} />
                        <Text style={styles.evocoinsCounter}>04</Text>
                        <Text style={styles.evocoinsLabel}>Evocoins</Text>

                    </ImageBackground>
                    <Text style={styles.container_title}>Perfil</Text>
                    <ImageBackground
                        style={styles.backgroundThree}
                        source={require('../res/images/containerCentral.png')}>
                        {/* contenido */}
                        <Image source={require('../res/images/avatar.png')} style={styles.avatar} />
                        <Text style={styles.experienceCounter}>1</Text>
                        <ProgressBarAndroid styleAttr='Horizontal' color="#3fa9f5" indeterminate={false} progress={0.2} style={styles.progressBar} />
                        <Text style={styles.levelLabel}>Nivel</Text>
                        <Text style={styles.counterPoints}>100</Text>
                        <Text style={styles.separator}>/</Text>
                        <Text style={styles.maxPoints}>150</Text>
                    </ImageBackground>
                    <View>
                        <ImageBackground
                            style={styles.backgroundFour}
                            source={require('../res/images/boton.png')}>
                            <View style={styles.buttonStart}>
                                <TouchableWithoutFeedback onPress={() => this.state.navigate('m')}>
                                    <Text style={styles.buttonStart}>Jugar</Text>
                                </TouchableWithoutFeedback>
                                {/* <Button title="Jugar" onPress={() => this.state.navigate('MisionListView')} color="#474d791A" /> */}
                            </View>
                        </ImageBackground>
                        <TouchableHighlight onPress={() => this.state.navigate('SkillsView')}  style={styles.buttonHabilities}>
                            <Image
                                source={require('../res/images/habilidades.png')}
                            />
                        </TouchableHighlight>
                        <Text style={styles.habilitiesLabel}>Habilidad</Text>
                        <TouchableHighlight onPress={() => this.state.navigate('SkillsView')} underlayColor={'#05BAFA'} activeOpacity={0.1} style={styles.buttonShop}>
                            <Image
                                source={require('../res/images/carrito.png')}
                            />
                        </TouchableHighlight>
                        <Text style={styles.shopLabel}>Tienda</Text>
                        <TouchableHighlight onPress={() => this.state.navigate('SkillsView')} underlayColor={'#05BAFA'} activeOpacity={0.1} style={styles.buttonSocial}>
                            <Image
                                source={require('../res/images/equipo.png')}
                            />
                        </TouchableHighlight>
                        <Text style={styles.socialLabel}>Equipo</Text>

                    </View>

                </SafeAreaView>
            </ImageBackground>

        );
    }

    // getEvocoins() {
    //     fetch('/evocoin/balanceOf', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email: this.state.userInfo.email
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({ evocoins: responseJson.evocoins });
    //         })
    //         .catch((error) => {
    //             this.setState({ evocoins: 0 });
    //             console.log(error);
    //         });
    // }


}
const styles = {
    container: {
        flex: 1,
    },
    backgroundOne: {
        flex: 1,

    },
    backgroundTwo: {
        flex: 1,
        width: wp('93%'),
        height: hp('11%'),
        left: wp('8%'),
        top: hp('0.6%'),
        flexDirection: 'row'


    },
    rubies: {
        height: hp('5%'),
        width: wp('10%'),
        top: hp('0.6%'),
        left: wp('36%')

    },
    rubiesCounter: {
        top: hp('0.5%'),
        left: wp('37%'),
        color: 'white',
        fontSize: hp('3%'),
        fontFamily: 'SpaceGrotesk-Bold'
    },
    rubiesLabel: {
        top: hp('4.2%'),
        left: wp('27%'),
        color: 'white',
        fontSize: hp('1.6%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    evocoins: {
        height: hp('5%'),
        width: wp('10%'),
        top: hp('0.6%'),
        left: wp('32%')

    },
    evocoinsCounter: {
        top: hp('0.5%'),
        left: wp('38.8%'),
        color: 'white',
        fontSize: hp('3%'),
        fontFamily: 'SpaceGrotesk-Bold'
    },
    evocoinsLabel: {
        top: hp('4.2%'),
        left: wp('27%'),
        color: 'white',
        fontSize: hp('1.6%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    container_title: {

        color: '#14def4',
        fontSize: hp('5%'),
        fontFamily: 'SpaceGrotesk-Bold',
        left: wp('6%')
    },
    backgroundThree: {
        width: wp('98%'),
        height: hp('50%'),
        bottom: hp('1%'),
        left: wp('2%'),
        flexDirection: 'row'


    },
    avatar: {
        height: hp('30%'),
        width: wp('28%'),
        top: hp('4%'),
        left: wp('35%')
    },
    experienceCounter: {
        color: 'white',
        fontSize: hp('5%'),
        top: hp('37%'),
        left: wp('48%'),
        fontFamily: 'SpaceGrotesk-Medium',
    },
    progressBar: {
        width: wp('35%'),
        transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
        right: wp('3.5%'),
        top: hp('19.3%'),

    },
    levelLabel: {
        top: hp('42.6%'),
        right: wp('50%'),
        color: 'white',
        fontSize: hp('2%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    counterPoints: {
        top: hp('45.6%'),
        right: wp('59%'),
        color: 'white',
        fontSize: hp('1.3%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    separator: {
        top: hp('45.3%'),
        right: wp('59%'),
        color: 'white',
        fontSize: hp('1.6%'),
        fontFamily: 'SpaceGrotesk-Bold'
    },
    maxPoints: {
        top: hp('45.6%'),
        right: wp('59%'),
        color: 'white',
        fontSize: hp('1.6%'),
        fontFamily: 'SpaceGrotesk-Bold'
    },
    backgroundFour: {
        height: hp('10%'),
        width: wp('95%'),
        bottom: hp('2%'),
        left: wp('3.5%')
    },
    buttonStart: {
        top: hp('0.6%'),
        left: wp('17.6%'),
        color: 'white',
        fontSize: hp('5%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    buttonHabilities: {
        bottom: hp('2%'), 
        height: hp('1%'), 
        width: wp('1%'), 
        left: wp('5%')
    },
    buttonShop: {
        bottom: hp('7%'), 
        height: hp('1%'), 
        width: wp('1%'), 
        left: wp('33%')
    },
    buttonSocial: {
        bottom: hp('10.2%'), 
        height: hp('1%'), 
        width: wp('1%'), 
        left: wp('66%')
    },
    habilitiesLabel: {
        color: 'white', 
        fontSize:hp('2%'), 
        top:hp('5%'), 
        left:wp('13%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    shopLabel: {
        color: 'white', 
        fontSize:hp('2%'), 
        top:hp('1%'), 
        left:wp('45%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    socialLabel: {
        color: 'white', 
        fontSize:hp('2%'), 
        bottom:hp('3.3%'), 
        left:wp('75%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },

};

AppRegistry.registerComponent('ProfileView', () => ProfileView);
