import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}}/>
            <Text style={styles.name}>
                {result.name} {result.price} 
            </Text>
            <Text style={styles.LocationStyle}>
                <Entypo name="location-pin" size={15} color="black" /> 32 Candy Lane
            </Text>
            <Text style={styles.RatingStyle}> 
                <Entypo name="star" color="orange" size={15} /> {result.rating} ({result.review_count} Reviews)
            </Text>
            <Text style={styles.DeliveryStyle}>
                <AntDesign name="car" size={15} color="black" /> $3.99 delivery fee ($12.99 minimum)
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        padding: 3,
    },
    name:{
        fontSize: 19
    },
    image:{
        width: '100%',
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    LocationStyle:{
        fontSize: 16,
        fontWeight: "200"
    },
    RatingStyle:{
        fontSize: 14,
        fontWeight: "200"
    },
    DeliveryStyle:{
        fontSize: 13
    }
});

export default ResultDetail;