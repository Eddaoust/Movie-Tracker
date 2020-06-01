import React from 'react';
import {useSelector} from "react-redux";
import {StyleSheet, View, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {getImageFromApi} from "../helpers/functions";

const SearchCard = props => {
    const movies = useSelector(state => state.movies.data);
    const movie = movies.find(item => item.title === props.title);

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Image style={styles.img} source={{uri: getImageFromApi(props.poster)}}/>
                <TouchableHighlight
                    underlayColor="grey"
                    style={movie !== undefined ? styles.addBtnDisabled : styles.addBtn}
                    disabled={movie !== undefined}
                    onPress={props.addMovie}>
                    <Ionicons name="md-add" size={20} color="#2E3131" />
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        maxWidth: Dimensions.get('window').width / 3, // Width / 3 - (marginLeft and marginRight for the components)
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: (Dimensions.get('window').width) * 0.33,
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
    },
    addBtnDisabled: {
        position: 'absolute',
        bottom: 10,
        left: '65%',
        width: '30%',
        backgroundColor: '#fb1',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    }
});

export default SearchCard;