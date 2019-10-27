import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import StringsLanguage from '../utils/StringsLanguage';
import {GoogleSignin} from "react-native-google-signin";
import AsyncStorage from "@react-native-community/async-storage";
import Constants from "../utils/Constants";
import config from "../../config";

export default class LoadingView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate
        };
        this.loadLanguage();
    }

    async componentDidMount(): void {
        LoadingView.configureGoogleSignIn();
        this.verifyAuth();
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
                <Text>Cargando...</Text>
            </View>
        );
    }
}

const styles = {
    title:{
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    }
};

AppRegistry.registerComponent('LoadingView', () => LoadingView);
