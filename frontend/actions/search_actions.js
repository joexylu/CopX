import {getSearchResults} from '../util/search_api_util'

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH
});

export const getResults = searchString => dispatch => getSearchResults(searchString)
    .then(results => dispatch(receiveSearchResults(results)))