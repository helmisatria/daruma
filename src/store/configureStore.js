import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import { reducer as RoomClass } from '../reducers/RoomClassRedux';
import { reducer as Patient } from '../reducers/PatientRedux';
import { reducer as Booking } from '../reducers/BookingRedux';
import { reducer as Hospital } from '../reducers/HospitalRedux';

import rootSagas from '../sagas';

// Combine Reducers
const reducers = {
 	RoomClass,
 	Patient,
 	Booking,
 	Hospital,
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    combineReducers(reducers),
    //composeEnhancers(applyMiddleware(thunk)),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

// use this when not using compose or redux thunk!
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
