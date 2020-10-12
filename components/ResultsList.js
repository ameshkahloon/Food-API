import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultsDetail';
import { withNavigation } from  'react-navigation';


const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }// end if

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {results}
                keyExtractor={(results) => results.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                        
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        color:'#64d4cb',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container:{
        backgroundColor:"#fff",
        marginBottom: 10,
        marginRight: 15
    }
});

export default withNavigation(ResultsList);