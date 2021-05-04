import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

export default class chapters extends React.Component {
    render() {
        const { title, num, duration, percent, color, onPress } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.container}
            >
                <View style={styles.indexWrapper}>
                    <Text style={styles.index}>{num}</Text>
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.duration}>{duration}</Text>
                </View>
                <Text style={styles.percentage}> {percent}%</Text>

                <ProgressCircle
                    percent={percent}
                    radius={17}
                    borderWidth={1.5}
                    color="#f58084"
                    shadowColor="#FFF"
                    bgColor="#fff2f2"
                >
                    <Image
                        source={require('../assets/images/pl.png')}
                    />
                </ProgressCircle>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    indexWrapper:
    {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6
    },
    index:
    {
        fontSize: 10,
        fontWeight: "bold"
    },
    title:
    {
        color: "#345c74",
        fontWeight: "bold",
        fontSize: 13,
        paddingLeft: 20,
        width: 180
    },
    duration:
    {
        color: "#f58084",
        fontSize: 12,
        paddingLeft: 20
    },
    percentage:
    {
        color: "#345c74",
        fontSize: 13,
        width: 50
    }
})