import {FlowUrl} from './index';

export const register = {
  registerauth: async ({email, username, password}) => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    return await FlowUrl.post('/register', data);
  },
};
export const login = {
  loginauth: async ({email, password}) => {
    const data = {
      email: email,
      password: password,
    };
    return await FlowUrl.put('/login', data);
  },
};
