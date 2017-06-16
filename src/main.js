export default
  function createArrayMapReducer( initialState, reducers, ...initialArgs ) {
    return ( state = initialState, action, ...reducerArgs ) => 
      reducers.reduce( 
        (p, c) => c(p, action, ...initialArgs, ...reducerArgs) || p, 
        state
      )
  }

