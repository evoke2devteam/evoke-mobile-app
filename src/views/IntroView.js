import React from 'react';
import { AppRegistry } from 'react-native';
import { View, Text } from 'react-native';
import StringsLanguage from '../utils/StringsLanguage';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon} from "react-native-elements";

const slides = [
    {
        key: '1',
        text: 'Evoke: Es un juego donde realizas misiones, solucionas problemas y ganas dinero',
        icon: 'ios-bicycle'
    },
    {
        key: '2',
        text: 'Campaña: Es una serie de misiones con diferentes niveles de dificultad',
        icon: 'ios-bicycle'
    },
    {
        key: '3',
        text: 'Evokation: Es el proyecto resultante al cumplir las misiones de la campaña',
        icon: 'ios-bicycle'
    },
    {
        key: '4',
        text: 'Evocoins y rubíes: Ambos son monedas virtuales.',
        icon: 'ios-bicycle'
    },
];

export default class IntroView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
        }
    }

    renderItem = (item) => {
        return (
            <View style={styles.mainContent}>
                <Icon
                    name={item.item.icon}
                    type='ionicon'
                    color='#0DAEF4'
                    size={200}
                />
                <Text style={styles.text}>{item.item.text}</Text>
            </View>
        );
    };



    render() {
        return (
            <AppIntroSlider renderItem={this.renderItem} slides={slides} onDone={() => {this.state.navigate('AuthView');}} bottomButton/>
        );
    }
}

const styles = {
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#666666',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
        fontSize: 16,
        width: 200
    },
    buttonCircle: {
        width: 80,
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

AppRegistry.registerComponent('IntroView', () => IntroView);
