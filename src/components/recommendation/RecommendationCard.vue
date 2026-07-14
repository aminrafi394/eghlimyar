<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
  >
    <div class="flex items-start justify-between">
      <div>
        <h3 class="text-lg font-bold text-slate-800">
          {{ recommendation.title }}
        </h3>

        <p class="mt-2 text-sm leading-7 text-slate-500">
          {{ recommendation.description }}
        </p>
      </div>

      <div
        class="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl"
      >
        🌱
      </div>
    </div>

    <div class="mt-6 flex items-center justify-between">
      <span
        class="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700"
      >
        {{ recommendation.priority }}
      </span>

      <button
        class="rounded-xl bg-green-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700"
      >
        مشاهده
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recommendation: {
    type: Object,
    required: true,
  },
});
</script>