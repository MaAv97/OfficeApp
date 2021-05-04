import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import tempdata from '../tempdata';


export default class addlistmodal extends React.Component {
    backgroundColors = ["#8A2081", "#FEFF7F", "#F5CA48", "#F08989", "#99B9FF", "#0051FF"];
    state = {
        name: "",
        color: this.backgroundColors[0]
    }

    createTodo = () => {
        const { name, color } = this.state

        const list = { name, color }
        this.props.addList(list);

        this.setState({ name: "" });
        this.props.closeModal();
    }
    renderColors() {

        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => this.setState({ color })}
                />
            )
        })
    }
    render() {
        return (
            // CLOSE ICON
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <TouchableOpacity style={{ position: 'absolute', top: 30, right: 30 }} onPress={this.props.closeModal}>
                    <AntDesign name='close' size={24} color='black' />
                </TouchableOpacity>
                {/* BUTONUL PENTRU ADAUGAREA UNEI NOI SCHITE */}
                <View style={{ alignSelf: 'stretch', marginHorizontal: 30 }}>
                    <Text style={styles.title}>Adaugă o nouă
                    s<Text style={{ fontWeight: "300", color: 'red' }}>c</Text>
                    h
                    <Text style={{ fontWeight: "300", color: 'red' }}>i</Text>
                     ț
                    <Text style={{ fontWeight: "300", color: '#F5CA48' }}>ă</Text>
                    </Text>
                    <TextInput style={styles.input} placeholder="Denumire?" onChangeText={text => this.setState({ name: text })}>
                    </TextInput>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        {this.renderColors()}
                    </View>
                    <TouchableOpacity style={[styles.create, { backgroundColor: this.state.color }]} onPress={this.createTodo}>
                        <Text style={{ color: 'white', fontWeight: "600" }}>Adaugă</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        title:
        {
            fontSize: 30,
            fontWeight: "800",
            color: 'black',
            alignSelf: 'center',
            marginBottom: 30
        },
        input:
        {
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: 'blue',
            borderRadius: 10,
            height: 50,
            marginTop: 10,
            paddingHorizontal: 20,
            fontSize: 20
        },
        create:
        {
            marginTop: 20,
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        colorSelect:
        {
            width: 30,
            height: 30,
            borderRadius: 10
        }
    }
)