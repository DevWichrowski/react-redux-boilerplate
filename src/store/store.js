import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./reducers/root.reducer";
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga);