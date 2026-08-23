<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useReportStore } from '@/stores/reportStore.js'

const router = useRouter()
const reportStore = useReportStore()

// =========================
// Form
// =========================

const title = ref('')
const farm = ref('')
const crop = ref('')
const description = ref('')

// =========================
// Media
// =========================

const mediaFile = ref(null)
const mediaPreview = ref('')
const mediaType = ref('')

// =========================
// State
// =========================

const errorMessage = ref('')
const isSubmitting = ref(false)

// =========================
// Media Handler
// =========================

const handleMedia = (event) => {
  const file = event.target.files?.[0]

  if (!file) return

  errorMessage.value = ''

  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'video/mp4',
    'video/webm',
    'video/quicktime',
  ]

  if (!allowedTypes.includes(file.type)) {
    errorMessage.value =
      'فرمت فایل انتخاب‌شده پشتیبانی نمی‌شود.'

    event.target.value = ''

    return
  }

  // حداکثر حجم فایل: 50MB
  const maxSize = 50 * 1024 * 1024

  if (file.size > maxSize) {
    errorMessage.value =
      'حجم فایل نباید بیشتر از ۵۰ مگابایت باشد.'

    event.target.value = ''

    return
  }

  // اگر قبلاً فایل انتخاب شده بود،
  // URL قبلی را آزاد می‌کنیم.
  if (mediaPreview.value) {
    URL.revokeObjectURL(mediaPreview.value)
  }

  mediaFile.value = file

  mediaPreview.value = URL.createObjectURL(file)

  mediaType.value = file.type.startsWith('video')
    ? 'video'
    : 'image'
}

// =========================
// Remove Media
// =========================

const removeMedia = () => {
  if (mediaPreview.value) {
    URL.revokeObjectURL(mediaPreview.value)
  }

  mediaFile.value = null
  mediaPreview.value = ''
  mediaType.value = ''
}

// =========================
// Submit Report
// =========================

const submitReport = async () => {
  errorMessage.value = ''

  // عنوان گزارش
  if (!title.value.trim()) {
    errorMessage.value =
      'لطفاً عنوان گزارش را وارد کنید.'

    return
  }

  // نام مزرعه
  if (!farm.value.trim()) {
    errorMessage.value =
      'لطفاً نام مزرعه را وارد کنید.'

    return
  }

  // نوع محصول
  if (!crop.value.trim()) {
    errorMessage.value =
      'لطفاً نوع محصول را وارد کنید.'

    return
  }

  // فایل
  if (!mediaFile.value) {
    errorMessage.value =
      'لطفاً یک عکس یا ویدئو برای گزارش انتخاب کنید.'

    return
  }

  // توضیحات
  if (!description.value.trim()) {
    errorMessage.value =
      'لطفاً توضیحات گزارش را وارد کنید.'

    return
  }

  isSubmitting.value = true

  /*
   * فعلاً API نداریم.
   *
   * بعداً این قسمت تبدیل می‌شود به:
   *
   * const formData = new FormData()
   *
   * formData.append('title', title.value)
   * formData.append('farm', farm.value)
   * formData.append('crop', crop.value)
   * formData.append('description', description.value)
   * formData.append('media', mediaFile.value)
   *
   * await reportApi.create(formData)
   */

  setTimeout(() => {
    reportStore.addReport({
      title: title.value.trim(),

      farm: farm.value.trim(),

      crop: crop.value.trim(),

      description: description.value.trim(),

      // آدرس موقت فایل برای نسخه Frontend
      media: mediaPreview.value,

      // image یا video
      mediaType: mediaType.value,
    })

    isSubmitting.value = false

    router.push({
      name: 'reports',
    })
  }, 500)
}

// =========================
// Back
// =========================

const goBack = () => {
  router.push({
    name: 'reports',
  })
}
</script>

<template>
  <div
    dir="rtl"
    class="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8"
  >

    <!-- ========================= -->
    <!-- Header -->
    <!-- ========================= -->

    <div class="mb-6">

      <button
        type="button"
        class="text-sm text-slate-500 transition hover:text-green-600"
        @click="goBack"
      >
        ← بازگشت به گزارش‌ها
      </button>

      <h1
        class="mt-4 text-2xl font-bold text-slate-800 sm:text-3xl"
      >
        ثبت گزارش جدید
      </h1>

      <p
        class="mt-2 text-sm leading-6 text-slate-500 sm:text-base"
      >
        اطلاعات گزارش مزرعه را وارد کنید و تصویر یا ویدئوی مربوط به آن را ارسال کنید.
      </p>

    </div>

    <!-- ========================= -->
    <!-- Main Card -->
    <!-- ========================= -->

    <div
      class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8"
    >

      <!-- ========================= -->
      <!-- Basic Information -->
      <!-- ========================= -->

      <div>

        <h2
          class="text-lg font-bold text-slate-800"
        >
          اطلاعات گزارش
        </h2>

        <p
          class="mt-1 text-sm text-slate-500"
        >
          اطلاعات مربوط به گزارش، مزرعه و محصول را وارد کنید.
        </p>

      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2"
      >

        <!-- Title -->
        <div>

          <label
            for="title"
            class="mb-2 block text-sm font-semibold text-slate-700"
          >
            عنوان گزارش
          </label>

          <input
            id="title"
            v-model="title"
            type="text"
            maxlength="100"
            placeholder="مثلاً بررسی وضعیت گندم"
            class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />

        </div>

        <!-- Farm -->
        <div>

          <label
            for="farm"
            class="mb-2 block text-sm font-semibold text-slate-700"
          >
            نام مزرعه
          </label>

          <input
            id="farm"
            v-model="farm"
            type="text"
            maxlength="100"
            placeholder="مثلاً مزرعه گندم شمالی"
            class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />

        </div>

        <!-- Crop -->
        <div class="md:col-span-2">

          <label
            for="crop"
            class="mb-2 block text-sm font-semibold text-slate-700"
          >
            نوع محصول
          </label>

          <input
            id="crop"
            v-model="crop"
            type="text"
            maxlength="100"
            placeholder="مثلاً گندم، ذرت، جو، برنج و..."
            class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />

        </div>

      </div>

      <!-- ========================= -->
      <!-- Media Upload -->
      <!-- ========================= -->

      <div class="mt-8">

        <h2
          class="text-lg font-bold text-slate-800"
        >
          تصویر یا ویدئو
        </h2>

        <p
          class="mt-1 text-sm text-slate-500"
        >
          تصویر یا ویدئویی از وضعیت مزرعه انتخاب کنید.
        </p>

        <!-- Upload Box -->
        <label
          v-if="!mediaFile"
          for="report-media"
          class="mt-5 flex min-h-[240px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 text-center transition hover:border-green-400 hover:bg-green-50 sm:min-h-[280px]"
        >

          <div
            class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl"
          >
            📷
          </div>

          <p
            class="font-semibold text-slate-700"
          >
            عکس یا ویدئو را انتخاب کنید
          </p>

          <p
            class="mt-2 max-w-md text-xs leading-6 text-slate-400 sm:text-sm"
          >
            روی گوشی می‌توانید مستقیماً با دوربین عکس یا ویدئو بگیرید.
          </p>

          <span
            class="mt-5 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            انتخاب فایل
          </span>

        </label>

        <!-- Preview -->
        <div
          v-else
          class="relative mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
        >

          <!-- Video Preview -->
          <video
            v-if="mediaType === 'video'"
            :src="mediaPreview"
            controls
            playsinline
            class="max-h-[500px] w-full bg-black object-contain"
          ></video>

          <!-- Image Preview -->
          <img
            v-else
            :src="mediaPreview"
            alt="پیش‌نمایش گزارش"
            class="max-h-[500px] w-full object-contain"
          />

          <!-- Remove Button -->
          <button
            type="button"
            aria-label="حذف فایل"
            class="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/90 text-2xl text-white transition hover:bg-red-600"
            @click="removeMedia"
          >
            ×
          </button>

        </div>

        <!-- File Input -->
        <input
          id="report-media"
          type="file"
          class="hidden"
          accept="image/jpeg,image/png,image/webp,video/mp4,video/webm,video/quicktime"
          capture="environment"
          @change="handleMedia"
        />

        <p
          class="mt-2 text-xs leading-5 text-slate-400"
        >
          فرمت‌های مجاز: JPG، PNG، WEBP، MP4، WEBM و MOV — حداکثر ۵۰ مگابایت
        </p>

      </div>

      <!-- ========================= -->
      <!-- Description -->
      <!-- ========================= -->

      <div class="mt-8">

        <label
          for="description"
          class="mb-2 block text-sm font-semibold text-slate-700"
        >
          توضیحات گزارش
        </label>

        <textarea
          id="description"
          v-model="description"
          rows="6"
          maxlength="1000"
          placeholder="مشکل یا وضعیت مشاهده‌شده را با جزئیات توضیح دهید..."
          class="w-full resize-none rounded-2xl border border-slate-300 px-4 py-4 leading-7 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
        ></textarea>

        <div
          class="mt-2 flex items-start justify-between gap-4 text-xs text-slate-400"
        >

          <span>
            توضیحات دقیق‌تر به بررسی بهتر گزارش کمک می‌کند.
          </span>

          <span class="shrink-0">
            {{ description.length }}/1000
          </span>

        </div>

      </div>

      <!-- ========================= -->
      <!-- Error -->
      <!-- ========================= -->

      <div
        v-if="errorMessage"
        class="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm leading-6 text-red-600"
      >
        {{ errorMessage }}
      </div>

      <!-- ========================= -->
      <!-- Actions -->
      <!-- ========================= -->

      <div
        class="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"
      >

        <!-- Cancel -->
        <button
          type="button"
          class="w-full rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-50 sm:w-auto"
          @click="goBack"
        >
          انصراف
        </button>

        <!-- Submit -->
        <button
          type="button"
          :disabled="isSubmitting"
          class="w-full rounded-xl bg-green-600 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          @click="submitReport"
        >

          <span v-if="!isSubmitting">
            ثبت گزارش
          </span>

          <span
            v-else
            class="flex items-center justify-center gap-2"
          >

            <span
              class="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
            ></span>

            در حال ثبت...

          </span>

        </button>

      </div>

    </div>

  </div>
</template>