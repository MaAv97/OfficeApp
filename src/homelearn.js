import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CoursesList from './courseslist'

export default class homelearn extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../assets/images/Home.png')}
                style={{ width: "100%", height: "100%" }}
            >
                <ScrollView>
                    {/* HEADER ICON */}
                    <View style={{
                        width: "100%",
                        alignItems: "flex-end",
                        paddingHorizontal: 20
                    }}>
                        <View style={styles.header}>
                            <Image
                                source={require('../assets/images/hum.png')}
                                style={{ height: 15, width: 20 }}
                            />
                        </View>
                    </View>

                    {/* TITLU & SEARCH */}
                    <Text style={styles.title}>Ce vrei sa înveți azi?</Text>
                    <View style={styles.search}>
                        <TextInput
                            placeholder="cautare..."
                            placeholderTextColor="#345c74"
                            style={styles.searchText}
                        />
                        <Image
                            source={require('../assets/images/sear.png')}
                            style={{ height: 14, width: 14 }}
                        />
                    </View>

                    {/* CATEGORII */}
                    <View style={styles.subtitle}>
                        <View>
                            <Text style={styles.subtitleText}>Să începem!</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Courses')}
                                style={styles.categoriesButton}>
                                <Text style={styles.categoriesText}>Categorii</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../assets/images/undraw.png')}
                            style={{ marginLeft: -60, height: 100, width: 100 }}
                        />
                    </View>

                    {/* LISTA CURSURI */}
                    <Text style={styles.coursesTitle}>Cursuri începute</Text>
                    <CoursesList
                        img={require('../assets/images/xd.png')}
                        title="React Native"
                        bg="#D1F9CF"
                    />
                    <CoursesList
                        img={require('../assets/images/sketch.png')}
                        title="HTML & CSS"
                        bg="white"
                    />
                    <CoursesList
                        img={require('../assets/images/ae.png')}
                        title="Java"
                        bg="white"
                    />
                </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    header:
    {
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "lightgray"
    },
    title:
    {
        paddingHorizontal: 20,
        fontSize: 35,
        paddingTop: 40,
        fontWeight: "bold",
        color: "#FFF"
    },
    search:
    {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 20
    },
    searchText:
    {
        fontWeight: "bold",
        fontSize: 12,
        width: 280,
        paddingHorizontal: 12
    },
    subtitle:
    {
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 30,
        paddingLeft: 30
    },
    subtitleText:
    {
        color: "#345c74",
        fontSize: 20,
        fontWeight: "bold",
        width: 250,
        paddingRight: 100
    },
    categoriesButton:
    {
        flexDirection: "row",
        backgroundColor: "#64B739",
        alignItems: "center",
        marginTop: 20,
        width: 150,
        paddingVertical: 10,
        borderRadius: 14,
        paddingHorizontal: 10
    },
    categoriesText:
    {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 12
    },
    coursesTitle:
    {
        color: "#345c74",
        fontWeight: "bold",
        fontSize: 20,
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10
    }
});