import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard, FlatList, Text} from 'react-native';
import Search from "../../components/Search";
import {requestMovie} from "../../helpers/functions";
import Card from "../../components/Card";

const SearchScreen = props => {
    const [searchResults, setSearchResults] = useState([]);
    const [inputValue, setInputValue] = useState('');
    let list = <Text>Pas d'éléments</Text>

    if (searchResults.length !== 0) {
        list = (
            <FlatList
                data={searchResults}
                renderItem={({item}) => <Card poster={item.poster_path} title={item.title}/>}
                keyExtractor={item => item.id}
            />
        );
    }

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



    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Search
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                />
                <View>
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
    img: {
        width: 120,
        height: 200,
        marginRight: 5
    },
});

export default SearchScreen;