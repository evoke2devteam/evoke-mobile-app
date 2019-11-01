import React from 'react';
import { AppRegistry } from 'react-native';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon} from "react-native-elements";
import SlidesData from '../data/intro_slides';
import AsyncStorage from "@react-native-community/async-storage";

export default class IntroView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            slides: SlidesData,
            language: null
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('language').then((language) => {
            this.setState({slides: this.state.slides.filter(mission => mission['lang'] === language )});
        });

    }

    renderItem (item) {
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

    renderDoneButton () {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name='ios-checkmark'
                    type='ionicon'
                    color='#517fa4'
                    size={70}
                />
            </View>
        );
    };

    render() {
        return (
            <AppIntroSlider renderItem={this.renderItem} slides={this.state.slides} onDone={() => {this.state.navigate('AuthView');}} renderDoneButton={this.renderDoneButton}/>
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
