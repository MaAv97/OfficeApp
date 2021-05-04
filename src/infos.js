import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Icon from '@expo/vector-icons/Entypo'
export default class infos extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.iconsWrapper}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{
                                width: "50%",
                            }}>
                            <Icon
                                name="chevron-left"
                                size={24}
                                color="#044244"
                            />
                        </TouchableOpacity>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                            <Icon
                                name="dots-two-vertical"
                                size={24}
                                color="#044244"
                            />
                        </View>
                    </View>

                    <Text style={{ paddingTop: 30 }}>
                        “For us, March is not only an opportunity to recognize International Women’s Day, but also a celebration for all our colleagues from the Iasi studio. This significant milestone comes immediately after we exceeded 300 colleagues in Iasi alone, becoming the largest Romanian IT employer during the pandemic. Growth, flexibility, transparency, thought leadership and constant learning and adapting to the context are attributes that have helped define us both before and throughout the pandemic,” says Anca Dumitriu, Iasi Studio Manager.
                        “The Iasi Hub grew rapidly during the pandemic, and our plans for this year, as a result of the experience gained during last year in working with full remote teams (work from home), prepared us to integrate a few hundred more new colleagues!” Anca states.
                        The article goes on to discuss the use of our successful virtual pods model, how the studio’s diverse teams remain engaged and how their professionalism and spirit helps drive the continued success of the Iasi studio and beyond.
               </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: "#F5CA48",
        height: "100%",
    },
    header:
    {
        paddingHorizontal: 40,
        backgroundColor: "#FFF",
        height: "80%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    iconsWrapper:
    {
        flexDirection: "row",
        width: "100%",
        marginTop: 40
    }
});