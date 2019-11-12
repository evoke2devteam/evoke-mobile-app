import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight, TouchableOpacity, Button, StyleSheet, ImageBackground, Dimensions,ScrollView } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import Animated from 'react-native-reanimated';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { TabView, SceneMap,TabBar} from 'react-native-tab-view';
 

 



export default class HomeSocialView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            userInfo: {},
            index: 0,
            routes: [
            { key: 'photos', title: 'Fotos' },
            { key: 'missions', title: 'Misiones' },
            { key: 'team', title:'Equipo'},
            ],
            language: (!!this.props.navigation.getParam('language')) ? this.props.navigation.navigate.getParam('language') : null
        }
    }
    Photos = () => (
        <View style={{ backgroundColor: '#FFFFFF',flex:1,height:hp('100%'),flexDirection:'row'}} >
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            </View>
      );

    Missions = () => (
        <View style={{ backgroundColor: '#FFFFFF',flex:1,height:hp('100%')}} />
      );

    Team = () => (
          <View style={{ backgroundColor: '#FFFFFF',flex:1,height:hp('100%')}} />
      );


    async componentDidMount(): void {
        const userInfo = await GoogleSignin.getCurrentUser();
        this.setState({ userInfo: userInfo.user });
       
    }

    
    render() {

        return (
            
            <ImageBackground source={require('../../res/images/fondoCirculo.jpg')} style={styles.backgroundOne}>
                <ScrollView style={styles.container} >
                    
                    <View style={{ width: wp('100%'), height: hp('25%'),flexDirection:'row'}}>
                        
                            
                            
                            <ImageBackground
                            style={styles.photoIcon}
                            source={require('../../res/images/perfilPrueba.png')}>
                                
                            <Image
                                source={require('../../res/images/cajaPerfil.png')}
                                style={styles.lineProfile}  />
                            <Image
                                source={require('../../res/images/creatividad.png')}
                                 style={{height:hp('8%'),width:wp('16%'),left:wp('79.5%'),bottom:hp('8%')}}/>
                            
                            <Text style={styles.team}>Equipo 7</Text>
                            <Text style={styles.name}>David el gato muerto</Text>
                            <Text style={styles.rol}>Colaborador estrategico</Text>
                            
                            
                        </ImageBackground>
                        
                    </View>
                     <View style={{ width: wp('100%'), flexDirection: 'row' }}>
                     <TabView
                        
                        style={{bottom:hp('6%'),margin:wp('2%')}}
                        navigationState={this.state}
                        onIndexChange={index => this.setState({ index })}
                        renderTabBar={props =>
                            <TabBar
                              {...props}
                              indicatorStyle={{ backgroundColor: '#FFDB43', height:hp('0.8%')}}
                              style={{ backgroundColor: '#333A47' }}
                              tabStyle={{ height:hp('7%')}} 
                              renderLabel={({ route, focused, color, }) => (
                                <Text style={{ color, margin: 8,  fontFamily: 'SpaceGrotesk-Regular',fontSize:hp('2.5%') }}>
                                    {route.title}
                                </Text>
                            )}
                            />
                          }
                        renderScene={SceneMap({
                            photos: this.Photos,
                            missions: this.Missions,
                            team: this.Team,
                        })}
                        initialLayout={{ width: Dimensions.get('window').width }}
                        
                    />
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
        bottom:hp('2.4%'),
        right:wp('4%'),
        
    },
    photoIcon: {
        flex:1,
        height: hp('12%'),
        width: wp('22%'),
        left: wp('3%'),
        top: hp('3%')
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
    
    

};

AppRegistry.registerComponent('HomeSocialView', () => HomeSocialView);