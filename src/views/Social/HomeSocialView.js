import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableOpacity, ImageBackground, Dimensions,ScrollView,ToastAndroid,Alert} from 'react-native';
import { GoogleSignin,statusCodes } from 'react-native-google-signin';
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
            mission: this.props.navigation.getParam('mission'),
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
        <View style={{backgroundColor: '#FFFFFF',flex:1,height:hp('100%'),flexDirection:'row-reverse'}} >
            
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.state.navigate('SocialView')} underlayColor={'#05BAFA'} activeOpacity={0.1} >
                <Image
                source={require("../../res/images/fotoPrueba.png")}
                style={styles.photos}
                />
            </TouchableOpacity>
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
   
  

    Evidencias = async()=>{
        
        const evokeUser= await GoogleSignin.signIn();

        console.log(evokeUser.user.id);
        console.log(evokeUser.idToken);
            fetch(`http://evokecolombia.com/evidence/list`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0IiwiaWF0IjoxNTcyMzg2OTc0LCJzZWNyZXQiOiIxMSszRXYxdjBvM2tLa2VfNCJ9.jkTrhT-KoTjU9iITyPJlxBLovfBDEPVDLgJU5PhF2HY'}`

                },
                body: JSON.stringify({
                    "id_gg": evokeUser.user.id,
                    "id_mission": "kkck",
                    
                    
                }),
                
            }).then((response) => response.json()).then((responseJson) => {
                console.log(responseJson);
                if(responseJson.status){
                console.log('cargada');
                ToastAndroid.show('Imagen cargada exitosamente!')
                }else{
                console.log('error');
                ToastAndroid.show('Error al cargar imagen')
                }
                console.log(responseJson);
            });
        
        
        
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
                            <Text style={styles.name}>David Hernández</Text>
                            <Text style={styles.rol}>Colaborador Estratégico</Text>
                            
                            
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
        width: wp('99%'),
        height: hp('9%'),
        bottom:hp('1%'),
        right:wp('4.2%')
       
        
    },
    photoIcon: {
        flex:1,
        height: hp('12%'),
        width: wp('22%'),
        left: wp('3%'),
        top: hp('3%')
    },
    
    photos: {
        marginLeft:wp('0.2%'),
        width: wp('32%'),
        height: hp('20%'),
        top:hp('0.5%')
    },
    name:{
        left:wp('24%'),
        bottom:hp('16%'),
        color: '#14def4',
        fontSize: wp('5.7%'),
        fontFamily: 'SpaceGrotesk-Bold'

    },
    rol:{
        left:wp('24%'),
        bottom:hp('16%'),
        color: 'white',
        fontSize: wp('4.2%'),
        fontFamily: 'SpaceGrotesk-Medium'

    },
    team:{
        left:wp('24%'),
        bottom:hp('16%'),
        color: 'white',
        fontSize: wp('3.8%'),
        fontFamily: 'SpaceGrotesk-Medium'

    },
    
    

};

AppRegistry.registerComponent('HomeSocialView', () => HomeSocialView);