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
    TouchableOpacity, 
    ActivityIndicator,
    ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from 'react-native-onboarding-swiper';
   
import * as firebase from 'firebase/app'

import Home from './src/home.js'
import FirstScreen from './src/firstScreen'
import Signin from './src/signin.js'
import MyProfile from './src/myprofile.js'
import HomeFood from './src/homefood.js'
import Details from './src/details.js'
import ToDoList from './src/todolist.js'
import Comunitate from './src/comunity.js'
import Help from './src/help.js'
import OnBoardingScreen from './src/onboardingscreen.js'
import Login from './src/login.js'
import Posts from './src/posts.js'
import Infos from './src/infos.js'
import HomeLearn from './src/homelearn'
import Courses from './src/courses'
import VideosPage from './src/videospage'
import ReactNative from './src/reactnative'
import CoursesList from './src/courseslist'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="HomeFood" component={HomeFood} />
        <Stack.Screen name="Comunitate" component={Comunitate} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Infos" component={Infos} />
        <Stack.Screen name="HomeLearn" component={HomeLearn} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="CoursesList" component={CoursesList} />
        <Stack.Screen name="VideosPage" component={VideosPage} />
        <Stack.Screen name="ReactNative" component={ReactNative} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
