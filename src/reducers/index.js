import {combineReducers} from 'redux'
import worldChampionsReducer from './worldChampionsReducer'

export default combineReducers({
    wcreducer: worldChampionsReducer
})