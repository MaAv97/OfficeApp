import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from '@expo/vector-icons/Entypo'

export default class posts extends React.Component {
    state = {
        liked: false
    }
    onLike = () => {
        this.setState({ liked: !this.state.liked })
    }
    render() {
        const { name, profile, photo, text, content, onPress } = this.props
        return (
            <View>
                <View style={styles.container}>
                    {/* INFORMATII AUTOR POASTARI */}
                    <View style={{ width: "20%" }}>
                        <Image
                            source={profile}
                            style={styles.profileImage} />
                    </View>
                    <View style={{
                        width: "60%"
                    }}>
                        <Text style={styles.profileName}>{name}</Text>
                        <Text style={styles.timePost}>acum 2 ore</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon
                            name="sound-mix"
                            color="#044244"
                            size={20}
                        />
                    </View>
                </View>
                {/* PARTEA DE POSTARI/ANUNTURI */}
                <View style={styles.posts}>
                    <ImageBackground
                        source={photo}
                        style={styles.backgroundPosts}
                        imageStyle={{
                            borderRadius: 30
                        }} >
                        {/* ICON-URI PE POSTARI */}
                        <View style={styles.iconsPosts}>
                            <TouchableOpacity
                                onPress={onPress}
                                style={styles.forwardIcon}>
                                <Icon name="forward"
                                    color="#044244"
                                    size={20} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.onLike}
                                style={styles.heartIcon}>
                                <Icon name={this.state.liked === true ? "heart" : "heart-outlined"}
                                    color={this.state.liked === true ? "red" : "#044244"}
                                    size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                        paddingVertical:10,
                        paddingHorizontal:30
                    }}>
                        <Text style={{
                            fontWeight:"bold",
                            color:"black",
                            fontSize:15
                        }}>{text}</Text>
                       
                       
                    </View>
                    </ImageBackground>
                    
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        paddingTop: 25,
        alignItems: "center"
    },
    profileImage:
    {
        width: 45,
        height: 45,
        borderRadius: 13
    },
    profileName:
    {
        fontWeight: "bold",
        fontSize: 14,
        color: "#044244"
    },
    timePost:
    {
        fontSize: 12,
        color: "#9ca1a2"
    },
    icon:
    {
        width: "20%",
        alignItems: "flex-end"
    },
    posts:
    {
        flexDirection: "row",
        width: "100%",
        paddingTop: 20,
        backgroundColor:"#E5E5E5",
        height:320, 
        borderRadius:30,
        
    },
    backgroundPosts:
    {
        width: "100%",
        height: 220,
    },
    iconsPosts:
    {
        height: "100%",
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: "flex-end"
    },
    forwardIcon:
    {
        marginBottom: 20,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "#e8e8e8"
    },
    heartIcon:
    {
        marginBottom: 20,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "#e8e8e8",
        marginLeft: 10,
        marginRight: 20
    }
});