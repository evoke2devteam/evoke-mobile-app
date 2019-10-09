import React from 'react';
import {AppRegistry, View, TextInput, Alert, Button} from 'react-native';
import StringsLanguage from '../utils/StringsLanguage';

export default class CodeValidationView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            code: null
        };
    }

    codeValidate(){
        if(this.state.code){
            this.state.navigate('AuthView');
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
        }
    }

    render() {
        return (
            <View style={styles.container}>
                    <View>
                        <TextInput
                            style={{ height: 40, marginTop: 80, borderBottomWidth: 1, borderBottomColor: '#6d6d6d'}}
                            onChangeText={code => {this.setState({code})}}
                        />
                        <Button
                            style={styles.button}
                            title={StringsLanguage.code_validate_button}
                            onPress={() => this.codeValidate()}
                        />
                    </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        marginTop: 25
    }
};

AppRegistry.registerComponent('CodeValidationView', () => CodeValidationView);
