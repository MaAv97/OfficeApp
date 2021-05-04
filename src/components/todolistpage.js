import { vi } from 'date-fns/locale';
import React, {Component, useState} from 'react';
import { 
    StyleSheet, 
    Text,
    Platform,
    View, 
    ImageBackground, 
    TextInput, 
    Dimensions,
    Button,
    Modal,
    TouchableOpacity, 
    ScrollView } from 'react-native';
import TODOModal from './todomodal'


    export default class TodoListpage extends React.Component{
       

        state={
            showListVisible:false
        }

        toggleListModal(){
            this.setState({showListVisible: !this.state.showListVisible})
        }
        render(){
            const list=this.props.list
            const completedCount=list.todos.filter(todo => todo.completed).length;
            const remainingCount=list.todos.length -completedCount;
    
        return (
            // VIEW OF THE LISTS
            <View>


            <Modal 
            animationType="slide" 
            visible={this.state.showListVisible} 
            onRequestClose={()=>this.toggleListModal()}>
               <TODOModal   
                 list={list} 
                 closeModal={()=>this.toggleListModal()}
                 updateList={this.props.updateList}
                 />
                 </Modal>   

            <TouchableOpacity 
            style={[styles.listContainer, 
            {backgroundColor:list.color}]}
            onPress={()=>this.toggleListModal()}
            >
          <Text style={styles.listTitle} numberOfLines={1}>{list.name} </Text>
          
          
          <View style={{alignItems:'center'}}>
                <Text style={styles.count}>{remainingCount}</Text>
                <Text style={styles.subtitle}>Rămase</Text>
          </View>
          <View style={{alignItems:'center'}}>
                <Text style={styles.count}>{completedCount}</Text>
                <Text style={styles.subtitle}>Terminate</Text>
          </View>
        </TouchableOpacity>
        </View>
          );
    };
};


const styles=StyleSheet.create({
    listContainer:
    {
        paddingVertical:30,
        marginRight:30,
        borderRadius:30,
        alignItems:'center',
        width:200
    },
    listTitle:
    {
        fontSize:30,
        fontWeight:"700",
        color:'white',
        marginBottom:10,
    },
    count:
    {
        fontSize:50,
        fontWeight:"200",
        color:'white'
    },
    subtitle:
    {
        fontSize:20,
        fontWeight:"700",
        color:'white'
    }
}

)