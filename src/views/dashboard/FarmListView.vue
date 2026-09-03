```vue
<template>
  <div class="space-y-8">

    <!-- Header -->
    <div
      class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-3xl font-extrabold text-slate-800">
          مدیریت مزارع
        </h1>

        <p class="mt-2 text-slate-500">
          لیست تمام مزارع ثبت شده
        </p>
      </div>

      <RouterLink
        to="/dashboard/add-farm"
        class="w-full md:w-auto"
      >
        <button
          class="w-full rounded-xl bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
        >
          افزودن مزرعه
        </button>
      </RouterLink>
    </div>

    <!-- Search & Filter -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">

      <div class="lg:col-span-2">
        <FarmSearch v-model="search" />
      </div>

      <FarmFilter v-model="status" />

    </div>

    <!-- Farms -->
    <div class="flex flex-col gap-4">

      <FarmCard
        v-for="farm in filteredFarms"
        :key="farm.id"
        :farm="farm"
      />

    </div>

  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useFarmStore } from "@/stores/farmStore";

import FarmCard from "@/components/farms/FarmCard.vue";
import FarmSearch from "@/components/farms/FarmSearch.vue";
import FarmFilter from "@/components/farms/FarmFilter.vue";

const farmStore = useFarmStore();

const search = ref("");
const status = ref("");

const filteredFarms = computed(() => {
  return farmStore.farms.filter((farm) => {
    const matchSearch =
      farm.name.toLowerCase().includes(search.value.toLowerCase()) ||
      farm.crop.toLowerCase().includes(search.value.toLowerCase()) ||
      farm.city.toLowerCase().includes(search.value.toLowerCase());

    const matchStatus =
      status.value === "" || farm.status === status.value;

    return matchSearch && matchStatus;
  });
});
</script>
```
