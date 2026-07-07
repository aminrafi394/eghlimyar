import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    password: '',
    phonNumber: '',
    isLoggedIn: false,
  }),

  actions: {
    register(username, password, phonNumber) {
      this.username = username
      this.password = password
      this.phonNumber = phonNumber
    },

    login(identifier, password) {
      const userMatch =
        this.username.trim() === identifier.trim() || this.phonNumber.trim() === identifier.trim()

      const passMatch = this.password === password

      console.log('userMatch:', userMatch)
      console.log('passMatch:', passMatch)

      if (userMatch && passMatch) {
        this.isLoggedIn = true
        return true
      }

      return false
    },
  },
})
