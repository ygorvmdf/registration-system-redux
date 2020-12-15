const VALID_USER = 'VALID_USER';

const validUser = (loggedIn) => ({
  type: VALID_USER,
  loggedIn,
});

export { validUser }
