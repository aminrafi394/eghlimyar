<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const phoneNumber = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const normalizePhone = (value) => {
  return value
    .replace(/[۰-۹]/g, (digit) => {
      return String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))
    })
    .replace(/\D/g, '')
}

const handlePhoneInput = (event) => {
  const value = normalizePhone(event.target.value)

  phoneNumber.value = value.slice(0, 11)
}

const sendOtp = () => {
  errorMessage.value = ''

  const phone = normalizePhone(phoneNumber.value)

  phoneNumber.value = phone

  if (!phone) {
    errorMessage.value = 'لطفاً شماره موبایل خود را وارد کنید'

    return
  }

  if (phone.length !== 11) {
    errorMessage.value = 'شماره موبایل باید ۱۱ رقم باشد'

    return
  }

  if (!phone.startsWith('09')) {
    errorMessage.value = 'شماره موبایل باید با 09 شروع شود'

    return
  }

  isLoading.value = true

  /*
   * فعلاً API نداریم.
   *
   * بعداً:
   *
   * await authApi.sendForgotPasswordOtp(phone)
   */

  setTimeout(() => {
    isLoading.value = false

    router.push({
      name: 'forgot-password-otp',
      query: {
        phone,
      },
    })
  }, 500)
}

const goToLogin = () => {
  router.push({
    name: 'login',
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
    <div class="absolute inset-0 bg-green-900/40"></div>

    <!-- Card -->
    <div class="relative z-10 w-full max-w-md">
      <section class="w-full rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl p-6 sm:p-8">
        <!-- Icon -->
        <div class="text-center">
          <div
            class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600"
          >
            🔐
          </div>

          <h1 class="text-2xl sm:text-3xl font-bold text-green-800">بازیابی رمز عبور</h1>

          <p class="mt-3 text-sm leading-6 text-slate-500">
            شماره موبایلی که با آن ثبت‌نام کرده‌اید را وارد کنید تا کد تأیید برای شما ارسال شود.
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
        <form class="mt-7" @submit.prevent="sendOtp">
          
            <div>
              <label for="phone" class="block mb-2 text-sm font-semibold text-slate-700">
                شماره موبایل
              </label>

              <input
                id="phone"
                :value="phoneNumber"
                type="tel"
                inputmode="numeric"
                autocomplete="tel"
                maxlength="11"
                dir="ltr"
                placeholder="09123456789"
                class="w-full border border-slate-300 rounded-2xl px-4 py-4 text-center tracking-wider outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                @input="handlePhoneInput"
              />
            </div>
          

          <!-- Send OTP -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full mt-6 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold transition shadow-lg shadow-green-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span v-if="!isLoading"> ارسال کد تأیید </span>

            <span v-else class="flex items-center justify-center gap-2">
              <span
                class="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
              ></span>

              در حال ارسال...
            </span>
          </button>
        </form>

        <!-- Back -->
        <button
          type="button"
          class="mt-5 w-full text-center text-sm text-slate-500 hover:text-slate-700 transition"
          @click="goToLogin"
        >
          بازگشت به صفحه ورود
        </button>

        <!-- Development -->
        <div
          class="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs leading-5 text-amber-700"
        >
          در نسخه فعلی ارسال پیامک آزمایشی است.
        </div>
      </section>
    </div>
  </main>
</template>
