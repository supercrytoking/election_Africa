import axios from "axios";

// export const LOGIN_URL = "/api/auth/login";
// export const REGISTER_URL = "/api/auth/register";
// export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";
// export const ME_URL = "api/me";
const ABU = process.env.REACT_APP_API_BASE_URL;
export const LOGIN_URL = ABU + "/api/auth/login";
export const REGISTER_URL = ABU + "/api/auth/register";
export const REQUEST_PASSWORD_URL = ABU + "/api/auth/forgot-password";
export const ME_URL = ABU + "/api/me";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, name, password) {
  return axios.post(REGISTER_URL, { email, name, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}