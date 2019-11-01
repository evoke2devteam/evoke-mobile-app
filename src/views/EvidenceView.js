import React from 'react';
import {AppRegistry, ScrollView, Text, Button, TextInput, Image, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import StringsLanguage from '../utils/StringsLanguage';
import { GoogleSignin } from 'react-native-google-signin';
import Config from '../utils/Constants';



export default class EvidenceView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            campaign: this.props.navigation.getParam('campaign'),
            mission: this.props.navigation.getParam('mission'),
            description: null,
            idGoogle: null,
            accessToken: null
        }
        this.sendEvidence = this.sendEvidence.bind(this);
    }

    async componentDidMount() {
        let googleInfo = await GoogleSignin.signIn();
        let tokensInfo = await GoogleSignin.getTokens();
        this.setState({idGoogle: googleInfo.user.id, accessToken: tokensInfo.accessToken});
    }

    static getDerivedStateFromProps(nextProps) {
        return {pathPhoto: nextProps.navigation.getParam('pathPhoto')};
    }
    

    GoogleDrive = async () => {
        
        var token= await GoogleSignin.getTokens();
        console.log(token.accessToken);
        console.log(this.state.image);
            fetch('https://40.117.251.50/save-drive', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    access_token:token.accessToken,
                    mimeType: 'image/jpeg',
                    name: 'imagen1',
                    image: this.state.image
                }),
                
            }).then((response) => response.json()).then((responseJson) => {
                console.log(responseJson);
                if(responseJson.status){
                console.log('guardada');
                ToastAndroid.show('Imagen guardada exitosamente!')
                }else{
                console.log('error');
                ToastAndroid.show('Error al subir imagen')
                }
                console.log(responseJson);
            });
        
        
        
    }


    render() {
        return (
            <ScrollView>
                <Text style={styles.title}>{StringsLanguage.title_section_evidence} {this.state.mission}</Text>
                { (this.state.pathPhoto) ?
                    <Image style={{width: 200, height: 200}} source={{uri: `data:image/jpeg;base64,${this.state.pathPhoto}`, isStatic:true}}/> :
                    <Icon
                        reverse
                        name='ios-camera'
                        type='ionicon'
                        color='#517fa4'
                        size={40}
                        onPress={() => {this.state.navigate('CameraView', {campaign: this.state.campaign, mission: this.state.mission})} }
                    />

                }

                <TextInput
                    style={styles.textInput}
                    onChangeText={(description) => this.setState({description})}
                    placeholder={StringsLanguage.evidence_placeholder_description}
                />

                <Button title={StringsLanguage.send_evidence_button} onPress={this.sendEvidence}/>
                <Button title={StringsLanguage.back_to_campaign_button} onPress={() => this.state.navigate('CampaignDetailView', {campaign: this.state.campaign})}/>


        </ScrollView>
        );
    }

    sendEvidence(){
        fetch(`${Config.API_URL}/submit-drive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mimeType": "image/jpeg",
                "name": `Evidence_mission_${this.state.mission}`,
                "id_gg": this.state.idGoogle,
                "idMission": this.state.mission.toString(),
                "description": this.state.description,
                "image": `data:image/jpeg;base64,${this.state.pathPhoto}`,
                "access_token": this.state.accessToken
            })
        }).then((response) => response.json()).then((responseJson) => {
            if(responseJson.status){
                Alert.alert(
                    '',
                    StringsLanguage.send_evidence_success,
            [ {text: 'Ok', onPress: () => this.state.navigate('CampaignDetailView', {campaign: this.state.campaign})} ]
                );
            }else{
                Alert.alert(
                    '',
                    StringsLanguage.send_evidence_error,
                    [ {text: 'Ok'} ]
                );
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

const styles = {
    title:{
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
    camera:{
        fontSize: 40
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        marginBottom: 30
    }
};

AppRegistry.registerComponent('EvidenceView', () => EvidenceView);
