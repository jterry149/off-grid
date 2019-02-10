// Required Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Variable object initial state 
const initialState = { };

const middleware = [thunk];
// Create our store
const store = createStore(
    rootReducer, initialState ,
    compose(applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  

// Export our store
export default store;
