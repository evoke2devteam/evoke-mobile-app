import React from 'react';
import { AppRegistry, StyleSheet, View, Alert, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import AsyncStorage from "@react-native-community/async-storage";
import config from "../../config";
import Config from "../utils/Constants";

export default class AuthView extends React.Component {

  static navigationOptions = {
    title: 'Evoke'
  };

  constructor(props) {
    super(props);
    this.state = {
      navigate: this.props.navigation.navigate,
      isAuthenticated: false
    }
  }

  async componentDidMount(){
    this.configureGoogleSignIn();
  }

  configureGoogleSignIn() {
    GoogleSignin.configure({
      scopes: [
          'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.appdata',
        'https://www.googleapis.com/auth/drive.metadata',
        'https://www.googleapis.com/auth/drive.metadata.readonly',
        'https://www.googleapis.com/auth/drive.photos.readonly',
        'https://www.googleapis.com/auth/drive.readonly',
        'https://www.googleapis.com/auth/drive.scripts'
      ],
      webClientId: config.CLIENT_ID,
      offlineAccess: false
    });
  }

  async storeToken (key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    const body = this.state.isAuthenticated ? this.renderSignOutButton() : this.renderSignInButton();
    return (
        <View style={[styles.container, { flex: 1 }]}>
          {body}
        </View>
    );
  }

  renderSignOutButton(){
    return (
        <View style={styles.container}>
          <Button onPress={this.signOut} title="Log out" />
        </View>
    );
  }

  renderSignInButton() {
    return (
        <View style={styles.container}>
          <GoogleSigninButton
              style={{ width: 212, height: 48 }}
              size={GoogleSigninButton.Size.Standard}
              color={GoogleSigninButton.Color.Auto}
              onPress={this.signIn}
          />
        </View>
    );
  }

  async goToProfile(){
    this.state.navigate('ProfileView');
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, error: null });
      const token = await GoogleSignin.getTokens();
      await AsyncStorage.setItem("google_token", token.idToken);
      await AsyncStorage.setItem("id_gg", userInfo.user.id);
      this.authEvoke(userInfo.user.id, userInfo.user.name, userInfo.user.email, token.idToken);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        Alert.alert('Something went wrong', JSON.stringify(error));
        this.setState({
          error,
        });
      }
      this.state.navigate('HomeView');
    }
  };

  authEvoke(idGoogle, name, email, authToken){
      fetch(`${Config.API_URL}/account/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify({
              "id_gg": idGoogle,
              "firstName": name,
              "email": email
          })
      }).then( (response) => response.json()).then(async (responseJson) => {
          if(responseJson.status){
            await AsyncStorage.setItem("id_bc", responseJson.data.id_bc);
            await AsyncStorage.setItem("id_sb", responseJson.data.id_sb);
            await AsyncStorage.setItem("evoke_token", responseJson.token);
            this.goToProfile();
          }else{
              Alert.alert(
                  '',
                  'Ha ocurrido un error, intentalo nuevamente',
                  [ {text: 'Ok'} ]
              );
          }
      }).catch((error) => {
          console.error(error);
      });

  }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AuthView', () => AuthView);
