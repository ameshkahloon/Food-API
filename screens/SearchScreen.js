import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import Address from '../components/Address';
import NewDeals from '../components/NewDeals';
import TypesofFood from '../components/TypesofFood';
import Footer from '../components/Footer';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results =>{
            return results.price === price;
        });
    };

    return (
        <>
                <View style={styles.BottomView}>
                    <Address/>
                </View>
                <View style={styles.SearchView}>
                    <SearchBar
                        term={term}
                        onTermChange={setTerm}
                        onTermSubmit={() => searchAPI(term)}
                    />
                </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.FoodTypes}>
                            <TypesofFood/>
                        </View>
                        <View style={styles.NewDeals}>
                            <NewDeals/>
                        </View>
                            <ScrollView>
                                <View style={styles.ResultsListStyle}>
                                    <ResultsList style={styles.ResultsListStyle}
                                        results={filterResultsByPrice('$')} 
                                        title="Recommended for you"
                                    />
                                </View>
                                <View style={styles.ResultsListStyle}>
                                    <ResultsList 
                                        results={filterResultsByPrice('$')} 
                                        title="Closet to you"
                                    />
                                </View>
                                <View style={styles.ResultsListStyle}>
                                    <ResultsList 
                                        results={filterResultsByPrice('$')} 
                                        title="Cost Effective"
                                    />
                                </View>
                                <View style={styles.ResultsListStyle}>
                                    <ResultsList 
                                        results={filterResultsByPrice('$$')} 
                                        title="Bit Pricer"
                                    />
                                </View>
                            </ScrollView>
                    </ScrollView>
                <View>
                    <Footer/>
                </View>
        </>
    );
}


const styles = StyleSheet.create({
    BottomView:{
        backgroundColor:'#fff'
    },
    SearchView:{
        backgroundColor:'#fff',
    },
    MainViewStyle:{
        backgroundColor: '#999999',
    },
    FoodTypes:{
        backgroundColor:'#fff',
        height: 100
    },
    NewDeals:{
        backgroundColor:'#fff',
        height: 150
    },
    ResultsListStyle:{
        backgroundColor:'#fff'
    },
})

export default SearchScreen