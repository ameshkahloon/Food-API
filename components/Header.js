import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () =>{
    return (
        <View style={styles.Header}>
            <Text style={styles.HeaderText}>
                <Ionicons name="logo-apple" size={24} color="black" /> DIAN FOOD DELIVERY</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Header:{
        marginTop: 25,
        width: '100%',
        height: 35,
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',       // horizontal
        justifyContent: 'center',   // vertical
        backgroundColor: '#999999'
    },
    HeaderText:{
        color: 'rgb(58, 239, 245)',
        fontSize: 22,
        letterSpacing: 1,
    },
})

export default Header;