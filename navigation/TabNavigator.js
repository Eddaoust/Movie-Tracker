import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieNavigator from "./MovieNavigator";
import SearchScreen from "../screens/search/SearchScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";

const TabNavigator = props => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Movies"
                component={MovieNavigator} />
            <Tab.Screen
                name="search"
                component={SearchScreen}/>
            <Tab.Screen
                name="settings"
                component={SettingsScreen}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;