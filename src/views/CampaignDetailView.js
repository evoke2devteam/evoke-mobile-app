import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {ListItem} from "react-native-elements";
import StringsLanguage from '../utils/StringsLanguage';

export default class CampaignDetailView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            campaign: this.props.navigation.getParam('campaign')
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.state.campaign.title}</Text>
                <Text style={styles.description}>{this.state.campaign.description}</Text>
                <Text style={styles.subtitle}>{StringsLanguage.subtitle_section_campaign}</Text>

                <View>
                    {
                        this.state.campaign.missions.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.description}
                                topDivider
                                chevron = { !item.completed }
                                checkmark = { item.completed }
                                disabled={ item.lock }
                                onPress={() => { this.state.navigate('EvidenceView', {campaign: this.state.campaign, mission: item.id}) }}
                            />
                        ))
                    }
                </View>
            </View>

        );
    }
}

const styles = {
    title: {
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
    description:{
        fontSize: 20,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
    subtitle: {
        fontSize: 26,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    }
};

AppRegistry.registerComponent('CampaignDetailView', () => CampaignDetailView);
