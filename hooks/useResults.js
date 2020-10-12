import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI = async searchTerm => {
        try{
            const response = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err){
            console.log(err)
        }// end try-catch
    };

    useEffect(() => {
        searchAPI('fast food')
    }, [])

    return [searchAPI, results, errorMessage]
};