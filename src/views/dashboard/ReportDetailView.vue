<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useReportStore } from '@/stores/reportStore.js'

const route = useRoute()
const router = useRouter()

const reportStore = useReportStore()

const report = computed(() => {
  return reportStore.getReportById(route.params.id)
})

const statusClass = computed(() => {
  if (!report.value) return ''

  if (report.value.status === 'ready') {
    return 'bg-green-100 text-green-700'
  }

  if (report.value.status === 'processing') {
    return 'bg-yellow-100 text-yellow-700'
  }

  return 'bg-slate-100 text-slate-600'
})

const statusTextClass = computed(() => {
  if (!report.value) return ''

  if (report.value.status === 'ready') {
    return 'text-green-600'
  }

  if (report.value.status === 'processing') {
    return 'text-yellow-600'
  }

  return 'text-slate-600'
})

const goBack = () => {
  router.push({
    name: 'reports',
  })
}
</script>

<template>
  <div
    dir="rtl"
    class="space-y-6 sm:space-y-8"
  >

    <!-- Header -->
    <div
      class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
    >

      <div>

        <button
          type="button"
          class="mb-4 text-sm text-slate-500 transition hover:text-green-600"
          @click="goBack"
        >
          ← بازگشت به گزارش‌ها
        </button>

        <h1
          class="text-2xl font-extrabold text-slate-800 sm:text-3xl"
        >
          جزئیات گزارش
        </h1>

        <p
          class="mt-2 text-sm text-slate-500 sm:text-base"
        >
          اطلاعات کامل گزارش انتخاب شده
        </p>

      </div>

      <!-- Status -->
      <span
        v-if="report"
        class="w-fit rounded-full px-4 py-2 text-sm font-semibold"
        :class="statusClass"
      >
        {{ report.statusLabel }}
      </span>

    </div>

    <!-- Not Found -->
    <div
      v-if="!report"
      class="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
    >

      <div class="text-5xl">
        📋
      </div>

      <h2
        class="mt-4 text-xl font-bold text-slate-700"
      >
        گزارش پیدا نشد
      </h2>

      <p
        class="mt-2 text-sm text-slate-500"
      >
        این گزارش وجود ندارد یا حذف شده است.
      </p>

      <button
        type="button"
        class="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        @click="goBack"
      >
        بازگشت به گزارش‌ها
      </button>

    </div>

    <!-- Report -->
    <div
      v-else
      class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >

      <!-- Report Header -->
      <div
        class="border-b border-slate-100 p-5 sm:p-6 lg:p-8"
      >

        <div
          class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >

          <div>

            <p
              class="text-sm text-slate-400"
            >
              گزارش شماره #{{ report.id }}
            </p>

            <h2
              class="mt-2 text-xl font-bold text-slate-800 sm:text-2xl"
            >
              {{ report.title }}
            </h2>

          </div>

          <div>
            <p class="text-xs text-slate-400">
              تاریخ ثبت
            </p>

            <p
              class="mt-1 text-sm font-semibold text-slate-700"
            >
              {{ report.createdAt }}
            </p>
          </div>

        </div>

      </div>

      <!-- Information -->
      <div
        class="grid grid-cols-1 gap-5 border-b border-slate-100 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8"
      >

        <!-- Farm -->
        <div
          class="rounded-xl bg-slate-50 p-4"
        >
          <p class="text-xs text-slate-400">
            نام مزرعه
          </p>

          <p class="mt-2 font-semibold text-slate-700">
            {{ report.farm || 'ثبت نشده' }}
          </p>
        </div>

        <!-- Crop -->
        <div
          class="rounded-xl bg-slate-50 p-4"
        >
          <p class="text-xs text-slate-400">
            نوع محصول
          </p>

          <p class="mt-2 font-semibold text-slate-700">
            {{ report.crop || 'ثبت نشده' }}
          </p>
        </div>

        <!-- Status -->
        <div
          class="rounded-xl bg-slate-50 p-4"
        >
          <p class="text-xs text-slate-400">
            وضعیت گزارش
          </p>

          <p
            class="mt-2 font-semibold"
            :class="statusTextClass"
          >
            {{ report.statusLabel }}
          </p>
        </div>

      </div>

      <!-- ========================= -->
      <!-- Media -->
      <!-- ========================= -->

      <div
        class="border-b border-slate-100 p-5 sm:p-6 lg:p-8"
      >

        <h3
          class="text-lg font-bold text-slate-800"
        >
          فایل گزارش
        </h3>

        <p
          class="mt-1 text-sm text-slate-500"
        >
          تصویر یا ویدئوی ارسال‌شده توسط کاربر
        </p>

        <!-- Media -->
        <div
          v-if="report.media"
          class="mt-5 overflow-hidden rounded-2xl bg-slate-100"
        >

          <!-- Video -->
          <video
            v-if="report.mediaType === 'video'"
            :src="report.media"
            controls
            playsinline
            class="max-h-[600px] w-full bg-black object-contain"
          ></video>

          <!-- Image -->
          <img
            v-else
            :src="report.media"
            alt="تصویر گزارش"
            class="max-h-[600px] w-full object-contain"
          />

        </div>

        <!-- No Media -->
        <div
          v-else
          class="mt-5 flex min-h-[240px] items-center justify-center rounded-2xl bg-slate-100 text-center"
        >

          <div>

            <div class="text-5xl">
              🖼️
            </div>

            <p
              class="mt-3 text-sm text-slate-400"
            >
              فایلی برای این گزارش ثبت نشده است.
            </p>

          </div>

        </div>

      </div>

      <!-- ========================= -->
      <!-- Description -->
      <!-- ========================= -->

      <div
        class="border-b border-slate-100 p-5 sm:p-6 lg:p-8"
      >

        <h3
          class="text-lg font-bold text-slate-800"
        >
          توضیحات گزارش
        </h3>

        <div
          class="mt-5 rounded-2xl bg-slate-50 p-5"
        >

          <p
            class="whitespace-pre-line leading-8 text-slate-600"
          >
            {{ report.description || 'توضیحی برای این گزارش ثبت نشده است.' }}
          </p>

        </div>

      </div>

      <!-- ========================= -->
      <!-- System Analysis -->
      <!-- ========================= -->

      <div
        class="border-b border-slate-100 p-5 sm:p-6 lg:p-8"
      >
      </div>

      <!-- ========================= -->
      <!-- Recommendations -->
      <!-- ========================= -->

      <div
        class="p-5 sm:p-6 lg:p-8"
      >

        <div class="flex items-center gap-3">

          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100"
          >
            🌱
          </div>

          <div>

            <h3
              class="text-lg font-bold text-slate-800"
            >
              پیشنهادهای سیستم
            </h3>

            <p
              class="text-sm text-slate-500"
            >
              پیشنهادهای مربوط به این گزارش
            </p>

          </div>

        </div>

        <div
          class="mt-5 rounded-2xl bg-slate-50 p-5"
        >

          <p
            class="leading-8 text-slate-600"
          >
            پیشنهادهای هوشمند پس از تحلیل گزارش توسط سیستم
            در این قسمت نمایش داده خواهند شد.
          </p>

        </div>

      </div>

    </div>

  </div>
</template>