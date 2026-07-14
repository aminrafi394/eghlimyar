<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
  >
    <div class="flex items-start justify-between">
      <div>
        <h3 class="text-lg font-bold text-slate-800">
          {{ report.title }}
        </h3>

        <p class="mt-2 text-sm text-slate-500">
          {{ report.date }}
        </p>
      </div>

      <span
        class="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
      >
        {{ report.status }}
      </span>
    </div>

    <p class="mt-6 leading-7 text-slate-600">
      {{ report.description }}
    </p>

    <RouterLink
      :to="`/dashboard/reports/${report.id}`"
      class="mt-6 inline-block"
    >
      <button
        class="rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
      >
        مشاهده گزارش
      </button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  report: {
    type: Object,
    required: true,
  },
});
</script>