<template>
  <div
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-slate-200 p-6">
      <div>
        <h2 class="text-lg font-bold text-slate-800">
          مزارع من
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          آخرین مزارع ثبت شده
        </p>
      </div>

      <RouterLink
        to="/dashboard/farms"
        class="text-sm font-medium text-green-600 transition hover:text-green-700"
      >
        مشاهده همه
      </RouterLink>
    </div>

    <!-- Desktop Table -->
    <div class="hidden overflow-x-auto md:block">
      <table class="w-full text-sm">
        <thead class="bg-slate-50">
          <tr>
            <th class="px-6 py-4 text-right font-semibold text-slate-600">
              نام مزرعه
            </th>

            <th class="px-6 py-4 text-right font-semibold text-slate-600">
              محصول
            </th>

            <th class="px-6 py-4 text-right font-semibold text-slate-600">
              مساحت
            </th>

            <th class="px-6 py-4 text-right font-semibold text-slate-600">
              وضعیت
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="farm in displayedFarms"
            :key="farm.id"
            class="border-t border-slate-100 transition hover:bg-slate-50"
          >
            <td class="px-6 py-5 font-medium text-slate-800">
              {{ farm.name }}
            </td>

            <td class="px-6 py-5 text-slate-600">
              {{ farm.crop }}
            </td>

            <td class="px-6 py-5 text-slate-600">
              {{ farm.area }}
            </td>

            <td class="px-6 py-5">
              <span
                class="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                :class="
                  farm.status === 'فعال'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                "
              >
                {{ farm.status }}
              </span>
            </td>
          </tr>

          <!-- Empty State -->
          <tr v-if="displayedFarms.length === 0">
            <td
              colspan="4"
              class="px-6 py-12 text-center"
            >
              <p class="font-semibold text-slate-700">
                هنوز مزرعه‌ای ثبت نشده است
              </p>

              <p class="mt-2 text-sm text-slate-500">
                برای شروع، اولین مزرعه خود را اضافه کنید.
              </p>

              <RouterLink
                to="/dashboard/add-farm"
                class="mt-4 inline-block rounded-xl bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
              >
                افزودن مزرعه
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile -->
    <div class="space-y-3 p-4 md:hidden">
      <div
        v-for="farm in displayedFarms"
        :key="farm.id"
        class="rounded-xl border border-slate-200 p-4"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <h3 class="font-bold text-slate-800">
              {{ farm.name }}
            </h3>

            <p class="mt-1 text-sm text-slate-500">
              {{ farm.crop }}
            </p>
          </div>

          <span
            class="shrink-0 rounded-full px-3 py-1 text-xs font-medium"
            :class="
              farm.status === 'فعال'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            "
          >
            {{ farm.status }}
          </span>
        </div>

        <div class="mt-4 flex items-center justify-between text-sm">
          <span class="text-slate-500">
            مساحت
          </span>

          <span class="font-semibold text-slate-700">
            {{ farm.area }}
          </span>
        </div>
      </div>

      <!-- Mobile Empty State -->
      <div
        v-if="displayedFarms.length === 0"
        class="py-10 text-center"
      >
        <p class="font-semibold text-slate-700">
          هنوز مزرعه‌ای ثبت نشده است
        </p>

        <p class="mt-2 text-sm text-slate-500">
          برای شروع، اولین مزرعه خود را اضافه کنید.
        </p>

        <RouterLink
          to="/dashboard/add-farm"
          class="mt-4 inline-block rounded-xl bg-green-600 px-5 py-2.5 text-sm font-medium text-white"
        >
          افزودن مزرعه
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useFarmStore } from "@/stores/farmStore";

const farmStore = useFarmStore();

const displayedFarms = computed(() => {
  return farmStore.farms.slice(0, 3);
});
</script>