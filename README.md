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
import arrayMapReducer from 'reducer-generator-array-map'

const system = arrayMapReducer({ /* initial state */ }, [
  (state, action) => action.type === 'SYSTEM_ONLINE'
    ? { ...state, isOnline: true }
    : state,
  (state, action) => action.type === 'SYSTEM_OFFLINE'
    ? { ...state, isOnline: false
    : state
])
```