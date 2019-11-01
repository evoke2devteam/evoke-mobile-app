import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, Button, ProgressBarAndroid, ImageBackground } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import StringsLanguage from '../utils/StringsLanguage';
import { Icon } from 'react-native-elements';


export default class ProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            userInfo: {},
            evocoins: 0,
            language: (!!this.props.navigation.getParam('language')) ? this.props.navigation.navigate.getParam('language') : null
        }
    }


    async componentDidMount(): void {
        const userInfo = await GoogleSignin.getCurrentUser();
        this.setState({ userInfo: userInfo.user });
        this.getEvocoins();
    }



    render() {

        return (
            <ImageBackground source={require('../res/images/fondoCirculo.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <View>
                        <View opacity={0.76}>
                            <ImageBackground style={{ height: '27%', width: '97%', left: '9.5%', top: '0.1%' }}
                                source={require('../res/images/cajaCounter.png')}>
                                <Image source={require('../res/images/EvocointIcon.png')} style={{ height: '10%', width: '8%', top: '3.5%', left: '69%' }} />
                                <Text style={{ height: '10%', width: '10%', bottom: '6%', left: '80%', color: 'white', fontSize: 26 }}>60</Text>
                                <Text style={{ height: '10%', bottom: '5%', left: '80%', color: 'white', fontSize: 12 }}>Evocoints</Text>
                                <Image source={require('../res/images/rubiesIcon.png')} style={{ height: '10%', width: '8%', bottom: '26%', left: '38%' }} />
                                <Text style={{ height: '10%', bottom: '36%', left: '50%', color: 'white', fontSize: 26 }}>1234</Text>
                                <Text style={{ height: '10%', bottom: '35%', left: '51%', color: 'white', fontSize: 12 }}>Rubies</Text>
                            </ImageBackground>
                            <Text style={styles.container_Start}>Perfil</Text>
                            <ImageBackground
                                style={{ height: '54%', width: '98%', bottom: '23%' }}
                                source={require('../res/images/containerCentral.png')}>
                                {/* contenido */}
                                <Image source={require('../res/images/avatar.png')} style={{ height: '35%', width: '30%', top: '3%', left: '33%' }} />
                                <Text style={{ color: 'white', fontSize: 40, top: '5%', left: '76%' }}>1</Text>
                                <ProgressBarAndroid styleAttr="Horizontal" color="#3fa9f5" indeterminate={false}
                                    progress={0.2} style={{ width: '20%', height: '100%', marginLeft: '30%', bottom: '47%' }} />
                                <Text style={{ color: 'white', fontSize: 20, bottom: '99%', left: '17%' }}>Nivel</Text>
                                <Text style={{ color: 'white', fontSize: 11, bottom: '96%', left: '17%' }}>100</Text>
                                <Text style={{ color: 'white', fontSize: 11, bottom: '98%', left: '21.6%', fontWeight: 'bold' }}>/</Text>
                                <Text style={{ color: 'white', fontSize: 11, bottom: '100%', left: '23%', fontWeight: 'bold' }}>150</Text>
                            </ImageBackground>
                            <View>
                                <ImageBackground
                                    style={{ height: '39%', width: '100%', bottom: '100.8%' }}
                                    source={require('../res/images/boton.png')}>
                                    <View style={styles.container_buttons}>
                                        <Button title="Jugar" color="#474d791A" />
                                    </View>
                                </ImageBackground>
                                <Text style={{ color: 'white', fontSize: 20, bottom: '113%', left: '4%' }}>Habilidad</Text>
                                <Text style={{ color: 'white', fontSize: 20, bottom: '117.6%', left: '42%' }}>Tienda</Text>
                                <Text style={{ color: 'white', fontSize: 20, bottom: '122%', left: '81%' }}>Equipo</Text>
                                <TouchableHighlight onPress={() => this.state.navigate('SkillsView')} underlayColor={'#05BAFA'} activeOpacity={0.1} style={{bottom:'139%', height:'1%',width:'1%',left:'6%'}}>
                                    <Image
                                        source={require('../res/images/habilidades.png')}
                                    />
                                </TouchableHighlight>
                    
                                <TouchableHighlight onPress={() => this.state.navigate('SkillsView')} underlayColor={'#05BAFA'} activeOpacity={0.1} style={{bottom:'139%', height:'1%',width:'1%',left:'40%'}}>
                                    <Image
                                        source={require('../res/images/carrito.png')}
                                    />
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => this.state.navigate('SkillsView')} underlayColor={'#05BAFA'} activeOpacity={0.1} style={{bottom:'139%', height:'1%',width:'1%',left:'80%'}}>
                                    <Image
                                        source={require('../res/images/equipo.png')}
                                    />
                                </TouchableHighlight>
                                
                            </View>
                     

                        </View>


                    </View>


                </View>
            </ImageBackground>
        );
    }

    getEvocoins() {
        fetch('/evocoin/balanceOf', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.userInfo.email
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({ evocoins: responseJson.evocoins });
            })
            .catch((error) => {
                this.setState({ evocoins: 0 });
                console.log(error);
            });
    }


}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    container_username: {
        width: '50%',
        justifyContent: 'flex-start',
        paddingLeft: '20%',
        marginRight: '80%'

    },
    container_Start: {
        width: '100%',
        color: '#14def4',
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: '80%',
        bottom: '25%'
    },
    username: {
        color: '#fff',
        textAlign: 'left',
        width: '100%',
        justifyContent: 'space-between'
    },
    avatar: {
        height: '60%',
        width: '50%',
        marginTop: '4%',
        marginLeft: '25%',

    },
    skill: {
        bottom: '20%',


    },
    container_buttons: {
        height: 500,
        top: '13%',
        left: '9%',
        width: '84%'
    },
    item: {
        width: '48%',
        alignItems: 'center',
        marginLeft: '1%',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 20,
        minHeight: 80,
        marginTop: 150,
        backgroundColor: 'white',

    },
    text_buttons: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container_settings: {
        position: 'absolute',
        right: '1%',
        top: '40%'
    }
};

AppRegistry.registerComponent('ProfileView', () => ProfileView);
