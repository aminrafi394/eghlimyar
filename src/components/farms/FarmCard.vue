<template>
  <div
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="p-6">
      <!-- Header -->
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-xl font-bold text-slate-800">
            {{ farm.name }}
          </h3>

          <p class="mt-2 text-sm text-slate-500">
            {{ farm.city }}
          </p>
        </div>

        <span
          class="rounded-full px-3 py-1 text-xs font-bold"
          :class="
            farm.status === 'فعال'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          "
        >
          {{ farm.status }}
        </span>
      </div>

      <!-- Information -->
      <div class="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-slate-400">
            محصول
          </p>

          <p class="mt-1 font-semibold text-slate-800">
            {{ farm.crop }}
          </p>
        </div>

        <div>
          <p class="text-sm text-slate-400">
            مساحت
          </p>

          <p class="mt-1 font-semibold text-slate-800">
            {{ farm.area }}
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">

        <RouterLink
          :to="`/dashboard/farms/${farm.id}`"
          class="flex-1"
        >
          <button
            class="w-full rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
          >
            مشاهده
          </button>
        </RouterLink>

        <RouterLink
          :to="`/dashboard/edit-farm/${farm.id}`"
          class="flex-1"
        >
          <button
            class="w-full rounded-xl border border-slate-300 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            ویرایش
          </button>
        </RouterLink>

      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  farm: {
    type: Object,
    required: true,
  },
});
</script>