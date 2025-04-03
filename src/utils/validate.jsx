export const checkValidation = (email, password) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "! Please enter a valid Email ID";
  }
  if (!isPasswordValid) {
    return "Password must contain at least 8 characters, including UPPER/lowercase and numbers.";
  }

  return null;
};
