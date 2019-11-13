import produce from 'immer';
import * as DummyActions from "../actions/dummy.actions";

const initialState = {
    dummyText: 'Hello React redux'
};

export const dummyReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case DummyActions.EDIT_DUMMY_TEXT: {
                draft.dummyText = action.payload;
                break;
            }
            default:
                return state;
        }
    });