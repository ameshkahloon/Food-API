import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term , onTermChange, onTermSubmit}) =>{

    return (
        <View style={styles.BackgroundStyle}>
            <Feather name="search" style={styles.IconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.InputStyle}
                placeholder="search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    BackgroundStyle:{
        marginBottom: 5,
        marginTop: 15,
        backgroundColor: '#effe',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    InputStyle:{
        flex: 1, 
        fontSize: 18
    },
    IconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar