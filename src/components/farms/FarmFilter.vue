<template>
  <select
    v-model="selected"
    @change="handleChange"
    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
  >
    <option value="">همه وضعیت‌ها</option>
    <option value="فعال">فعال</option>
    <option value="غیرفعال">غیرفعال</option>
  </select>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const selected = ref("");

const handleChange = () => {
  emit("update:modelValue", selected.value);
};
</script>