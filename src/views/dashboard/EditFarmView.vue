<template>
  <div class="space-y-8">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">
        ویرایش مزرعه
      </h1>

      <p class="mt-2 text-slate-500">
        اطلاعات مزرعه را ویرایش کنید.
      </p>
    </div>

    <!-- Form Card -->
    <div
      class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <FarmForm />

      <FarmActions />
    </div>
  </div>
</template>

<script setup>
import FarmForm from "@/components/farms/FarmForm.vue";
import FarmActions from "@/components/farms/FarmActions.vue";
</script>