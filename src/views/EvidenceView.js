import React from 'react';
import {AppRegistry, ScrollView, Text, Button, TextInput, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import StringsLanguage from '../utils/StringsLanguage';

export default class EvidenceView extends React.Component {
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

    static getDerivedStateFromProps(nextProps) {
        return {pathPhoto: nextProps.navigation.getParam('pathPhoto')};
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.title}>{StringsLanguage.title_section_evidence} {this.state.mission}</Text>
                { (this.state.pathPhoto) ?
                    <Image style={{width: 200, height: 200}} source={{uri: this.state.pathPhoto, isStatic:true}}/> :
                    <Icon
                        reverse
                        name='ios-camera'
                        type='ionicon'
                        color='#517fa4'
                        size={40}
                        onPress={() => {this.state.navigate('CameraView', {campaign: this.state.campaign, mission: this.state.mission})} }
                    />

                }

                <TextInput
                    style={styles.textInput}
                    placeholder={StringsLanguage.evidence_placeholder_description}
                />
                <Button title={StringsLanguage.send_evidence_button} onPress={() => this.state.navigate('CampaignDetailView', {campaign: this.state.campaign, mission: this.state.mission})}/>
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
    },
    camera:{
        fontSize: 40
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        marginBottom: 30
    }
};

AppRegistry.registerComponent('EvidenceView', () => EvidenceView);
