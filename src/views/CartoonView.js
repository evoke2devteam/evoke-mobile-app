import React from 'react';
import { AppRegistry, ScrollView, Text, Image, Button } from 'react-native';
import StringsLanguage from '../utils/StringsLanguage';

export default class CartoonView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            campaign: this.props.navigation.getParam('campaign'),
            mission: this.props.navigation.getParam('mission')
        }
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.title}>{StringsLanguage.title_section_cartoon}</Text>
                <Image source={require("../res/images/cartoon_1.png")}/>
                <Image source={require("../res/images/cartoon_2.png")}/>
                <Button onPress={()=>{this.state.navigate('EvidenceView', {campaign: this.state.campaign, mission: this.state.mission})}}
                title={StringsLanguage.go_to_form_evidence}/>
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

AppRegistry.registerComponent('CartoonView', () => CartoonView);
