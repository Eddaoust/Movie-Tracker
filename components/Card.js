import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {getImageFromApi} from "../helpers/functions";

const Card = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.grid}>
                    <View>
                        <Image style={styles.img} source={{uri: getImageFromApi(props.poster)}}/>
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 5
    },
    img: {
        width: 120,
        height: 200,
        marginRight: 5
    },
    grid: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },
    description: {
        width: 240,
        fontSize: 12,
        color: 'grey',
    },
    textContent: {
        width: '100%'
    }
});

export default Card;