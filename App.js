import React from 'react';
import CoinDetailedScreen from "./src/screens/CoinDetailedScreen";
import {StatusBar, View} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
export default function App() {
  return (
      <View style={{flex:1}}>
        <HomeScreen/>
        <StatusBar style={'light'}/>
      </View>
  )
}
