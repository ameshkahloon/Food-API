import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";

const NewDeals = () => {
    const deals = [
        {name: 'Special Deal 1!'},
        {name: 'Special Deal 2!'},
        {name: 'Special Deal 3!'},
        {name: 'Special Deal 4!'},
        {name: 'Special Deal 5!'},
        {name: 'Special Deal 6!'},
        {name: 'Special Deal 7!'},
        {name: 'Special Deal 8!'},
        {name: 'Special Deal 9!'},
    ]

    return(
        <View style={styles.ViewStyle}>
            <Text style={styles.Header}>
                TOP DEALS!
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={deals} 
                renderItem={({item}) => {
            return (
                <TouchableOpacity>
                    <View style={styles.ViewDealStyle}>
                        <Text>
                        This is {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor:"#fff",
        paddingRight:15,
        height: 150,
    },
    Header:{
        color: '#64d4cb',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    ViewDealStyle:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        height: 100,
        marginLeft: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
});

export default NewDeals;