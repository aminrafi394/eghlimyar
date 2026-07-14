<template>
  <div
    class="flex flex-col-reverse gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end"
  >
    <RouterLink
      to="/dashboard/farms"
      class="w-full sm:w-auto"
    >
      <button
        type="button"
        class="w-full rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 sm:w-auto"
      >
        انصراف
      </button>
    </RouterLink>

    <button
      type="submit"
      class="w-full rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700 sm:w-auto"
    >
      ثبت مزرعه
    </button>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>