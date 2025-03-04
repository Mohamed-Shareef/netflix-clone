export const checkValidation = (email, password, name) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = name.length > 0 ? true : false;

  if (!isEmailValid) {
    return "! Please enter a valid Email ID";
  }
  if (!isPasswordValid) {
    return "Password must contain at least 8 characters, including UPPER/lowercase and numbers.";
  }
  if (!isNameValid) {
    return "Please enter your name";
  }
  return null;
};
