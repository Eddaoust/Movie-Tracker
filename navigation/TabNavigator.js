import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieNavigator from "./MovieNavigator";
import SearchScreen from "../screens/search/SearchScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";

const TabNavigator = props => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'movies') {
                        iconName = 'ios-list';
                    } else if (route.name === 'search') {
                        iconName = 'ios-search';
                    } else if (route.name === 'settings') {
                        iconName = 'ios-settings';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
        })}
            tabBarOptions={{
               activeTintColor: '#fb1',
               inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="movies"
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