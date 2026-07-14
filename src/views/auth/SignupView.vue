<script setup>
import { useUserStore } from '@/stores/authStore.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()
const username = ref('')
const password = ref('')
const phonNumber = ref('')
const signup = () => {
  if (!username.value || !password.value || !phonNumber.value) {
    alert('لطفا تمامی فیلدها را تکمیل کنید')
    return
  }
  router.push('/login')
  store.register(username.value, password.value, phonNumber.value)
}
</script>
<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div
      class="absolute inset-0 bg-center bg-cover"
      style="background-image: url('/public/images/farm.png')"
    ></div>

    <div class="absolute inset-0 bg-green-900/40"></div>

    <div class="relative z-10 w-full px-4 flex justify-center">
      <div class="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 class="text-2xl font-bold text-green-800 text-center mb-6">ثبت نام</h2>

        <form class="space-y-4">
          <input
            v-model="username"
            type="text"
            placeholder=" نام و نام خانوادگی"
            class="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            v-model="phonNumber"
            inputmode="numberic"
            pattern="[0-9]*"
            maxlength="11"
            type="tel"
            placeholder="شماره موبایل"
            class="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
          />
          <input
            v-model="password"
            type="password"
            placeholder="رمز عبور"
            class="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            @click="signup"
            class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
          >
            ایجاد حساب
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
