import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    password: "",
    phoneNumber: "",

    email: "user@gmail.com",
    role: "کشاورز",

    // وضعیت ورود
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",

    profileImage:
      "https://ui-avatars.com/api/?name=M&background=16a34a&color=fff",

    // =================
    // Signup
    // =================
    pendingSignup: null,

    // =================
    // Forgot Password
    // =================
    pendingResetPhone: null,
  }),

  actions: {
    // =================
    // Signup
    // =================

    setPendingSignup(data) {
      this.pendingSignup = data;
    },

    register() {
      if (!this.pendingSignup) {
        return false;
      }

      this.username = this.pendingSignup.username;
      this.password = this.pendingSignup.password;
      this.phoneNumber = this.pendingSignup.phoneNumber;

      this.pendingSignup = null;

      return true;
    },

    // =================
    // Login
    // =================

    login(identifier, password) {
      if (
        (
          identifier === this.username ||
          identifier === this.phoneNumber
        ) &&
        password === this.password
      ) {
        // Pinia
        this.isLoggedIn = true;

        // LocalStorage
        localStorage.setItem("isLoggedIn", "true");

        return true;
      }

      return false;
    },

    // =================
    // Logout
    // =================

    logout() {
      // Pinia
      this.isLoggedIn = false;

      // LocalStorage
      localStorage.removeItem("isLoggedIn");
    },

    // =================
    // Forgot Password
    // =================

    setResetPhone(phone) {
      this.pendingResetPhone = phone;
    },

    updatePassword(newPassword) {
      if (!this.pendingResetPhone) {
        return false;
      }

      if (this.pendingResetPhone !== this.phoneNumber) {
        return false;
      }

      this.password = newPassword;

      this.pendingResetPhone = null;

      return true;
    },

    // =================
    // Profile
    // =================

    updateProfile(data) {
      this.username = data.username;
      this.phoneNumber = data.phoneNumber;
      this.email = data.email;
      this.role = data.role;
      this.profileImage = data.profileImage;
    },
  },
});