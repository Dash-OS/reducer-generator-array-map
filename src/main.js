export default
  ( initialState, reducers, pcontext ) => 
    ( state = initialState, action, context ) =>
      ( reducers.reduce( (p, c)  => c(p, action, { ...pcontext, ...context }), state ) )
