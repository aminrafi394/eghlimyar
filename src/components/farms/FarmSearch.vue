<template>
  <div class="relative w-full">
    <input
      v-model="search"
      type="text"
      placeholder="جستجو بر اساس نام مزرعه..."
      class="w-full rounded-xl border border-slate-300 bg-white py-3 pr-12 pl-4 text-sm outline-none transition focus:border-green-600"
    />

    <Search
      class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
      :size="20"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Search } from "lucide-vue-next";

const emit = defineEmits(["update:modelValue"]);

const search = ref("");

watch(search, (value) => {
  emit("update:modelValue", value);
});
</script>