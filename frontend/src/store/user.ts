import { makeAutoObservable } from 'mobx'
import { userType } from '@/types/user'

class UserStore {
  user: userType = {}

  constructor() {
    makeAutoObservable(this)
  }

  init(data: userType) {
    this.user = data
  }
}

export default new UserStore()
