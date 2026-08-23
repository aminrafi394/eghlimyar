<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/authStore.js'

const router = useRouter()
const store = useUserStore()

const username = ref('')
const phoneNumber = ref('')
const password = ref('')
const confirmPassword = ref('')

const signup = () => {
  if (
    !username.value ||
    !phoneNumber.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    alert('لطفاً تمامی فیلدها را تکمیل کنید')
    return
  }

  if (phoneNumber.value.length !== 11) {
    alert('شماره موبایل باید ۱۱ رقم باشد')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('رمز عبور و تکرار رمز عبور یکسان نیستند')
    return
  }

  // اطلاعات ثبت‌نام فعلاً موقت ذخیره می‌شوند
  // ثبت‌نام نهایی بعد از تأیید OTP انجام خواهد شد
  store.setPendingSignup({
    username: username.value,
    password: password.value,
    phoneNumber: phoneNumber.value,
  })

  router.push({
    name: 'signup-otp',
    query: {
      phone: phoneNumber.value,
    },
  })
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-center bg-cover"
      style="background-image: url('/images/farm.png')"
    ></div>

    <div class="absolute inset-0 bg-green-900/40"></div>

    <div class="relative z-10 w-full px-4 flex justify-center">
      <div
        class="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <h2 class="text-2xl font-bold text-green-800 text-center mb-2">
          ثبت نام
        </h2>

        <p class="text-center text-sm text-slate-500 mb-6">
          برای ایجاد حساب اطلاعات خود را وارد کنید
        </p>

        <form
          class="space-y-4"
          @submit.prevent="signup"
        >
          <!-- Username -->
          <div>
            <label class="block mb-1 text-sm font-medium text-slate-700">
              نام کاربری
            </label>

            <input
              v-model="username"
              type="text"
              autocomplete="username"
              placeholder="نام کاربری"
              class="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block mb-1 text-sm font-medium text-slate-700">
              شماره موبایل
            </label>

            <input
              v-model="phoneNumber"
              inputmode="numeric"
              maxlength="11"
              type="tel"
              autocomplete="tel"
              placeholder="09123456789"
              class="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 text-left"
              dir="ltr"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block mb-1 text-sm font-medium text-slate-700">
              رمز عبور
            </label>

            <input
              v-model="password"
              type="password"
              autocomplete="new-password"
              placeholder="رمز عبور"
              class="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block mb-1 text-sm font-medium text-slate-700">
              تکرار رمز عبور
            </label>

            <input
              v-model="confirmPassword"
              type="password"
              autocomplete="new-password"
              placeholder="تکرار رمز عبور"
              class="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-semibold"
          >
            ادامه ثبت نام
          </button>
        </form>

        <p class="mt-5 text-center text-sm text-slate-500">
          قبلاً حساب ساخته‌اید؟

          <button
            type="button"
            class="text-green-600 font-semibold hover:text-green-700"
            @click="router.push('/login')"
          >
            ورود
          </button>
        </p>
      </div>
    </div>
  </div>
</template>