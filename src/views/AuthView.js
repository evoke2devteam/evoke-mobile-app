import React from 'react';
import { AppRegistry, StyleSheet, View, Alert, Button, Image, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import AsyncStorage from "@react-native-community/async-storage";
import config from "../../config";
import Config from "../utils/Constants";


export default class AuthView extends React.Component {

  static navigationOptions = {
    title: 'AuthView'
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      navigate: this.props.navigation.navigate,
      isAuthenticated: false
    }
  }

  async componentDidMount() {
    this.configureGoogleSignIn();
  }

  configureGoogleSignIn() {
    GoogleSignin.configure({
      scopes: [
          'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
       
      ],
      webClientId: config.CLIENT_ID,
      offlineAccess: false
    });
  }

  getCurrentUser = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo, error: null });
    } catch (error) {
      error.code === statusCodes.SIGN_IN_REQUIRED ? 'Please sign in :)' : error.message;
      this.setState({
        error: new Error(errorMessage),
      });


    }
  }

  async storeToken(key, value) {
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
        Alert.alert('Inicio de sesión cancelado');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('Login en progreso');
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

  goToProfile(){
      this.state.navigate('TabNavigator');
  }

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
              "lastName": name,
              "email": email
          })
      }).then( (response) => response.json()).then(async (responseJson) => {
          if(responseJson.status){
            await AsyncStorage.setItem("id_bc", responseJson.data.id_bc);
            await AsyncStorage.setItem("evoke_token", responseJson.token);
            this.goToProfile();
          }else{
              this.goToProfile();
              /*Alert.alert(
                  '',
                  'Ha ocurrido un error, intentalo nuevamente',
                  [ {text: 'Ok'} ]
              );*/
          }
      }).catch((error) => {
          this.goToProfile();
          /*Alert.alert(
              '',
              'Ha ocurrido un error, intentalo nuevamente',
              [ {text: 'Ok'} ]
          );*/
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

  render() {

    const body = this.state.isAuthenticated ? this.renderSignOutButton() : this.renderSignInButton();
    return (
      <View style={[styles.container, { flex: 1 }]}>
        {body}
      </View>
    );
  }

  renderSignOutButton() {
    return (
      <View style={styles.container}>
        <Button onPress={this.signOut} title="Log out" />
      </View>
    );
  }

  renderSignInButton() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 80 }}>
          <Image source={require('../res/images/gmail.jpg')} />
        </View>
        <GoogleSigninButton
          style={{ width: 300, height: 60 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Auto}
          onPress={this.signIn}
        />
        <Text style={{ marginTop: 30 }}> Accede con tu cuenta Google para disfrutar el contenido de Evoke</Text>
      </View>
    );
  }


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
