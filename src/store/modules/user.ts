import type { UserInfo } from 'types/store'
import { defineStore } from 'pinia'
import { store } from 'src/store'
import { User } from 'src/api'

interface UserState {
  userInfo: UserInfo | null
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: null
  }),
  getters: {
    getUserInfo(): UserInfo | null {
      return this.userInfo
    }
  },
  actions: {
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info
    },
    resetState() {
      this.userInfo = null
    },
    async getUserInfoAction(): Promise<UserInfo | null> {
      const userInfo: any = await User.getUserInfo()
      this.setUserInfo(userInfo)
      return userInfo
    }
  }
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
