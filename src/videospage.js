import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    Text
} from 'react-native'
import { Video } from 'expo-av'
import Chapters from './chapters'


const { width, height } = Dimensions.get("window");

export default class videospage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="gray" />
                <Video
                    source={require('../assets/images/video.mp4')}
                    rate={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping={false}
                    useNativeControls
                    style={styles.video}
                />
                <Chapters
                    color="white"
                    percent={25}
                    duration="2 ore, 20 minute"
                    title="Introducere"
                    num={1}
                />

                <Text style={styles.text}>
                    React Native is a fantastic new framework produced by Facebook that allows developers to create truly native applications that run on both iOS and Android, all while writing code in JavaScript. It breaks down several of the complexities of mobile apps to ease development, and offers many pre-built components to accelerate development.
                    To quickly get going with React Native, this course walks you through the creation of three real-world mobile applications, each designed to introduce essential core concepts as well as show you how to make beautiful and functional applications using best practices. At the end of the course, you will have a mastery of creating and manipulating React Native apps, will know how to structure navigation and data flow, and be exposed to many of the built-in React Native components. You will also learn about pushing your applications to production and the app stores.
               </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    video: {
        width: width,
        height: height / 3
    },
    container: {
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    text: {
        textAlign: "justify",
        color: "#345c74",
        paddingLeft: 42,
        paddingRight: 35
    }
})