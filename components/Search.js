import React from 'react';
import {StyleSheet, TextInput, SafeAreaView, View, TouchableWithoutFeedback} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Search = props => {
    // Set the cancel btn when input is fill
    let icon = <Ionicons name="ios-search" size={20} color="blue" />;
    if (props.value.length !== 0) {
        icon = (
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <Ionicons name="md-close" size={20} color="blue" />
            </TouchableWithoutFeedback>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    {...props}
                    style={styles.input}
                    placeholder="Chercher un film..."
                    returnKeyType="search"
                    autoCorrect={false}
                />
                {icon}
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