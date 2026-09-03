```vue
<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
  >
    <div
      class="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between"
    >

      <!-- Farm Info -->
      <div class="flex min-w-0 items-center gap-4">

        <!-- Icon -->
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl sm:h-16 sm:w-16 sm:text-3xl"
        >
          🌾
        </div>

        <!-- Name & City -->
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-3">
            <h3 class="truncate text-lg font-bold text-slate-800 sm:text-xl">
              {{ farm.name }}
            </h3>

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

          <p class="mt-1 text-sm text-slate-500">
            {{ farm.city }}
          </p>
        </div>
      </div>

      <!-- Information -->
      <div
        class="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2 lg:flex lg:items-center lg:gap-10 lg:border-0 lg:pt-0"
      >
        <div>
          <p class="text-xs text-slate-400">
            محصول
          </p>

          <p class="mt-1 font-semibold text-slate-800">
            {{ farm.crop }}
          </p>
        </div>

        <div>
          <p class="text-xs text-slate-400">
            مساحت
          </p>

          <p class="mt-1 font-semibold text-slate-800">
            {{ farm.area }}
          </p>
        </div>
      </div>

      <!-- Actions -->
      <div
        class="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row lg:w-auto lg:shrink-0 lg:border-0 lg:pt-0"
      >

        <!-- مشاهده -->
        <RouterLink
          :to="`/dashboard/farms/${farm.id}`"
          class="w-full sm:flex-1 lg:w-auto"
        >
          <button
            class="w-full rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
          >
            مشاهده
          </button>
        </RouterLink>

        <!-- ویرایش -->
        <RouterLink
          :to="`/dashboard/edit-farm/${farm.id}`"
          class="w-full sm:flex-1 lg:w-auto"
        >
          <button
            class="w-full rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            ویرایش
          </button>
        </RouterLink>

        <!-- حذف -->
        <button
          type="button"
          @click="handleDelete"
          class="w-full rounded-xl border border-red-200 bg-red-50 px-5 py-3 font-medium text-red-600 transition hover:bg-red-100 sm:flex-1 lg:w-auto"
        >
          حذف
        </button>

      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useFarmStore } from "@/stores/farmStore";

const props = defineProps({
  farm: {
    type: Object,
    required: true,
  },
});

const farmStore = useFarmStore();

const handleDelete = () => {
  const confirmed = window.confirm(
    `آیا مطمئن هستید که می‌خواهید «${props.farm.name}» را حذف کنید؟`
  );

  if (!confirmed) return;

  farmStore.deleteFarm(props.farm.id);
};
</script>