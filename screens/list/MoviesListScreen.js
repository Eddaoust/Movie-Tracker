import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useSelector} from "react-redux";

const MoviesListScreen = props => {
    const movies = useSelector(state => state.movies);

    return (
        <View style={styles.container}>
            <FlatList
                data={movies.data}
                renderItem={({item}) => <Text>{item.title}</Text>}
                keyExtractor={(item, index) => (item.id + index).toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default MoviesListScreen;