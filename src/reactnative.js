import React from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import Chapters from './chapters'

export default class reactnative extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../assets/images/Home.png')}
                style={{ width: "100%", height: "100%" }}
            >
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    paddingHorizontal: 20
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Courses")}
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            borderRadius: 10,
                            marginTop: 30,

                        }}
                    >
                        <Image
                            source={require('../assets/images/a1.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </TouchableOpacity>

                </View>
                <Image
                    source={require('../assets/images/xd.png')}
                    style={{
                        height: 35,
                        width: 35,
                        alignSelf: "center",
                        marginTop: 20
                    }}
                />
                <Text style={styles.title}>React Native</Text>

                <Modalize
                    handleStyle={{
                        marginTop: 30,
                        backgroundColor: "#e9e9e9",
                        width: 80
                    }}
                    modalStyle={{
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60
                    }}
                    alwaysOpen={510}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                >
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 30,
                        marginTop: 40
                    }}>
                        <Image
                            source={require('../assets/images/2.jpg')}
                            style={styles.profileImage}
                        />
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={styles.author}>Diana Mazareanu</Text>
                            <Text style={styles.authorDescription}>Autor, RN Developer</Text>
                        </View>

                    </View>
                    <View>

                        <Chapters
                            num={1}
                            color="#fde6e6"
                            percent={25}
                            duration="2 ore, 20 minute"
                            title="Introducere"
                            onPress={() => this.props.navigation.navigate('VideosPage')}
                        />
                        <Chapters
                            num={2}
                            color="#f9e1fc"
                            percent={50}
                            duration="1 ora, 35 minute"
                            title="Fundamente React"
                        />
                        <Chapters
                            num={3}
                            color="#e8f1fd"
                            percent={0}
                            duration="2 ore, 20 minute"
                            title="React Navigation"
                        />
                        <Chapters
                            num={4}
                            color="#e5ffef"
                            percent={0}
                            duration="2 ore, 20 minute"
                            title="Exercitii"
                        />
                        <Chapters
                            num={5}
                            color="#fbfaf6"
                            percent={0}
                            duration="45 minutes"
                            title="Concluzii"
                        />
                    </View>


                </Modalize>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    title:
    {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 35,
        width: 200,
        alignSelf: "center",
        textAlign: "center"
    },
    profileImage:
    {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: "#f58084",
        borderRadius: 50
    },
    author:
    {
        color: "#345c74",
        fontWeight: "bold",
        fontSize: 18
    },
    authorDescription:
    {
        color: "#f58084",
        fontSize: 12
    }
});