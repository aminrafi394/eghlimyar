<template>
  <div class="space-y-8">
    <!-- عنوان -->
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-800">داشبورد</h1>

        <p class="text-slate-500 mt-2 text-sm sm:text-base">خلاصه وضعیت سامانه اقلیم یار</p>
      </div>
      <router-link to="/dashboard/add-farm">
        <button
          class="w-full sm:w-auto rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
        >
          افزودن مزرعه
        </button>
      </router-link>
    </div>

    <DashboardContent />
  </div>
</template>

<script setup>
import DashboardContent from '@/components/dashboard/DashboardContent.vue'
</script>
