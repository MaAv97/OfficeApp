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
    SafeAreaView,
    Image,
    ScrollView } from 'react-native';

    import Feather from 'react-native-vector-icons/Feather';
    import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
    import colors from '../assets/colors/colors';

Feather.loadFont();
MaterialCommunityIcons.loadFont();


    export default function myprofile ({ navigation }){
        return (
          <View style={styles.container}>
          <ScrollView  contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <SafeAreaView>
              <View style={styles.headerWrapper}>
                  <Image
                   source={require('../assets/images/profile.png')}
                   style={styles.profileImage}>    
                   </Image>
                   <Feather name="menu" size={24} color={colors.textDark} />
              </View>
          </SafeAreaView>
      
          {/* TITLE */}
               <View style={styles.titlesWrapper}>
                  <Text style={styles.titlesTitle}>Profilul meu</Text>
                  <Text style={styles.titlesSubtitle}>Stabileste prioritatile!</Text>
               </View>
               <View style={styles.popularWrapper}>

               <TouchableOpacity
              
              onPress={() =>
                navigation.navigate('ToDoList')
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>Schite</Text>
                    </View>
                    
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Text>Organizeaza programul</Text>
                    </View>
                    
                  </View>
                </View>

                <View>
                  <Image source={require('../assets/images/todolist.png')} style={styles.popularCardImage} />
                </View>
              </View>
              </TouchableOpacity>
              <TouchableOpacity
            
              onPress={() =>
                navigation.navigate('HomeLearn')
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>Cursuri</Text>
                    </View>
                    
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Text>Ce vrei sa inveti astazi?</Text>
                    </View>
                   
                  </View>
                </View>

                <View>
                  <Image source={require('../assets/images/calendar.png')} style={styles.popularCardImage} />
                </View>
              </View>
              </TouchableOpacity>
              </View>
          </ScrollView>
        </View>
            
          );
    }
    const styles = StyleSheet.create({
      container: {
          flex: 1,
        },
        headerWrapper: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 40,
          alignItems: 'center',
        },
        profileImage: {
          width: 40,
          height: 40,
          borderRadius: 40,
        },
        titlesWrapper: {
          marginTop: 30,
          paddingHorizontal: 20,
        },
        titlesSubtitle: {
          fontSize: 16,
          color: colors.textDark,
        },
        titlesTitle: {
          fontWeight: 'bold',
          fontSize: 32,
          color: colors.textDark,
          marginTop: 5,
        },
        searchWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 30,
        },
        search: {
          flex: 1,
          marginLeft: 10,
          borderBottomColor: colors.textLight,
          borderBottomWidth: 2,
        },
        searchText: {
          fontSize: 14,
          marginBottom: 5,
          color: colors.textLight,
        },
        categoriesWrapper: {
          marginTop: 30,
        },
        categoriesTitle: {
          fontWeight: 'bold',
          fontSize: 16,
          paddingHorizontal: 20,
        },
        categoriesListWrapper: {
          paddingTop: 15,
          paddingBottom: 20,
        },
        categoryItemWrapper: {
          backgroundColor: '#F5CA48',
          marginRight: 20,
          borderRadius: 20,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 2,
        },
        categoryItemImage: {
          width: 60,
          height: 60,
          marginTop: 25,
          alignSelf: 'center',
          marginHorizontal: 20,
        },
        categoryItemTitle: {
          textAlign: 'center',
          fontSize: 14,
          marginTop: 10,
        },
        categorySelectWrapper: {
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 20,
          width: 26,
          height: 26,
          borderRadius: 26,
          marginBottom: 20,
        },
        categorySelectIcon: {
          alignSelf: 'center',
        },
        popularWrapper: {
          paddingHorizontal: 20,
        },
        popularTitle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
        popularCardWrapper: {
          backgroundColor: colors.white,
          borderRadius: 25,
          paddingTop: 20,
          paddingLeft: 20,
          flexDirection: 'row',
          overflow: 'hidden',
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 2,
        },
        popularTopWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        popularTopText: {
          marginLeft: 10,
          fontWeight: 'bold',
          fontSize: 24,
        },
        popularTitlesWrapper: {
          marginTop: 20,
        },
       
       
        popularCardBottom: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: -20,
        },
        addPizzaButton: {
          backgroundColor: colors.primary,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 25,
        },
       
        
        popularCardImage: {
          width: 210,
          height: 125,
          resizeMode: 'contain',
        },
  }
  );