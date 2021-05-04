import React, {Component, useState} from 'react';
import { 
    StyleSheet, 
    Text,
    Platform,
    View, 
    ImageBackground, 
    TextInput,
    Modal, 
    Dimensions,
    Button,
    TouchableOpacity, 
    ScrollView, 
    FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Input} from 'react-native-elements'

   class inputs extends Component{
      state={isFocused:false};

      onFocusChange=()=>{
        this.setState({isFocused:true})
      }
      render(){
      return(
        <View style={[styles.container,{borderColor:this.state.isFocused? 'green' : 'gray'}]}>
          <Input
            placeholder={this.props.name}
            onFocus={this.onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={this.props.pass}
            leftIcon={
              <Icon name={this.props.icon} size={20} color={this.state.isFocused ? 'green' : 'gray'}>

              </Icon>
            }
          >

          
          </Input>
        </View>
      );
      }
  }

const styles=StyleSheet.create({
  container:
  { 
   width:'90%',
   height:50,
   borderRadius:100,
   marginVertical:10,
   borderWidth:1
    
  },
  inputContainer:
  {
    borderBottomWidth:0
  },
  inputText:
  {
    color:'black',
    fontWeight:'bold',
    marginLeft:5
  }
 
})

export default inputs;