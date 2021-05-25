import LastFive from './LastFive';
import loggedReducer  from './isLogged';
import {combineReducers} from 'redux';




const allReducers = combineReducers({
    LastFive: LastFive,
    isLogged: loggedReducer

});


export default allReducers;

