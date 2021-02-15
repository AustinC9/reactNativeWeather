import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchInput}>
          {/* Icon */}
          <FontAwesome
            name="search-location"
            color="#000"
            style={styles.icon}
          ></FontAwesome>
          {/* Textfield */}
          <TextInput
            style={styles.input}
            placeholder="Search your city name"
          ></TextInput>
          {/* Icon */}
          <FontAwesome
            name="microphone"
            color="#000"
            style={styles.icon}
          ></FontAwesome>
        </View>
        <View style={styles.Tabs}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "#1976d2",
    height: 100,
    width: "100%",
  },
  searchInput: {
    backgroundColor: "#fff",
    height: 30,
    width: "90%",
    margin: 20,
    padding: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  Tabs: {},
  input: {
    flexGrow: 1,
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    border:'none',
  },
  icon:{
    width:25,
    height:25,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
});
