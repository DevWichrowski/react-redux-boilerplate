import {combineReducers} from 'redux';
import {dummyReducer} from "./dummy.reducer";

export const rootReducer = combineReducers({
    dummy: dummyReducer,
});