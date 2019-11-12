import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraView from './src/views/CameraView';
import AuthView from './src/views/AuthView';
import HomeView from './src/views/HomeView';
import ProfileView from './src/views/ProfileView';
import MisionListView from './src/views/MisionListView';
import MisionDetailView from './src/views/MisionDetailView';
import CartoonView from './src/views/CartoonView';
import EvidenceView from './src/views/EvidenceView';
import SettingsView from './src/views/SettingsView';
import CodeValidationView from './src/views/CodeValidationView';
import SkillsView from './src/views/SkillsView';
import TabNavigator from './src/views/TabNavigator';
import SocialView from './src/views/Social/SocialView';


const MainNavigator = createStackNavigator({
    HomeView: {screen: HomeView},
    CameraView: {screen: CameraView},
    AuthView: {screen: AuthView},
    ProfileView: {screen: ProfileView},
    MisionListView: {screen: MisionListView},
    MisionDetailView: {screen: MisionDetailView},
    CartoonView: {screen: CartoonView},
    EvidenceView: {screen: EvidenceView},
    SettingsView: {screen: SettingsView},
    CodeValidationView: {screen: CodeValidationView},
    SkillsView: {screen: SkillsView},
    TabNavigator: {screen: TabNavigator},
    SocialView:{screen: SocialView}
});

const App = createAppContainer(MainNavigator);

export default App;
