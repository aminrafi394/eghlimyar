<template>
  <div class="space-y-8">

    <!-- Header -->
    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">
        توصیه‌های هوشمند
      </h1>

      <p class="mt-2 text-slate-500">
        پیشنهادهای هوشمند بر اساس وضعیت آب‌وهوا و اطلاعات مزرعه
      </p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

      <div class="rounded-2xl bg-green-600 p-6 text-white shadow">
        <p class="text-sm opacity-80">
          توصیه‌های جدید
        </p>

        <h2 class="mt-3 text-4xl font-bold">
          12
        </h2>
      </div>

      <div class="rounded-2xl bg-yellow-500 p-6 text-white shadow">
        <p class="text-sm opacity-80">
          هشدارها
        </p>

        <h2 class="mt-3 text-4xl font-bold">
          3
        </h2>
      </div>

      <div class="rounded-2xl bg-blue-600 p-6 text-white shadow">
        <p class="text-sm opacity-80">
          انجام شده
        </p>

        <h2 class="mt-3 text-4xl font-bold">
          8
        </h2>
      </div>

    </div>

    <!-- List -->

    <RecommendationList />

  </div>
</template>

<script setup>
import RecommendationList from "@/components/recommendation/RecommendationList.vue";
</script>