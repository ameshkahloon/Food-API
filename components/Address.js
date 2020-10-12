import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";

const Address = () => {
    const display = [
        {name: '73 Rocky Road | ', icon: <Entypo name="address" size={15} color="black" />},
        {name: 'Pending Orders: 5 | ', icon:<MaterialIcons name="room-service" size={15} color="black" />},
        {name: 'Something else here', icon: <AntDesign name="question" size={15} color="black" />},
    ]
    
    return(
        <View style={styles.ViewStyle}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={display} 
                renderItem={({item}) => {
            return (
                <TouchableOpacity>
                    <View style={styles.ViewDealStyle}>
                        <Text>
                            {item.icon} {item.name}
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
        marginTop: 2,
        marginRight: 15,
        marginLeft: 15
    },
    TextStyle:{
        marginLeft: 10
    }
});

export default Address;