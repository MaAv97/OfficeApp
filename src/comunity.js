import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    Platform,
    View,
    ImageBackground,
    TextInput,
    Dimensions,
    Image,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Posts from './posts'
import Infos from './infos'
import Icon from '@expo/vector-icons/Entypo'
export default class comunity extends React.Component {

    state = {
        popularSelected: true
    }
    onTabPressed = () => {
        this.setState({ popularSelected: !this.state.popularSelected })
    }
    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                {/* HEADER  */}
                <View style={styles.headerWrapper}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        paddingTop: 40,
                        alignItems: "center"
                    }}>

                    </View>
                    <Text style={styles.headerText}>Fii la curent cu ce se întamplă în firmă!</Text>
                    {/* SEARCH TAB */}
                    <View style={styles.searchWrapper}>
                        <TextInput
                            placeholder="cautare..."
                            style={styles.searchTab}
                        />
                        <Icon name="magnifying-glass"
                            size={15}
                            color="#9ca1a2" />
                    </View>
                </View>
                {/* ANUNTURILE/POSTARILE */}
                <View style={styles.postsWrapper}>
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 20
                    }}>
                        {/* MINI-MENIU PENTRU ANUNTURI */}
                        <TouchableOpacity
                            onPress={this.onTabPressed}
                            style={{
                                borderBottomColor: this.state.popularSelected ? "#044244" : "#FFF",
                                borderBottomWidth: 4,
                                paddingVertical: 6
                            }}>
                            <Text style={{
                                fontWeight: "bold",
                                color: this.state.popularSelected ? "#044244" : "#9ca1a2"
                            }}>CELE MAI POPULARE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onTabPressed}
                            style={{
                                borderBottomColor: this.state.popularSelected ? "#FFF" : "#044244",
                                borderBottomWidth: 4,
                                paddingVertical: 6,
                                marginLeft: 30
                            }}>
                            <Text style={{
                                fontWeight: "bold",
                                color: this.state.popularSelected ? "#9ca1a2" : "#044244"
                            }}>RECENTE</Text>
                        </TouchableOpacity>
                    </View>
                    {/* POSTARI/ANUNTURI */}
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Posts
                            onPress={() => this.props.navigation.navigate('Infos')}
                            name="Ion Popescu"
                            profile={require('../assets/images/p1.jpg')}
                            photo={require('../assets/images/5.jpg')}
                            text={<Text>Cognizant Softvision Featured In Pin Magazine</Text>}
                           
                        />
                        
                        <View style={styles.forwardPost}></View>
                    </View>

                    <View style={{
                        flexDirection: "row"
                    }}>
                        <View style={styles.forwardPost2}></View>
                        <Posts
                            onPress={() => this.props.navigation.navigate('Infos')}
                            name="Laura Matei"
                            profile={require('../assets/images/p2.jpg')}
                            photo={require('../assets/images/6.jpg')}
                            text={<Text>Cognizant Softvision at Workplace of the Future</Text>}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Posts
                            onPress={() => this.props.navigation.navigate('Infos')}
                            name="Mihai Popa"
                            profile={require('../assets/images/pp3.jpg')}
                            photo={require('../assets/images/3.jpg')}
                            text={<Text>Cognizant Softvision at ‘Angajatori de Top Tehnologie’ – Spring Edition</Text>}
                        />
                        <View style={styles.forwardPost}></View>
                    </View>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <View style={styles.forwardPost2}></View>
                        <Posts
                            onPress={() => this.props.navigation.navigate('Infos')}
                            name="Ana Bruma"
                            profile={require('../assets/images/p4.jpg')}
                            photo={require('../assets/images/9.jpg')}
                            text={<Text>Cognizant Softvision Women’s Guild In The Spotlight</Text>}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <View style={styles.forwardPost2}></View>
                        <Posts
                            onPress={() => this.props.navigation.navigate('Infos')}
                            name="Anca Balan"
                            profile={require('../assets/images/p5.jpg')}
                            photo={require('../assets/images/11.jpg')}
                            text={<Text>Software Engineer Felix Negoita at Tech Conference Europe</Text>}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor: "#F5CA48"
    },
    headerWrapper:
    {
        height: 250,
        width: "100%",
        paddingHorizontal: 35
    },
    searchWrapper:
    {
        flexDirection: "row",
        borderColor: "#9ca1a2",
        borderRadius: 20,
        borderWidth: 0.2,
        paddingVertical: 5,
        alignItems: "center"
    },
    headerText:
    {
        fontWeight: "bold",
        fontSize: 25,
        color: "#FFF",
        paddingVertical: 25
    },
    searchTab:
    {
        paddingHorizontal: 20,
        fontSize: 11,
        width: "90%",
        color: "#9ca1a2"
    },
    postsWrapper:
    {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 35
    },
    forwardPost:
    {
        height: 160,
        backgroundColor: "#3c636c",
        width: 20,
        marginLeft: 20,
        marginTop: 120,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    forwardPost2:
    {
        height: 160,
        backgroundColor: "#3c636c",
        width: 20,
        marginLeft: -40,
        marginRight: 20,
        marginTop: 120,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    }
});