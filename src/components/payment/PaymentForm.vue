<template>
  <div dir="rtl" class="w-full">
    <div
      class="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <!-- ================= HEADER ================= -->

      <div
        class="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h2 class="text-xl font-extrabold text-slate-800 sm:text-2xl">پرداخت امن</h2>

          <p class="mt-1 text-sm text-slate-500">اطلاعات کارت بانکی خود را وارد کنید</p>
        </div>

        <div class="flex items-center gap-2 text-sm font-medium text-green-700">
          <span class="text-lg"> 🔒 </span>

          <span> پرداخت امن </span>
        </div>
      </div>

      <!-- ================= CONTENT ================= -->

      <div class="grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-3">
        <!-- ================= SUMMARY ================= -->

        <aside class="space-y-5 lg:col-span-1">
          <div class="overflow-hidden rounded-2xl border border-slate-200">
            <div
              class="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4"
            >
              <h3 class="font-bold text-slate-800">خلاصه پرداخت</h3>

              <span class="text-xl"> 🛒 </span>
            </div>

            <div class="space-y-5 p-5">
              <div class="flex items-center justify-between gap-4">
                <span class="text-sm text-slate-500"> عنوان پرداخت </span>

                <span class="text-sm font-semibold text-slate-700"> خدمات اسمارت فارم </span>
              </div>

              <div class="flex items-center justify-between gap-4">
                <span class="text-sm text-slate-500"> شماره سفارش </span>

                <span class="text-sm font-semibold text-slate-700"> #SF-1405-2587 </span>
              </div>

              <div class="flex items-center justify-between gap-4">
                <span class="text-sm text-slate-500"> مبلغ </span>

                <span class="text-sm font-semibold text-slate-700">
                  {{ formattedAmount }}
                  تومان
                </span>
              </div>

              <div class="border-t border-slate-100 pt-5">
                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span class="font-semibold text-slate-700"> مبلغ قابل پرداخت </span>

                  <span class="text-xl font-extrabold text-green-600">
                    {{ formattedAmount }}
                    تومان
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Security -->

          <div class="rounded-2xl border border-green-100 bg-green-50 p-5">
            <div class="flex items-start gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl"
              >
                🛡️
              </div>

              <div>
                <h3 class="font-bold text-slate-800">پرداخت امن</h3>

                <p class="mt-2 text-sm leading-6 text-slate-500">
                  اطلاعات پرداخت شما به صورت امن پردازش خواهد شد.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <!-- ================= FORM ================= -->

        <section class="lg:col-span-2">
          <div class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div class="mb-7">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl"
                >
                  💳
                </div>

                <div>
                  <h3 class="text-xl font-bold text-slate-800">اطلاعات کارت بانکی</h3>

                  <p class="mt-1 text-sm text-slate-500">اطلاعات کارت را وارد کنید</p>
                </div>
              </div>
            </div>

            <!-- ================= FORM ================= -->

            <form class="space-y-6" @submit.prevent="handlePayment">
              <!-- ================= CARD NUMBER ================= -->

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700"> شماره کارت </label>

                <div class="relative">
                  <!-- BANK ICON -->

                  <div
                    v-if="detectedBank"
                    class="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white p-1.5 shadow-sm"
                  >
                    <component :is="detectedBank.icon" class="h-full w-full" />
                  </div>

                  <!-- DEFAULT ICON -->

                  <div v-else class="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-xl">
                    💳
                  </div>

                  <!-- INPUT -->

                  <input
                    v-model="form.cardNumber"
                    type="text"
                    inputmode="numeric"
                    maxlength="19"
                    autocomplete="cc-number"
                    dir="ltr"
                    placeholder="6037 9912 1234 5678"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 pr-16 text-left tracking-widest outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    @input="formatCardNumber"
                  />
                </div>

                <!-- BANK NAME -->

                <div
                  v-if="detectedBank"
                  class="mt-2 flex items-center gap-2 text-sm font-medium text-green-700"
                >
                  <span>
                    {{ detectedBank.name }}
                  </span>
                </div>

                <div v-else-if="cardDigits.length >= 6" class="mt-2 text-sm text-slate-400">
                  بانک کارت شناسایی نشد
                </div>

                <p v-if="errors.cardNumber" class="mt-2 text-sm text-red-500">
                  {{ errors.cardNumber }}
                </p>
              </div>

              <!-- ================= CVV + OTP ================= -->

              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <!-- CVV -->

                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700"> CVV2 </label>

                  <div class="relative">
                    <input
                      ref="cvvInput"
                      v-model="form.cvv"
                      type="password"
                      inputmode="numeric"
                      maxlength="4"
                      autocomplete="off"
                      placeholder="123"
                      dir="ltr"
                      class="w-full rounded-xl border border-slate-300 px-4 py-4 pr-11 text-left outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      @input="handleCvvInput"
                    />

                    <span class="absolute right-4 top-1/2 -translate-y-1/2"> 🔒 </span>
                  </div>

                  <p v-if="errors.cvv" class="mt-2 text-sm text-red-500">
                    {{ errors.cvv }}
                  </p>
                </div>

                <!-- OTP -->

                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700"> رمز پویا </label>

                  <div class="flex gap-2">
                    <input
                      ref="otpInput"
                      v-model="form.dynamicPassword"
                      type="password"
                      inputmode="numeric"
                      maxlength="6"
                      placeholder="رمز پویا"
                      dir="ltr"
                      class="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      @input="onlyNumbers('dynamicPassword')"
                    />

                    <button
                      type="button"
                      :disabled="otpRequested"
                      class="whitespace-nowrap rounded-xl border border-green-200 bg-green-50 px-4 text-sm font-semibold text-green-700 transition hover:bg-green-100 disabled:opacity-50"
                      @click="requestDynamicPassword"
                    >
                      {{ otpRequested ? `${otpTimer} ثانیه` : 'درخواست رمز' }}
                    </button>
                  </div>

                  <p v-if="errors.dynamicPassword" class="mt-2 text-sm text-red-500">
                    {{ errors.dynamicPassword }}
                  </p>
                </div>
              </div>

              <!-- ================= EXPIRY ================= -->

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700"> تاریخ انقضا </label>

                <div class="grid grid-cols-2 gap-4">
                  <!-- MONTH -->

                  <input
                    ref="expiryMonthInput"
                    v-model="form.expiryMonth"
                    type="text"
                    inputmode="numeric"
                    maxlength="2"
                    placeholder="ماه"
                    class="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    @input="handleMonthInput"
                  />

                  <!-- YEAR -->

                  <input
                    ref="expiryYearInput"
                    v-model="form.expiryYear"
                    type="text"
                    inputmode="numeric"
                    maxlength="2"
                    placeholder="سال"
                    class="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    @input="handleYearInput"
                  />
                </div>

                <p v-if="errors.expiry" class="mt-2 text-sm text-red-500">
                  {{ errors.expiry }}
                </p>
              </div>

              <!-- ================= CAPTCHA ================= -->

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                  عبارت امنیتی
                </label>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div class="flex gap-2">
                    <div
                      class="flex h-14 flex-1 select-none items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl font-black tracking-[0.5em] text-green-700"
                    >
                      {{ captcha }}
                    </div>

                    <button
                      type="button"
                      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-xl text-green-700 transition hover:bg-green-100"
                      @click="refreshCaptcha"
                    >
                      ↻
                    </button>
                  </div>

                  <input
                    v-model="form.captcha"
                    type="text"
                    inputmode="numeric"
                    maxlength="5"
                    placeholder="عبارت مقابل را وارد کنید"
                    class="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    @input="onlyNumbers('captcha')"
                  />
                </div>

                <p v-if="errors.captcha" class="mt-2 text-sm text-red-500">
                  {{ errors.captcha }}
                </p>
              </div>

              <!-- ================= ERROR ================= -->

              <div v-if="paymentError" class="rounded-xl bg-red-50 p-4 text-sm text-red-600">
                {{ paymentError }}
              </div>

              <!-- ================= SUCCESS ================= -->

              <div v-if="paymentSuccess" class="rounded-xl bg-green-50 p-4 text-sm text-green-700">
                پرداخت با موفقیت ثبت شد.
              </div>

              <!-- ================= BUTTON ================= -->

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full rounded-xl bg-green-600 py-4 text-base font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {{ isLoading ? 'در حال پردازش...' : `پرداخت ${formattedAmount} تومان` }}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, reactive, ref } from 'vue'

import { usePaymentStore } from '@/stores/paymentStore'

import iranianBanks from '@/data/iranianBanks'

/* =========================
   STORE
========================= */

const paymentStore = usePaymentStore()

/* =========================
   FORM
========================= */

const form = reactive({
  amount: 2500000,

  cardNumber: '',

  cvv: '',

  dynamicPassword: '',

  expiryMonth: '',

  expiryYear: '',

  captcha: '',
})

/* =========================
   ERRORS
========================= */

const errors = reactive({
  cardNumber: '',

  cvv: '',

  dynamicPassword: '',

  expiry: '',

  captcha: '',
})

/* =========================
   STATE
========================= */

const isLoading = ref(false)

const paymentSuccess = ref(false)

const paymentError = ref('')

/* =========================
   OTP
========================= */

const otpRequested = ref(false)

const otpTimer = ref(60)

let otpInterval = null

/* =========================
   EXPIRY INPUTS
========================= */

const expiryMonthInput = ref(null)

const expiryYearInput = ref(null)
const cvvInput = ref(null)
const otpInput = ref(null)

/* =========================
   CAPTCHA
========================= */

const generateCaptcha = () => {
  return Math.floor(10000 + Math.random() * 90000).toString()
}

const captcha = ref(generateCaptcha())

/* =========================
   AMOUNT
========================= */

const formattedAmount = computed(() => {
  return new Intl.NumberFormat('fa-IR').format(form.amount)
})

/* =========================
   CARD DIGITS
========================= */

const cardDigits = computed(() => {
  return form.cardNumber.replace(/\D/g, '')
})

/* =========================
   DETECT BANK
========================= */

const detectedBank = computed(() => {
  const digits = cardDigits.value

  if (digits.length < 6) {
    return null
  }

  const prefix = digits.substring(0, 6)

  return iranianBanks.find((bank) => bank.prefixes.includes(prefix)) || null
})

/* =========================
   FORMAT CARD
========================= */

const formatCardNumber = () => {
  let value = form.cardNumber.replace(/\D/g, '')

  value = value.substring(0, 16)

  form.cardNumber = value.replace(/(.{4})/g, '$1 ').trim()

  errors.cardNumber = ''
}

/* =========================
   NUMBERS ONLY
========================= */

const onlyNumbers = (field) => {
  form[field] = form[field].replace(/\D/g, '')
}

/* =========================
   MONTH
========================= */

const handleMonthInput = async () => {
  form.expiryMonth = form.expiryMonth.replace(/\D/g, '').substring(0, 2)

  errors.expiry = ''

  if (form.expiryMonth.length === 2) {
    await nextTick()

    expiryYearInput.value?.focus()
  }
}

/* =========================
   YEAR
========================= */

const handleYearInput = () => {
  form.expiryYear = form.expiryYear.replace(/\D/g, '').substring(0, 2)

  errors.expiry = ''
}

/* =========================
   OTP
========================= */

const requestDynamicPassword = () => {
  if (otpRequested.value) {
    return
  }

  otpRequested.value = true

  otpTimer.value = 60

  otpInterval = setInterval(() => {
    otpTimer.value--

    if (otpTimer.value <= 0) {
      clearInterval(otpInterval)

      otpInterval = null

      otpRequested.value = false

      otpTimer.value = 60
    }
  }, 1000)
}

/* =========================
   CAPTCHA REFRESH
========================= */

const refreshCaptcha = () => {
  captcha.value = generateCaptcha()

  form.captcha = ''

  errors.captcha = ''
}

/* =========================
   VALIDATION
========================= */

const validateForm = () => {
  errors.cardNumber = ''

  errors.cvv = ''

  errors.dynamicPassword = ''

  errors.expiry = ''

  errors.captcha = ''

  const cardNumber = form.cardNumber.replace(/\s/g, '')

  if (cardNumber.length !== 16) {
    errors.cardNumber = 'شماره کارت باید ۱۶ رقم باشد.'

    return false
  }

  if (!/^\d{3,4}$/.test(form.cvv)) {
    errors.cvv = 'CVV2 را صحیح وارد کنید.'

    return false
  }

  if (!/^\d{4,6}$/.test(form.dynamicPassword)) {
    errors.dynamicPassword = 'رمز پویا را وارد کنید.'

    return false
  }

  if (!/^\d{2}$/.test(form.expiryMonth) || !/^\d{2}$/.test(form.expiryYear)) {
    errors.expiry = 'ماه و سال انقضا را صحیح وارد کنید.'

    return false
  }

  const month = Number(form.expiryMonth)

  if (month < 1 || month > 12) {
    errors.expiry = 'ماه باید بین 01 تا 12 باشد.'

    return false
  }

  if (form.captcha !== captcha.value) {
    errors.captcha = 'عبارت امنیتی صحیح نیست.'

    return false
  }

  return true
}

/* =========================
   PAYMENT
========================= */

const handlePayment = async () => {
  paymentSuccess.value = false

  paymentError.value = ''

  if (!validateForm()) {
    return
  }

  isLoading.value = true

  try {
    /*
     * فعلاً پرداخت آزمایشی است.
     * بعداً API واقعی را اینجا وصل می‌کنیم.
     */

    await new Promise((resolve) => setTimeout(resolve, 1200))

    paymentStore.addPayment({
      amount: form.amount,

      status: 'پرداخت شده',

      date: new Date().toLocaleDateString('fa-IR'),
    })

    paymentSuccess.value = true

    form.cardNumber = ''

    form.cvv = ''

    form.dynamicPassword = ''

    form.expiryMonth = ''

    form.expiryYear = ''

    refreshCaptcha()
  } catch (error) {
    console.error(error)

    paymentError.value = 'پرداخت انجام نشد. دوباره تلاش کنید.'
  } finally {
    isLoading.value = false
  }
}

/* =========================
   CLEANUP
========================= */

onBeforeUnmount(() => {
  if (otpInterval) {
    clearInterval(otpInterval)
  }
})
const handleCvvInput = async () => {
  form.cvv = form.cvv
    .replace(/\D/g, "")
    .substring(0, 4);

  errors.cvv = "";

  // بعد از وارد کردن 3 رقم
  if (form.cvv.length === 3) {
    await nextTick();

    otpInput.value?.focus();
  }
};
</script>
