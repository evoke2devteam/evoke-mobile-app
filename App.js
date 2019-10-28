import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraView from './src/views/CameraView';
import AuthView from './src/views/AuthView';
import ProfileView from './src/views/ProfileView';
import CampaignListView from './src/views/CampaignListView';
import CampaignDetailView from './src/views/CampaignDetailView';
import CartoonView from './src/views/CartoonView';
import EvidenceView from './src/views/EvidenceView';
import SettingsView from './src/views/SettingsView';
import CodeValidationView from './src/views/CodeValidationView';
import IntroView from './src/views/IntroView';
import LoadingView from './src/views/LoadingView';

const MainNavigator = createStackNavigator({
    LoadingView: {screen: LoadingView},
    CodeValidationView: {screen: CodeValidationView},
    IntroView: {screen: IntroView},
    CameraView: {screen: CameraView},
    AuthView: {screen: AuthView},
    ProfileView: {screen: ProfileView},
    CampaignListView: {screen: CampaignListView},
    CampaignDetailView: {screen: CampaignDetailView},
    CartoonView: {screen: CartoonView},
    EvidenceView: {screen: EvidenceView},
    SettingsView: {screen: SettingsView},
});

const App = createAppContainer(MainNavigator);

export default App;
