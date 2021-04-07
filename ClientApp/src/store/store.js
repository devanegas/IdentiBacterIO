import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk"
import {connectRouter, routerMiddleware} from 'connected-react-router'
import { studentReducer, appReducer} from '../store/reducers/reducer'

const configfureStore = history => {
    const middleWare = [
        thunk,
        routerMiddleware(history)
    ]

    const rootReducer = combineReducers({
        studentState: studentReducer,
        appState: appReducer,
        router: connectRouter(history)
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWare)));
}

export default configfureStore;