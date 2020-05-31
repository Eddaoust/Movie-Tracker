import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard, FlatList, Text, Dimensions, ScrollView} from 'react-native';
import {useDispatch} from "react-redux";
import Search from "../../components/Search";
import Card from "../../components/Card";
import {requestMovie} from "../../helpers/functions";
import {addMovieSuccess} from "../../store/actions/movies";

const SearchScreen = props => {
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputValue.length !== 0) {
                fetch(requestMovie(inputValue))
                    .then(response => response.json())
                    .then(response => setSearchResults(response.results))
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [inputValue]);

    // Add movie to global state
    const addMovie = (movieData) => {
        const movie = {
            id: movieData.id,
            title: movieData.title,
            description: movieData.overview,
            release: movieData.release_date,
            poster: movieData.poster_path,
            isWatched: false,
            rating: 0,
            public_rating: movieData.vote_average
        };
        dispatch(addMovieSuccess(movie));
    };

    let list = <Text style={styles.emptylist}>Pas d'éléments</Text>
    if (searchResults.length !== 0) {
        list = (
            <FlatList
                data={searchResults}
                renderItem={({item}) => <Card poster={item.poster_path} title={item.title} addMovie={() => {addMovie(item);}}/>}
                keyExtractor={(item, index) => (item.id + index).toString()}
                numColumns={3}
            />
        );
    }



    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Search
                        value={inputValue}
                        onChangeText={text => setInputValue(text)}
                    />
                </View>
                <View style={searchResults.length === 0 ? styles.emptyListContainer : styles.listContainer}>
                    {list}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3E7E9'
    },
    emptylist: {
        fontSize: 22,
        color: '#fb1',
        textAlign: 'center',
        fontFamily: 'comfortaa-bold'
    },
    emptyListContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        width: '100%'
    },
    inputContainer: {
        marginTop: 30
    }
});

export default SearchScreen;