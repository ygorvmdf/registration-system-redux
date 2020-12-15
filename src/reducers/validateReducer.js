const VALID_USER = 'VALID_USER';

const INITIAL_STATE = {
  loggedIn: false,
}

const validateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VALID_USER:
      return { ...state, loggedIn: action.loggedIn };
    default:
      return state;
  }
}

export default validateReducer;
