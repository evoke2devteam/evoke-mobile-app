import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import StringsLanguage from '../utils/StringsLanguage';
import {GoogleSignin} from "react-native-google-signin";
import AsyncStorage from "@react-native-community/async-storage";
import Constants from "../utils/Constants";
import config from "../../config";
import {Icon} from "react-native-elements";

export default class LoadingView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate
        };
        this.loadLanguage();
    }

    async componentDidMount(): void {
        LoadingView.configureGoogleSignIn();
        setTimeout(this.verifyAuth.bind(this), 3000);
    }

    static configureGoogleSignIn() {
        GoogleSignin.configure({
            webClientId: config.CLIENT_ID,
            offlineAccess: false,
        });
    }

    async verifyAuth(){
        const isSignedIn = await GoogleSignin.isSignedIn();

        if(isSignedIn){
            this.state.navigate('ProfileView');
        }else{
            this.state.navigate('IntroView');
        }
    }

    async loadLanguage(){
        try {
            let language = await AsyncStorage.getItem('language');
            if(language === undefined || language === null){
                language = Constants.DEFAULT_LANGUAGE;
                await AsyncStorage.setItem('language', language);
            }
            StringsLanguage.setLanguage(language);
            this.setState({
                labelStartButton: StringsLanguage.start_button,
                labelValidateButton: StringsLanguage.validate_button
            })
        } catch (error) {
            console.log('Error', error);
        }
    }

    render() {
        return (
            <View>
                <Icon
                    name='ios-battery-charging'
                    type='ionicon'
                    color='#0DAEF4'
                    size={200}
                    onPress={() => {this.state.navigate('CameraView', {mision: this.state.mision, activity: this.state.activity})} }
                />
                <Text style={styles.text}>{StringsLanguage.loading_text}</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        marginTop: 30,
        textAlign: 'center'
    },
};

AppRegistry.registerComponent('LoadingView', () => LoadingView);
