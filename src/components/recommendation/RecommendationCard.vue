<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-6"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <h3 class="text-lg font-bold text-slate-800">
          {{ recommendation.title }}
        </h3>

        <p class="mt-2 line-clamp-2 text-sm leading-7 text-slate-500">
          {{ recommendation.description }}
        </p>
      </div>

      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl sm:h-14 sm:w-14 sm:text-3xl"
      >
        🌱
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <span
        class="w-fit rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700"
      >
        {{ recommendation.priority }}
      </span>

      <RouterLink
        :to="`/dashboard/recommendations/${recommendation.id}`"
        class="w-full rounded-xl bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-green-700 sm:w-auto"
      >
        مشاهده
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  recommendation: {
    type: Object,
    required: true,
  },
});
</script>