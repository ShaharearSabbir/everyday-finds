export const getErrorMessages = (error) => {
  switch (error) {
    case "CredentialsSignin":
      return "Invalid email or password.";
    case "OAuthAccountNotLinked":
      return "This email is already registered with a different provider.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};
