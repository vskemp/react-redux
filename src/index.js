// "the bank "- state
// describe ideal version of state
// {
//     amount: 100
// }

// if we added 1 to the amount, what would state look like?
// {
//     amount: 101
// }

// a "transaction slip"- action
// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }

import {
    createStore
} from 'redux';

// reduces are always used named for the state they manage
// They always recieve the current state  and the action they're processing
const defaultState = {
    amount1: 100,
    amount2: 200,
};
// create your action types as constants so you get error messages for typos
const INCREMENT= 'INCREMENT';
const DECREMENT= 'DECREMENT';

const ADD_COUNTER = 'ADD_COUNTER';
const DEL_COUNTER = 'DEL_COUNTER';

// write actions creator functions. they format your action objects, again to avaoid typos
function actionIncrement(howMuch=1) {
    return {
        type: INCREMENT,
        amount: howMuch,
        amountId: 'amount2',
    }
}

function actionDecrement(howMuch=1) {
    return {
        type: DECREMENT,
        amount: howMuch
    }
}


function counter(state=defaultState, action) {   
    const newState = {...state};

    switch(action.type) {
        case INCREMENT :
            newState[action.amountId] = state[action.amountId] + action.amount;
            break;
        case DECREMENT :
            newState[action.amountId] = state[action.amountId] - action.amount;
            break;
        default: 
            break;
    }

    // if (action.type === 'INCREMENT') {
    //     newState.amount = state.amount + action.amount;
    // } else if (action.type === 'DECREMENT') {
    //     newState.amount = state.amount - action.amount;
    // } else {
        // no need to do anything
        // we already made a copy of state to return
    // }
    return newState;
    //They *must* return the new version of state
}
// you give it a reducer it gives you a 'store'. The store is an object that manages your state using your render
const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// Push notifications- subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now: ${store.getState()}`);
    console.table(store.getState());
});

//give it some actions to process
// store.dispatch(actionIncrement(12));
// store.dispatch(actionDecrement(4));
// store.dispatch(actionDecrement());

store.dispatch({
    type: INCREMENT,
    amount: 10,
    amountId: 'amount2'
});

store.dispatch({
    type: INCREMENT,
    amount: 111,
    amountId: 'amount2'
});

store.dispatch({
    type: INCREMENT,
    amount: 1,
    amountId: 'amount2'
});




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
