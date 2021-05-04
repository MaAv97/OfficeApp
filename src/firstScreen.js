
import React, {Component, useState} from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    Dimensions,
    Button,
} from 'react-native';


const {width,height}=Dimensions.get('window')
    export default function firstScreen({ navigation }) {
      return(
        <View style={{flex:1,backgroundColor:'white', justifyContent:'flex-end'}}>
          <View style={{...StyleSheet.absoluteFill}}>
          

           
          </View>
        
          <View style={{height:height/3, backgroundColor:'white'}}>
           <View style={styles.button}>
           <Button
                title="Bine ai venit! Sa incepem..."
                color='green'
              
                onPress={() => navigation.navigate('Login')}
               />
           </View>
          </View>
        </View>
     
        
        
     
      );
  }

const styles=StyleSheet.create({
  container:
  { 
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center' 
    
  },
  button:
  {
   
    marginHorizontal:50,
    elevation:30
    
  }

});