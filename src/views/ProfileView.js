import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, TouchableOpacity, Button, ProgressBarAndroid, ImageBackground, SafeAreaView,ScrollView } from 'react-native';
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
                
                    <View style={{width:wp('100%'),height:('20%')}}>
                    <ImageBackground style={styles.backgroundTwo}
                        source={require('../res/images/cajaCounter.png')}>
                        <Image source={require('../res/images/rubiesIcon.png')} style={styles.rubies} />
                        <Text style={styles.rubiesCounter}>5000</Text>
                        <Text style={styles.rubiesLabel}>Rubies</Text>
                        <Image source={require('../res/images/EvocointIcon.png')} style={styles.evocoins} />
                        <Text style={styles.evocoinsCounter}>04</Text>
                        <Text style={styles.evocoinsLabel}>Evocoins</Text>

                    </ImageBackground>
                    </View>
                        <View style={{width:wp('100%'), height:hp('40%'),bottom:hp('5%'),flexDirection:'column'}}>
                        <ImageBackground
                            style={styles.backgroundThree}
                            source={require('../res/images/containerCentral.png')}>
                            {/* contenido */}
                            <Text style={styles.container_title}>Perfil</Text>
                            <Image source={require('../res/images/avatar.png')} style={styles.avatar} />
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.experienceCounter}>1</Text>
                            <ProgressBarAndroid styleAttr='Horizontal' color="#3fa9f5" indeterminate={false} progress={0.2} style={styles.progressBar} />
                            <Text style={styles.levelLabel}>Nivel</Text>
                            <Text style={styles.counterPoints}>100</Text>
                            <Text style={styles.separator}>/</Text>
                            <Text style={styles.maxPoints}>150</Text>
                            </View>
                        </ImageBackground>
                        </View>
                        <View style={{height:hp('20%'),width:wp('90%'),top:hp('1%')}}>
                    <ImageBackground
                        style={styles.backgroundFour}
                        source={require('../res/images/boton.png')}>
                        <TouchableOpacity onPress={() => this.state.navigate('MisionListView')}>
                            <Text style={styles.buttonStart}>Jugar</Text>
                        </TouchableOpacity>

                    </ImageBackground>
                    </View>

                    <View style={{ flexDirection: 'row', height:hp('20%'), bottom:hp('2%') }}>

                        <TouchableOpacity onPress={() => this.state.navigate('SkillsView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                            <View>
                                <Image
                                    source={require('../res/images/habilidades.png')}
                                    style={styles.buttonHabilities}
                                />
                                <Text style={styles.habilitiesLabel}>Habilidad</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.state.navigate('SkillsView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                            <View>
                                <Image
                                    source={require('../res/images/carrito.png')}
                                    style={styles.buttonShop}
                                />
                                <Text style={styles.shopLabel}>Tienda</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.state.navigate('SkillsView')} underlayColor={'#FFFFFF'} activeOpacity={0.8} >
                            <View>
                                <Image
                                    source={require('../res/images/equipo.png')}
                                    style={styles.buttonSocial}
                                />
                                <Text style={styles.socialLabel}>Equipo</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

               
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
        width:wp('100%'),
        height:hp('100%')
    },
    backgroundOne: {
        flex: 1,
        flexDirection: 'column'

    },
    backgroundTwo: {
        flex: 1,
        width: wp('80%'),
        height: hp('8.5%'),
        top:hp('0.4%'),
        left: wp('21%'),
        flexDirection: 'row'


    },
    rubies: {
        height: hp('4%'),
        width: wp('7%'),
        top: hp('1%'),
        left: wp('30%')

    },
    rubiesCounter: {
        top: hp('1%'),
        left: wp('34%'),
        color: 'white',
        fontSize: hp('2.6%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    rubiesLabel: {
        top: hp('4%'),
        left: wp('25.4%'),
        color: 'white',
        fontSize: hp('1.4%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    evocoins: {
        height: hp('4%'),
        width: wp('7%'),
        top: hp('1%'),
        left: wp('29%')

    },
    evocoinsCounter: {
        top: hp('1.2%'),
        left: wp('36%'),
        color: 'white',
        fontSize: hp('2.6%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    evocoinsLabel: {
        top: hp('4%'),
        left: wp('25%'),
        color: 'white',
        fontSize: hp('1.4%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    container_title: {

        color: '#14def4',
        fontSize: hp('4%'),
        fontFamily: 'SpaceGrotesk-Medium',
        left: wp('3.5%'),
        bottom: hp('8%')
    },
    backgroundThree: {
        flex:1,
        flexDirection: 'column',
        width: wp('94%'),
        height: hp('45%'),
        left: wp('3%'),
    


    },
    avatar: {
        height: hp('26%'),
        width: wp('25%'),
        marginTop: hp('1%'),
        left: wp('30%')
    },
    experienceCounter: {
        color: 'white',
        fontSize: hp('5%'),
        top: hp('2%'),
        left: wp('73%'),
        fontFamily: 'SpaceGrotesk-Medium',
    },
    progressBar: {
        width: wp('35%'),
        transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
        left: wp('22%'),
        top: hp('4%'),

    },
    levelLabel: {
        top: hp('6%'),
        right:wp('23%'),
        color: 'white',
        fontSize: hp('2%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    counterPoints: {
        top:hp('10%'),
        right: wp('30%'),
        color: 'white',
        fontSize: hp('1.3%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    separator: {
        top: hp('9.8%'),
        right: wp('30%'),
        color: 'white',
        fontSize: hp('1.6%'),
        fontFamily: 'SpaceGrotesk-Bold'
    },
    maxPoints: {
        top: hp('9.8%'),
        right: wp('30%'),
        color: 'white',
        fontSize: hp('1.6%'),
        fontFamily: 'SpaceGrotesk-Bold'
    },
    backgroundFour: {
        flex:1,
        flexDirection: 'column',
        height: hp('10%'),
        left: wp('4.6%')
    },
    buttonStart: {
        top: hp('1.5%'),
        left: wp('37%'),
        color: 'white',
        fontSize: hp('5%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    buttonHabilities: {
        height: hp('12%'),
        width: wp('28%'),
        bottom: hp('7%'),
        left: wp('6%')
    },
    buttonShop: {
        height: hp('13.6%'),
        width: wp('28%'),
        bottom: hp('7.8%'),
        left: wp('7%')
    },
    buttonSocial: {
        height: hp('12%'),
        width: wp('28%'),
        bottom: hp('7%'),
        left: wp('8%')
    },
    habilitiesLabel: {
        color: 'white',
        fontSize: hp('2%'),
        left: wp('13%'),
        bottom: hp('12%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    shopLabel: {
        color: 'white',
        fontSize: hp('2%'),
        left: wp('16%'),
        bottom:hp('13.5%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },
    socialLabel: {
        color: 'white',
        fontSize: hp('2%'),
        left: wp('15%'),
        bottom: hp('12%'),
        fontFamily: 'SpaceGrotesk-Medium'
    },

};

AppRegistry.registerComponent('ProfileView', () => ProfileView);