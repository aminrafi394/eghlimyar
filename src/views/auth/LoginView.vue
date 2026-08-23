<script setup>
import { useUserStore } from '@/stores/authStore.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const identifier = ref('')
const password = ref('')
const rememberMe = ref(false)

const errorMessage = ref('')
const isLoading = ref(false)

const login = () => {
  errorMessage.value = ''

  if (!identifier.value.trim() || !password.value) {
    errorMessage.value = 'لطفاً تمامی فیلدها را تکمیل کنید'
    return
  }

  isLoading.value = true

  // فعلاً ورود با Pinia
  // بعداً این بخش به API متصل می‌شود
  setTimeout(() => {
    const success = store.login(
      identifier.value,
      password.value
    )

    if (success) {
      router.push({
        name: 'dashboard',
      })
    } else {
      errorMessage.value =
        'نام کاربری یا رمز عبور اشتباه است'

      isLoading.value = false
    }
  }, 400)
}

const goToSignup = () => {
  router.push({
    name: 'signup',
  })
}

const forgotPassword = () => {
  router.push({
    name: 'forgot-password',
  })
}
</script>

<template>
  <div
    dir="rtl"
    class="min-h-screen relative overflow-hidden bg-cover bg-center"
    style="background-image: url('/images/farm.png')"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/25"></div>

    <!-- Main -->
    <div
      class="relative z-10 min-h-screen flex flex-col lg:flex-row"
    >

      <!-- ================================================= -->
      <!-- LOGIN - LEFT -->
      <!-- ================================================= -->

      <section
        dir="rtl"
        class="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-16"
      >

        <div
          class="w-full max-w-md bg-white/95 backdrop-blur rounded-[32px] shadow-2xl p-6 md:p-8 lg:p-10"
        >

          <!-- Mobile Logo -->
          <div
            class="flex lg:hidden justify-center mb-6"
          >
            <div
              class="w-20 h-20 rounded-3xl bg-green-100 flex items-center justify-center text-4xl"
            >
              🌱
            </div>
          </div>

          <!-- Header -->
          <div class="text-center">

            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800"
            >
              ورود به حساب کاربری
            </h2>

            <p
              class="mt-3 text-sm sm:text-base text-slate-500"
            >
              خوش آمدید، برای ادامه وارد شوید
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
            class="mt-8"
            @submit.prevent="login"
          >

            <!-- Identifier -->
            <div>

              <label
                for="identifier"
                class="block mb-2 text-sm font-semibold text-slate-700"
              >
                نام کاربری
              </label>

              <input
                id="identifier"
                v-model="identifier"
                type="text"
                autocomplete="username"
                placeholder="نام کاربری یا شماره موبایل"
                class="w-full border border-slate-300 rounded-2xl px-4 py-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

            </div>

            <!-- Password -->
            <div class="mt-5">

              <label
                for="password"
                class="block mb-2 text-sm font-semibold text-slate-700"
              >
                رمز عبور
              </label>

              <input
                id="password"
                v-model="password"
                type="password"
                autocomplete="current-password"
                placeholder="رمز عبور خود را وارد کنید"
                class="w-full border border-slate-300 rounded-2xl px-4 py-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

            </div>

            <!-- Remember -->
            <div
              class="flex items-center justify-between gap-4 mt-6"
            >

              <button
                type="button"
                @click="forgotPassword"
                class="text-sm text-green-600 hover:text-green-700 transition whitespace-nowrap"
              >
                فراموشی رمز؟
              </button>

              <label
                class="flex items-center gap-2 cursor-pointer select-none"
              >

                <input
                  v-model="rememberMe"
                  type="checkbox"
                  class="w-4 h-4 accent-green-600"
                />

                <span class="text-sm text-slate-600">
                  مرا به خاطر بسپار
                </span>

              </label>

            </div>

            <!-- Login -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full mt-8 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition shadow-lg shadow-green-200 disabled:cursor-not-allowed disabled:opacity-60"
            >

              <span v-if="!isLoading">
                ورود به سامانه
              </span>

              <span
                v-else
                class="flex items-center justify-center gap-2"
              >
                <span
                  class="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
                ></span>

                در حال ورود...
              </span>

            </button>

          </form>

          <!-- Divider -->
          <div
            class="flex items-center gap-4 my-8"
          >

            <div
              class="flex-1 h-px bg-slate-200"
            ></div>

            <span class="text-slate-400">
              یا
            </span>

            <div
              class="flex-1 h-px bg-slate-200"
            ></div>

          </div>

          <!-- Signup -->
          <button
            type="button"
            @click="goToSignup"
            class="w-full py-4 rounded-2xl border-2 border-green-600 text-green-600 font-bold hover:bg-green-50 transition"
          >
            ثبت نام در سامانه
          </button>

          <!-- Footer -->
          <p
            class="text-center text-slate-400 text-sm mt-8 leading-6"
          >
            تمامی اطلاعات شما به صورت امن نگهداری می‌شود.
          </p>

        </div>

      </section>

      <!-- ================================================= -->
      <!-- HERO - RIGHT -->
      <!-- ================================================= -->

      <section
        dir="rtl"
        class="hidden lg:flex w-1/2 min-h-screen flex-col justify-center px-10 xl:px-16 2xl:px-24 text-white"
      >

        <!-- Logo -->
        <div class="mb-10">

          <div
            class="flex items-center gap-5"
          >

            <div
              class="w-16 h-16 xl:w-20 xl:h-20 shrink-0 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl xl:text-4xl"
            >
              🌱
            </div>

            <div>

              <h2
                class="text-2xl xl:text-3xl font-bold"
              >
                سامانه هوشمند کشاورزی
              </h2>

              <p
                class="text-white/80 mt-1 text-sm xl:text-base"
              >
                مدیریت مزرعه و پیش‌بینی وضعیت هوا
              </p>

            </div>

          </div>

        </div>

        <!-- Hero Title -->
        <div
          class="max-w-2xl"
        >

          <h1
            class="text-4xl xl:text-5xl 2xl:text-6xl leading-relaxed font-extrabold"
          >
            کشاورزی هوشمند،
            <br />
            تصمیم‌گیری دقیق‌تر
          </h1>

          <p
            class="mt-8 text-lg xl:text-xl 2xl:text-2xl leading-10 text-white/90"
          >
            اطلاعات مزرعه، وضعیت آب و هوا، رطوبت خاک و تحلیل داده‌ها را در یک داشبورد حرفه‌ای مشاهده کنید.
          </p>

        </div>

        <!-- Features -->
        <div
          class="flex flex-wrap gap-4 mt-10"
        >

          <div
            class="bg-white/20 backdrop-blur px-6 py-4 rounded-2xl"
          >
            🌦️ پیش‌بینی هوا
          </div>

          <div
            class="bg-white/20 backdrop-blur px-6 py-4 rounded-2xl"
          >
            🌱 مدیریت مزرعه
          </div>

        </div>

      </section>

    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: #94a3b8;
}
</style>