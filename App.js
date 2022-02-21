import React from 'react';
import {StatusBar, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./src/natigation";
import {FavoriteProvider} from "./src/context/FavoriteContext";

export default function App() {
  return (
      <FavoriteProvider>
          <NavigationContainer>
              <View style={{flex:1}}>
                  <Navigation/>
                  <StatusBar style={'light'}/>
              </View>
          </NavigationContainer>
      </FavoriteProvider>

  )
}
