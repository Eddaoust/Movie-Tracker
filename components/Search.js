import React from 'react';
import {StyleSheet, TextInput, SafeAreaView, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Search = props => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    {...props}
                    style={styles.input}
                    placeholder="Chercher un film..."
                    returnKeyType="search"
                />
                <Ionicons name="ios-search" size={20} color="blue" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10
    },
    inputGroup: {
        width: '80%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 5
    },
    input: {
        flex: 1
    }
});

export default Search;