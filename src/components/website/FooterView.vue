<template>
  <footer class="border-t border-slate-200 bg-slate-900 text-white">

    <div
      class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8"
    >

      <div>

        <h2 class="text-2xl font-extrabold text-green-400">
          🌱 اقلیم یار
        </h2>

        <p class="mt-5 leading-8 text-slate-400">
          سامانه هوشمند مدیریت مزارع، تحلیل داده‌های کشاورزی،
          پیش‌بینی آب‌وهوا و افزایش بهره‌وری.
        </p>

      </div>

      <div>

        <h3 class="mb-5 text-lg font-bold">
          دسترسی سریع
        </h3>

        <ul class="space-y-3 text-slate-400">

          <li>
            <RouterLink to="/">صفحه اصلی</RouterLink>
          </li>

          <li>
            <RouterLink to="/about">درباره ما</RouterLink>
          </li>

          <li>
            <RouterLink to="/contact">تماس با ما</RouterLink>
          </li>

        </ul>

      </div>

      <div>

        <h3 class="mb-5 text-lg font-bold">
          خدمات
        </h3>

        <ul class="space-y-3 text-slate-400">
          <li>مدیریت مزارع</li>
          <li>پیش‌بینی آب‌وهوا</li>
          <li>گزارش‌های تحلیلی</li>
          <li>توصیه‌های هوشمند</li>
        </ul>

      </div>

      <div>

        <h3 class="mb-5 text-lg font-bold">
          ارتباط با ما
        </h3>

        <ul class="space-y-3 text-slate-400">
          <li>📧 info@eghlimyar.ir</li>
          <li>📞 021-12345678</li>
          <li>📍 تهران، ایران</li>
        </ul>

      </div>

    </div>

    <div
      class="border-t border-slate-800 py-6 text-center text-sm text-slate-500"
    >
      © 2026 Eghlim Yar — تمامی حقوق محفوظ است.
    </div>

  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>