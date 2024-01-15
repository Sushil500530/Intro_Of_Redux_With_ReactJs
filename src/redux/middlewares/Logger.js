const logger = (store) => (next)=> (action)=>{
    const currentState = store.getState();
    console.log('get state ====>',currentState);
    next(action);
    console.log('update state ====>', store.getState());
}
 export default logger;

//  const logger = store => next => action => {
//     console.log('dispaching', action);
//     const result = next(action)
//     console.log('next state', state.getState());
//     return result;
//   }