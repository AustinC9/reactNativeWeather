import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
// import { AppProvider } from "./utils/AppContext";
const weatherAPI_KEY = "627eb6dbd4fbb7bf1e2154cb0804d4f7";
const baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const zipCode = "40383";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null)
  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      const weatherUrl = `${baseWeatherUrl}zip=${zipCode}&appid=${weatherAPI_KEY}`;

      const response = await fetch(weatherUrl);
      const result = await response.json();
      if (response.ok){
        setCurrentWeather(result)
      }
      else{
        setErrorMessage(result.message)
      }
    } catch (error) {}
  }
  if(currentWeather){
    console.log(currentWeather);
    const { main: { temp }} = currentWeather; 
  
  // openweatherAPI key 01e9afe20f47e07d2cd75f9f6d962bf8
  return (
    <>
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
    <View style={styles.searchBar}>
      <Text>{temp}</Text>
    </View>
    </>
  )} else{
    return(
      <View style={styles.container}>
      <Text>{errorMessage}</Text>
      <StatusBar style="auto"></StatusBar>

      </View>

    ) 
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    border: "none",
  },
  icon: {
    width: 25,
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
