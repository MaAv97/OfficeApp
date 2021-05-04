import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default function help() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: "100%",
        backgroundColor: "#F5CA48"
      }}
    >
      {/* HEADER */}
      <View style={styles.header1}>
     
        <View style={styles.header2}>
          <View style={{width: "50%"}}>
            <Image source={require('../assets/images/Untitled.png')}
              style={styles.icon} />
          </View>
        </View>
        <Text style={styles.title}>Contactează-ne dacă întampini probleme!</Text>
      </View>
      {/* DATE CONTACT */}
      <View style={styles.itemsWrapper}>
        <View style={styles.items}>
          <Text style={{ fontWeight: 'bold' }}>Contact: Avarvarei Madalina</Text>
          <Text style={{ marginVertical: 20, fontWeight: 'bold', }}>Nr de telefon: 0741019149</Text>
          <Text style={{ fontWeight: 'bold' }}>Adresa de email: avarvarei.mad@gmail.ro</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header1:
  {
    height: 250,
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
    width: 50,
    height: 50
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
    paddingTop: 150
  }

});