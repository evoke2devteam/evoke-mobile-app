import React from 'react';
import { AppRegistry, ScrollView, Text, Image, Button } from 'react-native';
import StringsLanguage from '../utils/StringsLanguage';

export default class ImmersionView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate
        }
    }

    render() {
        return (
            <ScrollView>
                <Text>Trivia</Text>

            </ScrollView>
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

AppRegistry.registerComponent('ImmersionView', () => ImmersionView);
