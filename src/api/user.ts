import request from '../utils/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth',
  DELETE_USER: '/auth/delete/:userId'
}

export interface UserInfo {
  username: string
  password: string
}

export default {
  getUserInfo() {
    return request.get(URL.GET_INFO, {})
  },
  register({ username, password }: UserInfo) {
    return request.post(URL.REGISTER, { username, password })
  },
  login({ username, password }: UserInfo) {
    return request.post(URL.LOGIN, { username, password })
  },
  logout() {
    return request.get(URL.LOGOUT)
  },
  deleteUser(userId: string) {
    return request.delete(URL.DELETE_USER.replace(':userId', userId))
  }
}
