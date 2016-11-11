/**
 * loads state from localstorage if there is a state 
 * parse and return in if not return undefined so the inital state gets written by the reducer
 *
 * @return {Object} JSON object state or undefined
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch ( err ) {
    return undefined;
  }

};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch ( err ) {
    console.log('could not save the state to localstorage:' + err);
  }
}