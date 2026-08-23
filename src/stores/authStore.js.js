import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    // اطلاعات کاربر ثبت‌نام‌شده
    username: '',
    password: '',
    phoneNumber: '',

    // اطلاعات موقت ثبت‌نام تا قبل از تأیید OTP
    pendingSignup: null,

    email: 'user@gmail.com',
    role: 'کشاورز',

    isLoggedIn: false,

    profileImage: 'https://ui-avatars.com/api/?name=M&background=16a34a&color=fff',
  }),

  actions: {
    // نگهداری موقت اطلاعات ثبت‌نام
    // تا زمانی که OTP تأیید شود
    setPendingSignup(data) {
      this.pendingSignup = {
        username: data.username,
        password: data.password,
        phoneNumber: data.phoneNumber,
      }
    },

    // ثبت‌نام نهایی
    // فقط بعد از تأیید OTP اجرا می‌شود
    register() {
      if (!this.pendingSignup) {
        return false
      }

      this.username = this.pendingSignup.username
      this.password = this.pendingSignup.password
      this.phoneNumber = this.pendingSignup.phoneNumber

      // اطلاعات موقت دیگر لازم نیست
      this.pendingSignup = null

      return true
    },

    login(identifier, password) {
      const userMatch =
        this.username.trim() === identifier.trim() || this.phoneNumber.trim() === identifier.trim()

      const passMatch = this.password === password

      if (userMatch && passMatch) {
        this.isLoggedIn = true
        return true
      }

      return false
    },

    resetPassword(phoneNumber, newPassword) {
      const userMatch = this.phoneNumber.trim() === phoneNumber.trim()

      if (!userMatch) {
        return false
      }

      this.password = newPassword

      return true
    },

    updateProfile(data) {
      this.username = data.username?.trim() || this.username
      this.phoneNumber = data.phoneNumber?.trim() || this.phoneNumber
      this.email = data.email?.trim() || this.email
      this.role = data.role?.trim() || this.role

      if (data.profileImage) {
        this.profileImage = data.profileImage
      }
    },

    logout() {
      this.isLoggedIn = false
    },
  },
})
