import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://bookido-back.onrender.com/users/'
})

export const logIn = async ({ email, password }) =>
  (await apiUrl.post('/login', { email, password })).data

export const register = async ({ username, email, password }) =>
  (await apiUrl.post('/', { username, email, password })).data

export const getUserById = async userId => (await apiUrl.get('/' + userId)).data
