import React from 'react';
import {StatusBar, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./src/natigation";

export default function App() {
  return (
      <NavigationContainer>
          <View style={{flex:1}}>
              <Navigation/>
              <StatusBar style={'light'}/>
          </View>
      </NavigationContainer>
  )
}
