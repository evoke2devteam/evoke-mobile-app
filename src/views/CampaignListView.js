import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import StringsLanguage from '../utils/StringsLanguage';
import CampaignsData from '../data/campaigns';
import AsyncStorage from "@react-native-community/async-storage";

export default class CampaignListlView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            list: CampaignsData,
            language: null
        }
    }

    componentDidMount(): void {
        AsyncStorage.getItem('language').then((language) => this.setState({language}));
    }

    render() {
        let campaignList = this.state.list.filter( campaign => campaign['tags'].includes(this.state.language) );
        return (
            <View>
                <Text style={styles.title}>{StringsLanguage.title_section_campaign_list}</Text>
                {
                    campaignList.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            topDivider
                            chevron
                            onPress={() => { this.state.navigate('CampaignDetailView', {campaign: item}) }}
                        />
                    ))
                }
            </View>
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

AppRegistry.registerComponent('CampaignListlView', () => CampaignListlView);
