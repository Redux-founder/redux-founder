# Redux-founder

A module that easily handles hold, success, failure and reset in Redux-saga. Or the normal disaptch action also makes it concise.

You can use Redux together with [React](https://reactjs.org/), or with any other view library.

[redux-founder](https://github.com/Redux-founder/)



## Installation

Inside your React project directory, run the following:

```
npm i redux-founder
```



## Quick Start

### redux-saga action type

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

### single dispatch action type

```js
...new SpreadReducer(null, actions.INFO_CASE_INIT, {
  callback: (draft, { payload: diff }, state) => {
    // after callback
  },
}),
```





## Examples

- [test]()



## License

+ [MIT](<https://github.com/Redux-founder/redux-founder/blob/master/LICENSE>)

