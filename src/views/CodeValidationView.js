import React from 'react';
import {AppRegistry, View, TextInput, Alert, Button, Text} from 'react-native';
import StringsLanguage from '../utils/StringsLanguage';
import { Icon } from 'react-native-elements';

export default class CodeValidationView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            code: null,
            validating: false
        };
    }

    validate(){
        this.setState({validating: true});
        setTimeout(this.codeValidate.bind(this), 3000);

    }

    codeValidate(){
        if(this.state.code){
            this.state.navigate('IntroView');
        }else{
            Alert.alert(
                StringsLanguage.title_error_validation,
                StringsLanguage.content_error_validation,
                [
                    {
                        text: StringsLanguage.accept_error_validation
                    }
                ],
                {cancelable: false}
            );
            this.setState({validating: false});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon
                    name='ios-key'
                    type='ionicon'
                    color='#0DAEF4'
                    size={200}
                    onPress={() => {this.state.navigate('CameraView', {mision: this.state.mision, activity: this.state.activity})} }
                />
                <Text style={styles.instructions}>
                    {StringsLanguage.label_instructions}
                </Text>
                <View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={code => {this.setState({code})}}
                    />
                    {(this.state.validating === true) ?
                        <Text style={styles.text}>{StringsLanguage.label_code_validate}</Text> :
                        <Button
                            style={styles.button}
                            title={StringsLanguage.code_validate_button}
                            onPress={() => this.validate()}
                        />
                    }
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructions:{
      fontSize: 18,
        marginTop: 30
    },
    text: {
        fontSize: 20
    },
    textInput:{
        height: 40,
        width: 150,
        borderWidth: 1,
        borderBottomColor: '#6d6d6d',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center'
    },
    button: {
        width: '100%',
        backgroundColor: '#0DAEF4',
    }
};

AppRegistry.registerComponent('CodeValidationView', () => CodeValidationView);
