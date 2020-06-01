import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, KeyboardAvoidingView} from 'react-native';
import {useDispatch} from "react-redux";
import Search from "../../components/Search";
import SearchCard from "../../components/SearchCard";
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
                    .then(response => {
                        const result = [];
                        response.results.map(item => {
                            if (item.poster_path !== null) {
                                result.push(item);
                            }
                        });
                        setSearchResults(result);
                    })
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [inputValue]);

    // Add movie to global state
    const addMovieHandler = (movieData) => {
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

    const clearInput = () => {
        setSearchResults([]);
        setInputValue('');
    };

    let list = <Text style={styles.emptylist}>Pas d'éléments</Text>
    if (searchResults.length !== 0) {
        list = (
            <KeyboardAvoidingView behavior="padding">
                <FlatList
                    data={searchResults}
                    renderItem={({item}) => <SearchCard poster={item.poster_path} title={item.title} addMovie={() => addMovieHandler(item)}/>}
                    keyExtractor={(item, index) => (item.id + index).toString()}
                    numColumns={3}
                />
            </KeyboardAvoidingView>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Search
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                    onCancel={() => clearInput()}
                />
            </View>
            <View style={styles.emptyListContainer}>
                {list}
            </View>
        </View>
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
    inputContainer: {
        marginTop: 30
    }
});

export default SearchScreen;