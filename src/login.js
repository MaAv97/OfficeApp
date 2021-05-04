import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';

import Inputs from './components/inputs'


const login = props => {
    return (

        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header1}>
                <View style={styles.header2}>
                    <View style={{
                        width: "50%"
                    }}>
                        <Image source={require('../assets/images/welcome.png')}
                            style={styles.icon} />
                    </View>
                </View>
                <Text style={styles.title}>Bine ai venit!</Text>
                <Text style={styles.title}>E timpul să te conectezi!</Text>
            </View>
            <View style={styles.itemsWrapper}>
                {/* FORMULAR LOGARE */}
                <View style={styles.items}>
                    <Inputs name='adresa de email' icon="user" />
                    <Inputs name='parola' icon="lock" pass={true} />
                    <Button
                        title="Logare"
                        color='#FFD24C'
                        onPress={() => props.navigation.navigate('Home')} />
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={styles.textbody}>Nu ai cont?  </Text>
                        <Text
                            style={[styles.textbody, { color: '#FFD24C' }]}
                            onPress={() => props.navigation.navigate('Signin')}>  Inregistrare</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create(
    {
        container:
        {
            height: "100%",
            backgroundColor: "#F5CA48"
        },
        textbody:
        {
            paddingTop: 50,
            fontSize: 20
        },
        header1:
        {
            height: 300,
            width: "100%",
            paddingHorizontal: 35
        },
        header2:
        {
            flexDirection: "row",
            width: "100%",
            paddingTop: 40,
            alignItems: "center"
        },
        icon:
        {
            width: 100,
            height: 100
        },
        title:
        {
            fontWeight: "bold",
            fontSize: 25,
            color: "#FFF",
            paddingVertical: 25
        },
        itemsWrapper:
        {
            backgroundColor: "#FFF",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 1000,
            paddingHorizontal: 35
        },
        items:
        {
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 80
        }
    }
)

export default login;