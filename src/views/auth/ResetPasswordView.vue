<script setup>

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/authStore'


const router = useRouter()
const store = useUserStore()


const password = ref('')
const confirmPassword = ref('')


const errorMessage = ref('')
const successMessage = ref('')


const isLoading = ref(false)


const showPassword = ref(false)
const showConfirmPassword = ref(false)



// قدرت رمز
const passwordStrength = computed(()=>{

  let level = 0

  if(password.value.length >= 6){
    level++
  }

  if(/[A-Z]/.test(password.value)){
    level++
  }

  if(/[0-9]/.test(password.value)){
    level++
  }


  let text='ضعیف'


  if(level===2){
    text='متوسط'
  }


  if(level===3){
    text='قوی'
  }


  return {
    level,
    text
  }

})



// تغییر رمز

const resetPassword = ()=>{


errorMessage.value=''
successMessage.value=''


if(
!password.value ||
!confirmPassword.value
){

errorMessage.value =
'تمامی فیلدها را پر کنید'

return

}



if(password.value !== confirmPassword.value){

errorMessage.value =
'رمز عبور یکسان نیست'

return

}



isLoading.value=true



setTimeout(()=>{


const result =
store.updatePassword(
password.value
)



if(result){


successMessage.value =
'رمز عبور با موفقیت تغییر کرد'


setTimeout(()=>{

router.replace({
name:'login'
})

},1000)



}
else{


errorMessage.value =
'خطا در تغییر رمز'


}



isLoading.value=false


},500)



}



const goBack = ()=>{

router.push({
name:'forgot-password-otp'
})

}


</script>

<template>
  <main
    dir="rtl"
    class="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 sm:px-6"
  >

    <!-- Background -->
    <div
      class="absolute inset-0 bg-center bg-cover"
      style="background-image: url('/images/farm.png')"
    ></div>

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-green-900/40"
    ></div>

    <!-- Card -->
    <div
      class="relative z-10 w-full max-w-md"
    >

      <section
        class="w-full rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl p-5 sm:p-7 md:p-8"
      >

        <!-- Icon -->
        <div class="text-center">

          <div
            class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600"
          >
            🔑
          </div>

          <h1
            class="text-xl sm:text-2xl font-bold text-green-800"
          >
            ایجاد رمز عبور جدید
          </h1>

          <p
            class="mt-3 text-sm leading-6 text-slate-500"
          >
            برای حساب خود یک رمز عبور جدید انتخاب کنید.
          </p>

        </div>

        <!-- Error -->
        <div
          v-if="errorMessage"
          class="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm leading-6 text-red-600"
        >
          {{ errorMessage }}
        </div>

        <!-- Form -->
        <form
          class="mt-7"
          @submit.prevent="resetPassword"
        >

          <!-- New Password -->
          <div>

            <label
              for="password"
              class="block mb-2 text-sm font-semibold text-slate-700"
            >
              رمز عبور جدید
            </label>

            <div class="relative">

              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="new-password"
                placeholder="حداقل ۶ کاراکتر"
                class="w-full border border-slate-300 rounded-2xl px-4 py-4 pl-14 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

              <button
                type="button"
                class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? '🙈' : '👁️' }}
              </button>

            </div>

            <!-- Strength -->
            <div
              v-if="password"
              class="mt-3"
            >

              <div
                class="flex gap-1"
              >

                <div
                  v-for="index in 3"
                  :key="index"
                  class="h-1.5 flex-1 rounded-full transition"
                  :class="
                    index <= passwordStrength.level
                      ? 'bg-green-500'
                      : 'bg-slate-200'
                  "
                ></div>

              </div>

              <p
                class="mt-1 text-xs text-slate-500"
              >
                قدرت رمز:

                <span class="font-semibold">
                  {{ passwordStrength.text }}
                </span>
              </p>

            </div>

          </div>

          <!-- Confirm Password -->
          <div class="mt-5">

            <label
              for="confirmPassword"
              class="block mb-2 text-sm font-semibold text-slate-700"
            >
              تکرار رمز عبور جدید
            </label>

            <div class="relative">

              <input
                id="confirmPassword"
                v-model="confirmPassword"
                :type="
                  showConfirmPassword
                    ? 'text'
                    : 'password'
                "
                autocomplete="new-password"
                placeholder="رمز عبور را دوباره وارد کنید"
                class="w-full border border-slate-300 rounded-2xl px-4 py-4 pl-14 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

              <button
                type="button"
                class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                @click="
                  showConfirmPassword =
                    !showConfirmPassword
                "
              >
                {{ showConfirmPassword ? '🙈' : '👁️' }}
              </button>

            </div>

          </div>

          <!-- Requirements -->
          <div
            class="mt-5 rounded-xl bg-slate-50 border border-slate-100 p-4"
          >

            <p
              class="text-xs font-semibold text-slate-600 mb-2"
            >
              رمز عبور باید:
            </p>

            <div
              class="space-y-1.5 text-xs"
            >

              <p
                :class="
                  password.length >= 6
                    ? 'text-green-600'
                    : 'text-slate-400'
                "
              >
                ✓ حداقل ۶ کاراکتر داشته باشد
              </p>

              <p
                :class="
                  password &&
                  password === confirmPassword
                    ? 'text-green-600'
                    : 'text-slate-400'
                "
              >
                ✓ با تکرار رمز یکسان باشد
              </p>

            </div>

          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full mt-6 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold transition shadow-lg shadow-green-200 disabled:cursor-not-allowed disabled:opacity-60"
          >

            <span v-if="!isLoading">
              تغییر رمز عبور
            </span>

            <span
              v-else
              class="flex items-center justify-center gap-2"
            >

              <span
                class="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
              ></span>

              در حال تغییر رمز...

            </span>

          </button>

        </form>

        <!-- Back -->
        <button
          type="button"
          class="mt-5 w-full text-center text-sm text-slate-500 hover:text-slate-700 transition"
          @click="goBack"
        >
          بازگشت به تأیید کد
        </button>

      </section>

    </div>
  </main>
</template>