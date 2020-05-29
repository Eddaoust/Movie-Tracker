import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoviesListScreen from "../screens/list/MoviesListScreen";

const MovieNavigator = props => {
    const MovieStack = createStackNavigator();

    return (
        <MovieStack.Navigator>
            <MovieStack.Screen
                name="MoviesList"
                component={MoviesListScreen}/>
        </MovieStack.Navigator>
    );
};

export default MovieNavigator;