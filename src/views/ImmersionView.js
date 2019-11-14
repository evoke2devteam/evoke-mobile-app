import React from 'react';
import {AppRegistry, Text, View, Dimensions, Button, Alert} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import SwiperFlatList from 'react-native-swiper-flatlist';
import ImmersionData from '../data/inmersion';
import RadioForm from 'react-native-simple-radio-button';
import StringsLanguage from "../utils/StringsLanguage";

export default class ImmersionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            questions: ImmersionData,
            currentSlide: 0
        };
        this.sendTest = this.sendTest.bind(this);
    }

    async sendTest(){
        await AsyncStorage.setItem('immersion', 'true');
        this.state.navigate('TabNavigator');
    }

    render() {
        return (
            <View style={styles.container}>
                <SwiperFlatList
                    showPagination
                    paginationDefaultColor="#517fa4"
                    paginationActiveColor="gray"
                    onChangeIndex={(data) => {
                        this.setState({currentSlide: data.index})
                    }}
                >
                    {
                        this.state.questions.map((question, i) => {
                            return <View style={[styles.child]} key={i}>
                                <Text style={styles.text}>
                                    {question.question}
                                </Text>
                                <RadioForm
                                    style={{width: 250}}
                                    radio_props={question.options}
                                    onPress={(value) => {}}
                                />
                                    {
                                        (this.state.currentSlide === this.state.questions.length - 1) ?
                                            <Button
                                                title="Enviar"
                                                style={styles.button}
                                                onPress={() => Alert.alert(
                                                    'Muy bien!',
                                                    'Hemos encontrado que el perfil que más se ajusta a tu personalidad es: FILÁNTROPO',
                                                    [{text: 'Continuar', onPress: () => {this.sendTest()}}],
                                                    {cancelable: false},
                                                )}
                                            /> : null
                                    }
                            </View>
                        })
                    }

                </SwiperFlatList>
            </View>
        );
    }
}

export const { width, height } = Dimensions.get('window');

const styles = {
    container: {
        backgroundColor: 'white'
    },
    child: {
        height: height,
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        width: 250
    },
    button: {
        width: '100%',
        backgroundColor: '#0DAEF4',
    }
};

AppRegistry.registerComponent('ImmersionView', () => ImmersionView);
