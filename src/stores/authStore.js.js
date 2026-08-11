import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    password: "",
    phoneNumber: "",

    email: "user@gmail.com",
    role: "کشاورز",

    isLoggedIn: false,

    profileImage:
      "https://ui-avatars.com/api/?name=M&background=16a34a&color=fff",
  }),

  actions: {
    register(username, password, phoneNumber) {
      this.username = username;
      this.password = password;
      this.phoneNumber = phoneNumber;
    },

    login(identifier, password) {
      const userMatch =
        this.username.trim() === identifier.trim() ||
        this.phoneNumber.trim() === identifier.trim();

      const passMatch = this.password === password;

      if (userMatch && passMatch) {
        this.isLoggedIn = true;
        return true;
      }

      return false;
    },

    updateProfile(data) {
      this.username = data.username;
      this.phoneNumber = data.phoneNumber;
      this.email = data.email;
      this.role = data.role;
      this.profileImage = data.profileImage;
    },

    logout() {
      this.isLoggedIn = false;
    },
  },
});