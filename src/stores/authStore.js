import { defineStore } from "pinia"


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


    // signup
    pendingSignup: null,


    // forgot password
    pendingResetPhone: null,


  }),



  actions:{



    // =================
    // Signup
    // =================

    setPendingSignup(data){

      this.pendingSignup = data

    },


    register(){


      if(!this.pendingSignup){

        return false

      }


      this.username =
      this.pendingSignup.username


      this.password =
      this.pendingSignup.password


      this.phoneNumber =
      this.pendingSignup.phoneNumber



      this.pendingSignup = null


      return true

    },




    // =================
    // Login
    // =================

    login(identifier,password){


      if(

        (
          identifier === this.username ||
          identifier === this.phoneNumber
        )

        &&

        password === this.password

      ){

        this.isLoggedIn = true

        return true

      }


      return false

    },





    logout(){

      this.isLoggedIn = false

    },





    // =================
    // Forgot Password
    // =================


    setResetPhone(phone){

      this.pendingResetPhone = phone

    },



    updatePassword(newPassword){


      if(
        !this.pendingResetPhone
      ){

        return false

      }



      if(
        this.pendingResetPhone !== this.phoneNumber
      ){

        return false

      }



      this.password = newPassword


      this.pendingResetPhone = null


      return true

    },





    updateProfile(data){

      this.username = data.username
      this.phoneNumber = data.phoneNumber
      this.email = data.email
      this.role = data.role
      this.profileImage = data.profileImage

    }



  }


})