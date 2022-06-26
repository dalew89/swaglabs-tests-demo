import { getClass, getTestID } from "../../utils/selectors";

export const LoginScreen = {
    usernameInput: getTestID("username"),
    passwordInput: getTestID("password"),
    loginButton: getTestID("login-button"),
    errorBanner: getTestID("error")
};
