import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const Footer = () => {
    return(
        <View style={styles.MainFooter}>
            <TouchableOpacity>
                <View style={styles.InnerFooter}>
                    <Text style={styles.TextStyle}>Calendar</Text>
                    <AntDesign name="calendar" size={24} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.InnerFooter}>
                    <Text style={styles.TextStyle}>Past Orders</Text>
                    <MaterialCommunityIcons name="food" size={24} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.InnerFooter}>
                    <Text style={styles.TextStyle}>Account</Text>
                    <MaterialIcons name="person" size={24} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.InnerFooter}>
                    <Text style={styles.TextStyle}>Settings</Text>
                    <Feather name="settings" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    MainFooter:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor: '#fff',
        borderTopWidth: 1,
    },
    InnerFooter:{
        alignItems:"center",
        justifyContent: "center",
        marginBottom: 2
    },
    TextStyle:{
        color: 'rgb(84,156,168)'
    }
});

export default Footer;