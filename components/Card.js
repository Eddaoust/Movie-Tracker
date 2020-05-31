import React from 'react';
import {StyleSheet, View, TouchableHighlight, Image, Dimensions, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {getImageFromApi} from "../helpers/functions";

const Card = props => {

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Image style={styles.img} source={{uri: getImageFromApi(props.poster)}}/>
                <TouchableHighlight underlayColor="grey" style={styles.addBtn} onPress={props.addMovie}>
                    <Ionicons name="md-add" size={20} color="#2E3131" />
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    img: {
        width: (Dimensions.get('window').width) * 0.28,
        height: 190,
    },
    grid: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    addBtn: {
        position: 'absolute',
        bottom: 10,
        left: '65%',
        width: '30%',
        backgroundColor: 'rgba(232, 232, 232, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    }
});

export default Card;