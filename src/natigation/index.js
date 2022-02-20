import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import HomeScreen from "../screens/HomeScreen";
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen} />
            <Stack.Screen
                name="CoinDetailedScreen"
                component={CoinDetailedScreen}
            />
        </Stack.Navigator>
    );
};

export default Navigation;
