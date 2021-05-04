import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import CoursesList from './courseslist'

export default class courses extends React.Component {
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
                        onPress={() => this.props.navigation.navigate("HomeLearn")}
                        style={styles.backicon}>
                        <Image
                            source={require('../assets/images/a1.png')}
                            style={{ width: 20, height: 15 }}
                        />
                    </TouchableOpacity>

                </View>
                <Text style={styles.title}>Cursuri disponibile</Text>

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
                    alwaysOpen={500}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                >
                    {/* LISTA DE CURSRURI */}
                    <View style={{ marginTop: 40 }}>
                        <CoursesList
                            onPress={() => this.props.navigation.navigate("ReactNative")}
                            img={require('../assets/images/xd.png')}
                            title="React Native"
                            bg="#D1F9CF"
                        />
                        <CoursesList
                            img={require('../assets/images/sketch.png')}
                            title="HTML & CSS"
                            bg="#F5FDF5"
                        />
                        <CoursesList
                            img={require('../assets/images/ae.png')}
                            title="Java"
                            bg="#F5FDF5"
                        />
                        <CoursesList
                            img={require('../assets/images/ff.png')}
                            title="Unity Engine"
                            bg="#F5FDF5"
                        />
                        <CoursesList
                            img={require('../assets/images/ps.png')}
                            title="Adobe Photoshop"
                            bg="#F5FDF5"
                        />
                        <CoursesList
                            img={require('../assets/images/ph.png')}
                            title="Python"
                            bg="#F5FDF5"
                        />

                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    backicon:
    {
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "lightgray"
    },
    title:
    {
        color: "#FFF",
        fontSize: 35,
        fontWeight: "bold",
        width: 200,
        alignSelf: "center",
        textAlign: "center",
        marginTop: 34

    }
})