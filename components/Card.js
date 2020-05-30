import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, Dimensions} from 'react-native';
import {getImageFromApi} from "../helpers/functions";

const Card = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.addMovie}>
                <View style={styles.grid}>
                    <Image style={styles.img} source={{uri: getImageFromApi(props.poster)}}/>
                </View>
            </TouchableOpacity >
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
        borderRadius: 10
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
    },
});

export default Card;