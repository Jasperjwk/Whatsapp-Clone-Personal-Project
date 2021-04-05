export const initialState = {
  user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
}

// State is how it currently looks like
// Action is what i manipulate what the data layer looks like
// For example: set the item that we are currently playing
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // When you receive this action, you basically want to return 
    case actionTypes.SET_USER:
      return {
        // Keep whatever it is in the current state 
        // Need to have ...state otherwise it will overwrite the state
        ...state,
        // Update the user with whatever is inside the action
        user: action.user,
      };

    default:
      // nothing changes so it does not break my app
      return state;
  }
};

export default reducer;