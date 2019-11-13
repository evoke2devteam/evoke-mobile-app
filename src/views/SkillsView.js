import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TouchableOpacity, ImageBackground, Dimensions,ScrollView,ToastAndroid,Alert} from 'react-native';
import { GoogleSignin,statusCodes } from 'react-native-google-signin';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { TabView, SceneMap,TabBar} from 'react-native-tab-view';
 

 



export default class SkillsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            mission: this.props.navigation.getParam('mission'),
            userInfo: {},
            index: 0,
            language: (!!this.props.navigation.getParam('language')) ? this.props.navigation.navigate.getParam('language') : null
        }
    }
   


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
            
            <ImageBackground source={require('./../res/images/fondoCirculo.jpg')} style={styles.backgroundOne}>
                <ScrollView style={styles.container} >
                    
                    <View style={{ width: wp('100%'), height: hp('15%'),flexDirection:'row'}}>
                        
            
                            <Image
                                source={require('./../res/images/creatividad.png')}
                                 style={{height:hp('10%'),width:wp('18%'),left:wp('80%'),top:hp('2%')}}/>
                            
                            <Text style={{fontSize:wp('6%'),color:('#14DFF4'),right:wp('14%'),top:hp('1%'),fontFamily:'SpaceGrotesk-Regular'}}>Habilidad</Text>
                            <Text style={{fontSize:wp('9%'),color:('white'),right:wp('40%'),top:hp('4%'),fontFamily:'SpaceGrotesk-Regular'}}>Creativo</Text>
                            <Text style={{fontSize:wp('6%'),color:('white'),right:wp('74%'),top:hp('10%'),fontFamily:'SpaceGrotesk-Regular'}}>Multidimensional</Text>
                            
                            
                      
                        
                    </View>
                     <View style={{ width: wp('100%'),height:hp('20%'), flexDirection: 'column' }}>
                     <ImageBackground
                     source={require('./../res/images/cajaCarpeta.png')}
                     style={{width:wp('98%'),height:hp('20%'),marginLeft:wp('1%')}}/>
                    </View>
                    <View style={{ width: wp('100%'),height:hp('40%'), flexDirection: 'row' }}>
                    <ImageBackground
                     source={require('./../res/images/cajaCarpeta.png')}
                     style={{width:wp('63%'),height:hp('7%'),marginTop:hp('1%')}}/>
                     <ImageBackground
                     source={require('./../res/images/puntajes.png')}
                     style={{width:wp('35%'),marginTop:hp('1%'),marginLeft:wp('1%'),height:hp('35%')}}/>
                    </View>
                    <View style={{ width: wp('100%'),height:hp('25%'), flexDirection: 'column',backgroundColor:'#333A47' }}>
                     <Image source={require('./../res/images/detalle.png')}
                     style={{width:wp('30%'),height:hp('3%'),marginLeft:wp('70%')}}/>
                    </View>
                   

                    

                </ScrollView>
            </ImageBackground>

        );
    }



}
const styles = {
    container: {
        flex: 1,
        flexDirection:'column',
        
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

AppRegistry.registerComponent('SkillsView', () => SkillsView);