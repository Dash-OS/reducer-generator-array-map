# reducer-generator-array-map

A `reducer-generator` which builds a reducer that reduces an array of 
reducers.

### Installation

```
yarn add reducer-generator-array-map
```

**or**

```
npm install --save reducer-generator-array-map
```

### Simple Example

```js
import createArrayMapReducer from 'reducer-generator-array-map'

const system = createArrayMapReducer({ /* initial state */ }, [
  (state, action) => action.type === 'SYSTEM_ONLINE'
    ? { ...state, isOnline: true }
    : state,
  (state, action) => action.type === 'SYSTEM_OFFLINE'
    ? { ...state, isOnline: false
    : state
], /* You may pass extra args that will be passed to the reducer(s) */)
```