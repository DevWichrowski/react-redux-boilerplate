import {createSelector} from 'reselect';

export const selectDummyReducer = state => state.dummy;

export const getDummyText = createSelector(
    selectDummyReducer,
    state => state.dummyText
);