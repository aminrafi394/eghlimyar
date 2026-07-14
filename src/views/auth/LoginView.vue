<script setup>
import { useUserStore } from '@/stores/authStore.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const identifier = ref('')
const password = ref('')
const rememberMe = ref(false)

const login = () => {
  if (!identifier.value || !password.value) {
    alert('لطفا تمامی فیلدها را تکمیل کنید')
    return
  }

  const sucess = store.login(identifier.value, password.value)
  if (sucess) {
    alert('ورود موفق')
    router.push('/dashboard')
  } else {
    alert('نام کاربری یا رمز عبور اشتباه است')
  }
}

const goToSignup = () => {
  router.push('/signup')
}

const forgotPassword = () => {
  alert('بازیابی رمز عبور')
}
</script>

<template>
  <div
    dir="rtl"
    class="min-h-screen bg-cover bg-center relative"
    style="background-image: url('/public/images/farm.png')"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/25"></div>

    <!-- Main Content -->
    <div class="relative z-10 min-h-screen grid lg:grid-cols-2">
      <!-- Hero Section -->
      <div
        class="hidden lg:flex flex-col justify-center px-12 xl:px-24 text-white order-2 lg:order-1"
      >
        <!-- Logo -->
        <div class="mb-10">
          <div class="flex items-center justify-center p-4 sm:p-6 lg:p-10 order-1 lg:order-2">
            <div
              class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl"
              style="margin-left: 10px"
            >
              🌱
            </div>

            <div style="margin-left: 100px">
              <h2 class="text-3xl font-bold">سامانه هوشمند کشاورزی</h2>

              <p class="text-white/80 mt-1">مدیریت مزرعه و پیش‌بینی وضعیت هوا</p>
            </div>
          </div>
        </div>

        <!-- Title -->
        <div class="max-w-lg">
          <h1 class="text-5xl leading-relaxed font-extrabold mb-2">
            کشاورزی هوشمند،
            <br />
            تصمیم‌گیری دقیق‌تر
          </h1>

          <!-- Description -->
          <p class="mt-8 text-xl xl:text-2xl leading-10 max-w-2xl text-white/90">
            اطلاعات مزرعه، وضعیت آب و هوا، رطوبت خاک و تحلیل داده‌ها را در یک داشبورد حرفه‌ای مشاهده
            کنید.
          </p>
        </div>
        <!-- Features -->
        <div class="flex gap-4 mt-10">
          <div class="bg-white/20 backdrop-blur px-6 py-4 rounded-2xl">🌦️ پیش‌بینی هوا</div>

          <div class="bg-white/20 backdrop-blur px-6 py-4 rounded-2xl">🌱 مدیریت مزرعه</div>
        </div>
      </div>

      <!-- Login Form -->
      <div class="flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <div
          class="w-full max-w-md bg-white/95 backdrop-blur rounded-[32px] shadow-2xl p-6 md:p-8 lg:p-10"
        >
          <!-- Mobile Logo -->
          <div class="flex lg:hidden justify-center mb-6">
            <div
              class="w-20 h-20 rounded-3xl bg-green-100 flex items-center justify-center text-4xl"
            >
              🌱
            </div>
          </div>

          <!-- Header -->
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-800">ورود به حساب کاربری</h2>

            <p class="mt-3 text-slate-500">خوش آمدید، برای ادامه وارد شوید</p>
          </div>

          <!-- Username -->
          <div class="mt-8">
            <label class="block mb-2 text-slate-700 font-semibold"> نام کاربری </label>

            <input
              v-model="identifier"
              type="text"
              placeholder="نام کاربری یا شماره موبایل"
              class="w-full border border-slate-300 rounded-2xl px-4 py-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
            />
          </div>

          <!-- Password -->
          <div class="mt-5">
            <label class="block mb-2 text-slate-700 font-semibold"> رمز عبور </label>

            <input
              v-model="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              class="w-full border border-slate-300 rounded-2xl px-4 py-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
            />
          </div>

          <!-- Remember -->
          <div class="flex items-center justify-between mt-6">
            <button @click="forgotPassword" class="text-green-600 hover:text-green-700">
              فراموشی رمز؟
            </button>

            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="rememberMe" type="checkbox" class="accent-green-600" />

              <span class="text-slate-600"> مرا به خاطر بسپار </span>
            </label>
          </div>

          <!-- Login Button -->
          <button
            @click="login"
            class="w-full mt-8 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition shadow-lg shadow-green-200"
          >
            ورود به سامانه
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-4 my-8">
            <div class="flex-1 h-px bg-slate-200"></div>

            <span class="text-slate-400"> یا </span>

            <div class="flex-1 h-px bg-slate-200"></div>
          </div>

          <!-- Signup -->
          <button
            @click="goToSignup"
            class="w-full py-4 rounded-2xl border-2 border-green-600 text-green-600 font-bold hover:bg-green-50 transition"
          >
            ثبت نام در سامانه
          </button>

          <!-- Footer -->
          <p class="text-center text-slate-400 text-sm mt-8">
            تمامی اطلاعات شما به صورت امن نگهداری می‌شود.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: #94a3b8;
}
</style>
