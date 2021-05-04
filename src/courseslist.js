import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    StyleSheet
} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'


export default class courseslist extends React.Component {
    render() {
        const { img, title, bg, onPress } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: "row",
                    backgroundColor: bg,
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginTop: 10
                }}
            >
                <Image
                    source={img}
                    style={{ width: 40, height: 40 }}
                />

                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.time}>10 ore, 19 lectii</Text>
                </View>
                <Text style={styles.percentText}>25% </Text>
                <ProgressCircle
                    percent={30}
                    radius={17}
                    borderWidth={1.5}
                    color="black"
                    shadowColor="#FFF"
                    bgColor="#FFF"
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

    title:
    {
        color: "#345c74",
        fontWeight: "bold",
        fontSize: 13,
        paddingHorizontal: 20,
        width: 170
    },
    time:
    {
        color: "black",
        fontSize: 12,
        paddingHorizontal: 20
    },
    percentText:
    {
        color: "black",
        fontSize: 13,
        paddingLeft: 10,
        paddingRight: 10
    }
});