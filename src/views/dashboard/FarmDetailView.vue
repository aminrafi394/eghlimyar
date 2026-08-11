<template>
  <div class="space-y-8">
    <!-- Header -->
    <div
      class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-extrabold text-slate-800">
          جزئیات مزرعه
        </h1>

        <p class="mt-2 text-slate-500">
          اطلاعات کامل مزرعه انتخاب شده
        </p>
      </div>

      <RouterLink
        to="/dashboard/farms"
        class="w-full sm:w-auto"
      >
        <button
          type="button"
          class="w-full rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 sm:w-auto"
        >
          بازگشت به مزارع
        </button>
      </RouterLink>
    </div>

    <!-- Farm Not Found -->
    <div
      v-if="!farm"
      class="rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm sm:p-8"
    >
      <div class="text-4xl">
        ⚠️
      </div>

      <h2 class="mt-4 text-xl font-bold text-slate-800">
        مزرعه پیدا نشد
      </h2>

      <p class="mt-2 text-slate-500">
        مزرعه مورد نظر وجود ندارد.
      </p>

      <RouterLink
        to="/dashboard/farms"
        class="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
      >
        بازگشت به مزارع
      </RouterLink>
    </div>

    <!-- Farm Details -->
    <div
      v-else
      class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <!-- Top -->
      <div
        class="flex flex-col gap-5 border-b border-slate-200 bg-green-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div class="flex items-center gap-4">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-3xl"
          >
            🌱
          </div>

          <div>
            <h2 class="text-xl font-extrabold text-slate-800 sm:text-2xl">
              {{ farm.name }}
            </h2>

            <p class="mt-1 text-sm text-slate-500">
              {{ farm.crop }}
            </p>
          </div>
        </div>

        <span
          class="w-fit rounded-full px-4 py-2 text-sm font-bold"
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
      <div
        class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:gap-5 sm:p-8 lg:grid-cols-4"
      >
        <div class="rounded-2xl bg-slate-50 p-5">
          <p class="text-sm text-slate-500">
            نام مزرعه
          </p>

          <p class="mt-2 font-bold text-slate-800">
            {{ farm.name }}
          </p>
        </div>

        <div class="rounded-2xl bg-slate-50 p-5">
          <p class="text-sm text-slate-500">
            نوع محصول
          </p>

          <p class="mt-2 font-bold text-slate-800">
            {{ farm.crop }}
          </p>
        </div>

        <div class="rounded-2xl bg-slate-50 p-5">
          <p class="text-sm text-slate-500">
            مساحت
          </p>

          <p class="mt-2 font-bold text-slate-800">
            {{ farm.area }}
          </p>
        </div>

        <div class="rounded-2xl bg-slate-50 p-5">
          <p class="text-sm text-slate-500">
            شهر
          </p>

          <p class="mt-2 font-bold text-slate-800">
            {{ farm.city }}
          </p>
        </div>

        <div
          v-if="farm.province"
          class="rounded-2xl bg-slate-50 p-5"
        >
          <p class="text-sm text-slate-500">
            استان
          </p>

          <p class="mt-2 font-bold text-slate-800">
            {{ farm.province }}
          </p>
        </div>
      </div>

      <!-- Description -->
      <div
        v-if="farm.description"
        class="border-t border-slate-200 p-5 sm:p-8"
      >
        <p class="text-sm text-slate-500">
          توضیحات
        </p>

        <p class="mt-2 leading-7 text-slate-700">
          {{ farm.description }}
        </p>
      </div>

      <!-- Actions -->
      <div
        class="flex flex-col gap-3 border-t border-slate-200 p-5 sm:flex-row sm:justify-end sm:p-8"
      >
        <RouterLink
          :to="`/dashboard/edit-farm/${farm.id}`"
          class="w-full sm:w-auto"
        >
          <button
            type="button"
            class="w-full rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700 sm:w-auto"
          >
            ویرایش مزرعه
          </button>
        </RouterLink>

        <RouterLink
          to="/dashboard/farms"
          class="w-full sm:w-auto"
        >
          <button
            type="button"
            class="w-full rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 sm:w-auto"
          >
            بازگشت
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useFarmStore } from "@/stores/farmStore";

const route = useRoute();
const farmStore = useFarmStore();

const farm = computed(() => {
  return farmStore.getFarmById(route.params.id);
});
</script>