const BASE_URL = 'http://localhost:8000/api';

const API = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
  },
  HOME: {
    BEEN: `${BASE_URL}/been/me`,
  },
  COUNTRY: {
    GETALLCOUNTRIES: `${BASE_URL}/countries`,
    GETVISITEDCOUNTRY: `${BASE_URL}/countries`,
  },
  WRAPUP: {
    POSTS: `${BASE_URL}/been`,
  },
};

export default API;
