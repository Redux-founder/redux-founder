# redux-founder

## Introduction

It is a module to easily process pending, success, failure, and reset in Redux-saga.

[redux-founder](https://github.com/Redux-founder/)

## Quick Start

### redux-saga

```js
import { makeAsyncActions, makeAsyncCreateActions } from 'redux-founder'
//axios
function handleLanding(){
  const config = {
    url: //apiAddress,
    method: //post or get,
    data: //data,
  };
  return axios.post(config);
}

// actions
export const BASE_LANDING_CHANGE = makeAsyncActions('base/BASE_LANDING_CHANGE');
export const BASE_LANDING_CHANGE_SAGA = makeAsyncCreateActions(BASE_LANDING_CHANGE)(handleLanding);

// in reducer
const intialState={
  landing:{
    pending:null,
    success:null,
    failure:null,
  }
}
const SpreadReducer = SpreadActions({stete:intialState});

export default handleActions(
  {
    ...new SpreadReducer('project', actions.BASE_LANDING_CHANGE, {
      success: (draft, { payload: diff }, state) => {
		// after success draft
      },
    })
  initialState,
);
```

### single action

```js
...new SpreadReducer(null, actions.INFO_CASE_INIT, {
  callback: (draft, { payload: diff }, state) => {
    // after callback
  },
}),
```



## Usage

Inside your React project directory, run the following:

```
npm i redux-founder
```

## Installing





## Examples

- [test]()

