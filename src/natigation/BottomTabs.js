import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import {Entypo, FontAwesome} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "grey",
            tabBarStyle: {
                backgroundColor: "#181818",
            },
        }}>
            <Tab.Screen
                options={{
                    title: 'Market',
                    tabBarIcon: ({focused, color}) => (
                        <Entypo name="home" size={focused ? 30 : 25} color={color}/>
                    ),
                }}
                name="HomeScreen"
                component={HomeScreen}/>
            <Tab.Screen
                options={{
                    title: 'Favorite',
                    tabBarIcon: ({focused, color}) => (
                        <FontAwesome name="star" size={focused ? 30 : 25} color={color}/>
                    ),

                }}
                name="FavoriteScreen"
                component={FavoriteScreen}/>
        </Tab.Navigator>
    );
};

export default BottomTabs;
