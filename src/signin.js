import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
} from 'react-native';
import Inputs from './components/inputs'

const signin = props => {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header1}>
                <View style={styles.header2}>
                    <View style={{ width: "50%" }}>
                        <Image source={require('../assets/images/welcome.png')} style={styles.icon} />
                    </View>
                </View>
                <Text style={styles.title}>Bine ai venit!</Text>
                <Text style={styles.title}>E timpul să te conectezi!</Text>
            </View>
            <View style={styles.itemsWrapper}>
                {/* FORMULAR INREGISTRARE */}
                <View style={styles.items}>
                    <Inputs name='nume' icon="user" />
                    <Inputs name='adresa de email' icon="envelope" />
                    <Inputs name='numar de telefon' icon="phone" />
                    <Inputs name='parola' icon="lock" pass={true} />

                    <Button title='Inregistrare' color='#FFD24C' onPress={() => props.navigation.navigate('Login')} />
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={styles.textbody}>Ai deja cont?</Text>
                        <Text
                            style={[styles.textbody, { color: '#FFD24C' }]}
                            onPress={() => props.navigation.navigate('Login')}
                        > Logare</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            height: "100%",
            backgroundColor: "#F5CA48"
        },
        textbody:
        {
            paddingTop: 20,
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
            paddingTop: 20
        }
    }
)

export default signin;