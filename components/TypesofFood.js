import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const TypesofFood = () => {
    const food = [
        {name: 'Fast Food', icon:<MaterialCommunityIcons name="food" size={24} color="black" />},
        {name: 'Mexican', icon:<MaterialCommunityIcons name="taco" size={24} color="black" />},
        {name: 'Chinese', icon:<Entypo name="cake" size={24} color="black" />},
        {name: 'Indian', icon:<Entypo name="cake" size={24} color="black" />},
        {name: 'Korean', icon:<Entypo name="cake" size={24} color="black" />},
        {name: "Japanese", icon:<Entypo name="cake" size={24} color="black" />},
        {name: "Middle-Eastern", icon:<Entypo name="cake" size={24} color="black" />}
    ]

    return(
        <View style={styles.ViewStyle}>
            <Text style={styles.Header}>
                TOP PICKS!
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={food} 
                renderItem={({item}) => {
            return (
                <TouchableOpacity>
                    <View style={styles.FoodStyle}>
                        <Text>
                            {item.name} {item.icon}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    Header:{
        color: '#64d4cb',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    ViewStyle:{
        marginTop: 5,
        backgroundColor:"#fff",
        paddingRight:15,
    },
    FoodStyle:{
        height: 55,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
});

export default TypesofFood;