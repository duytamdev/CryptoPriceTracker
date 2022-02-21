import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import HomeScreen from "../screens/HomeScreen";
import BottomTabs from "./BottomTabs";
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="BottomTabs">
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabs} />
            <Stack.Screen
                name="CoinDetailedScreen"
                component={CoinDetailedScreen}
            />
        </Stack.Navigator>
    );
};

export default Navigation;
