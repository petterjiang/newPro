import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers';
//引入中间件thunk
import thunk from 'redux-thunk';
//创建stroe
export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer,
        initialState,
        // 触发 redux-devtools
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    return store;
}