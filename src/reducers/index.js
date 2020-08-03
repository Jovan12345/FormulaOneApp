import { combineReducers } from 'redux';
import worldChampionsReducer from './worldChampionsReducer';
import yearlyWinnersReducer from './yearlyWinnersReducer';
import worldChampionReducer from './worldChampionReducer';
import trackWinnersReducer from './trackWinnersReducer';

export default combineReducers({
    wcreducer: worldChampionsReducer,
    yearlyreducer: yearlyWinnersReducer,
    champreducer: worldChampionReducer,
    trackreducer: trackWinnersReducer
})