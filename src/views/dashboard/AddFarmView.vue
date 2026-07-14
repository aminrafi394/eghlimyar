<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">افزودن مزرعه</h1>

      <p class="mt-2 text-slate-500">اطلاعات مزرعه جدید را وارد کنید.</p>
    </div>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <FarmForm />

      <FarmActions />
    </div>
  </div>
</template>

<script setup>
import FarmForm from '@/components/farms/FarmForm.vue'
import FarmActions from '@/components/farms/FarmActions.vue'
</script>
