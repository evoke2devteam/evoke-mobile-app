import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, AppRegistry,Button } from 'react-native'
import { GoogleSignin } from 'react-native-google-signin';
import MenuDrawer from 'react-native-side-drawer'

export default class DrawerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            navigate: this.props.navigation.navigate,
            userInfo: {},
        };
    }

    static navigationOptions = {
        drawerLabel: 'Drawer'
    };

    async componentDidMount(): void {
        const userInfo = await GoogleSignin.getCurrentUser();
        this.setState({ userInfo: userInfo.user });
        
    }

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();

            this.setState({ userInfo: {}, error: null });
            this.state.navigate("HomeView");

        } catch (error) {
            this.setState({
                error,
            });
        }
    };

    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    drawerContent() {
        return (

            <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
                {/* <Text> {(!!this.state.userInfo.name) ? this.state.userInfo.name : 'Ha ocurrido un problema'} </Text> */}
                <Button title="Salir" onPress={this.signOut} />
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>

                <MenuDrawer
                    open={true}
                    drawerContent={this.drawerContent()}
                    drawerPercentage={45}
                    animationTime={250}
                    overlay={true}
                    opacity={0.4}
                >
                    <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
                        <Text>Open</Text>
                    </TouchableOpacity>
                </MenuDrawer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        zIndex: 0
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#38C8EC",
        padding: 10
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    }
})

AppRegistry.registerComponent('DrawerView', () => DrawerView);