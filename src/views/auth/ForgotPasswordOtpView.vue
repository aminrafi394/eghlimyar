<script setup>
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const TEST_OTP = '123456'
const OTP_LENGTH = 6
const RESEND_TIME = 60

const otp = ref(
  Array(OTP_LENGTH).fill('')
)

const inputs = ref([])

const errorMessage = ref('')
const isVerifying = ref(false)

const remainingTime = ref(RESEND_TIME)
const canResend = ref(false)

let timer = null

const phoneNumber = computed(() => {
  return route.query.phone || ''
})

const formattedPhone = computed(() => {
  const phone = phoneNumber.value

  if (!phone) {
    return ''
  }

  if (phone.length === 11) {
    return `${phone.slice(0, 4)}***${phone.slice(-4)}`
  }

  return phone
})

const otpValue = computed(() => {
  return otp.value.join('')
})

const setInputRef = (element, index) => {
  if (element) {
    inputs.value[index] = element
  }
}

const focusInput = async (index) => {
  await nextTick()

  if (inputs.value[index]) {
    inputs.value[index].focus()
    inputs.value[index].select()
  }
}

const handleInput = (event, index) => {
  errorMessage.value = ''

  const value = event.target.value.replace(/\D/g, '')

  if (!value) {
    otp.value[index] = ''
    return
  }

  if (value.length > 1) {
    handlePasteValue(value)
    return
  }

  otp.value[index] = value

  if (index < OTP_LENGTH - 1) {
    focusInput(index + 1)
  }

  if (otpValue.value.length === OTP_LENGTH) {
    verifyOtp()
  }
}

const handleKeydown = (event, index) => {
  errorMessage.value = ''

  if (event.key === 'Backspace') {
    if (otp.value[index]) {
      otp.value[index] = ''
      return
    }

    if (index > 0) {
      otp.value[index - 1] = ''
      focusInput(index - 1)
    }
  }

  if (
    event.key === 'ArrowLeft' &&
    index > 0
  ) {
    event.preventDefault()
    focusInput(index - 1)
  }

  if (
    event.key === 'ArrowRight' &&
    index < OTP_LENGTH - 1
  ) {
    event.preventDefault()
    focusInput(index + 1)
  }
}

const handlePaste = (event) => {
  event.preventDefault()

  const value = event.clipboardData
    ?.getData('text')
    ?.replace(/\D/g, '')

  if (value) {
    handlePasteValue(value)
  }
}

const handlePasteValue = (value) => {
  const digits = value
    .slice(0, OTP_LENGTH)
    .split('')

  otp.value = Array(OTP_LENGTH).fill('')

  digits.forEach((digit, index) => {
    otp.value[index] = digit
  })

  if (digits.length === OTP_LENGTH) {
    verifyOtp()
  } else {
    focusInput(digits.length)
  }
}

const verifyOtp = () => {
  if (isVerifying.value) {
    return
  }

  errorMessage.value = ''

  if (otpValue.value.length !== OTP_LENGTH) {
    errorMessage.value =
      'لطفاً کد تأیید را کامل وارد کنید'

    return
  }

  isVerifying.value = true

  /*
   * فعلاً OTP آزمایشی
   *
   * بعداً:
   *
   * await authApi.verifyForgotPasswordOtp(...)
   */

  setTimeout(() => {
    if (otpValue.value !== TEST_OTP) {
      errorMessage.value =
        'کد تأیید واردشده صحیح نیست'

      isVerifying.value = false

      otp.value = Array(OTP_LENGTH).fill('')

      focusInput(0)

      return
    }

    isVerifying.value = false

    router.push({
      name: 'reset-password',
      query: {
        phone: phoneNumber.value,
      },
    })
  }, 500)
}

const startTimer = () => {
  clearInterval(timer)

  remainingTime.value = RESEND_TIME
  canResend.value = false

  timer = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--
    }

    if (remainingTime.value === 0) {
      canResend.value = true
      clearInterval(timer)
    }
  }, 1000)
}

const resendOtp = () => {
  if (!canResend.value) {
    return
  }

  otp.value = Array(OTP_LENGTH).fill('')
  errorMessage.value = ''

  /*
   * بعداً:
   *
   * await authApi.sendForgotPasswordOtp(phoneNumber.value)
   */

  startTimer()
  focusInput(0)
}

const goBack = () => {
  router.push({
    name: 'forgot-password',
  })
}

onMounted(() => {
  if (!phoneNumber.value) {
    router.replace({
      name: 'forgot-password',
    })

    return
  }

  startTimer()

  nextTick(() => {
    focusInput(0)
  })
})

onUnmounted(() => {
  clearInterval(timer)
})
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
            📱
          </div>

          <h1
            class="text-xl sm:text-2xl font-bold text-green-800"
          >
            تأیید شماره موبایل
          </h1>

          <p
            class="mt-3 text-sm leading-6 text-slate-500"
          >
            کد تأیید ارسال‌شده به شماره زیر را وارد کنید
          </p>

          <p
            class="mt-2 text-sm font-semibold text-slate-700"
            dir="ltr"
          >
            {{ formattedPhone }}
          </p>

        </div>

        <!-- OTP -->
        <div
          class="mt-7"
        >

          <div
            class="flex justify-center gap-2 sm:gap-3"
            dir="ltr"
          >

            <input
              v-for="(_, index) in otp"
              :key="index"
              :ref="(element) => setInputRef(element, index)"
              :value="otp[index]"
              type="text"
              inputmode="numeric"
              maxlength="1"
              autocomplete="one-time-code"
              class="h-12 w-10 sm:h-14 sm:w-12 rounded-xl border border-slate-200 bg-white text-center text-lg sm:text-xl font-bold text-slate-800 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              @input="handleInput($event, index)"
              @keydown="handleKeydown($event, index)"
              @paste="handlePaste"
            />

          </div>

        </div>

        <!-- Error -->
        <div
          v-if="errorMessage"
          class="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm text-red-600"
        >
          {{ errorMessage }}
        </div>

        <!-- Verify -->
        <button
          type="button"
          :disabled="
            isVerifying ||
            otpValue.length !== OTP_LENGTH
          "
          class="w-full mt-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
          @click="verifyOtp"
        >

          <span v-if="!isVerifying">
            تأیید کد
          </span>

          <span
            v-else
            class="flex items-center justify-center gap-2"
          >

            <span
              class="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
            ></span>

            در حال بررسی...

          </span>

        </button>

        <!-- Resend -->
        <div
          class="mt-5 text-center text-sm"
        >

          <p
            v-if="!canResend"
            class="text-slate-500"
          >
            ارسال مجدد کد تا

            <span
              class="font-semibold text-green-600"
              dir="ltr"
            >
              {{ remainingTime }}
            </span>

            ثانیه دیگر
          </p>

          <button
            v-else
            type="button"
            class="font-semibold text-green-600 hover:text-green-700"
            @click="resendOtp"
          >
            ارسال مجدد کد
          </button>

        </div>

        <!-- Back -->
        <button
          type="button"
          class="mt-5 w-full text-center text-sm text-slate-500 hover:text-slate-700 transition"
          @click="goBack"
        >
          بازگشت
        </button>

        <!-- Test OTP -->
        <div
          class="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs leading-5 text-amber-700"
        >
          کد آزمایشی:

          <strong dir="ltr">
            123456
          </strong>
        </div>

      </section>

    </div>
  </main>
</template>