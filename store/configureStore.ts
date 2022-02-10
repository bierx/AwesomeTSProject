import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import countReducer from '../reducers/counterReducer';
import userReducer from '../reducers/userReducer';
import {rootSaga} from '../sagas/rootSaga';

const rootReducer = combineReducers({steps: countReducer, user: userReducer});
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return Store;
};

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore;
