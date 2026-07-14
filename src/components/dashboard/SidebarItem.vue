<template>
  <RouterLink
    :to="to"
    class="group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300"
    :class="
      active
        ? 'bg-green-600 text-white shadow-lg'
        : 'text-slate-700 hover:bg-slate-100'
    "
  >
    <span class="font-medium text-sm">
      {{ title }}
    </span>

    <component
      :is="icon"
      :size="20"
      :stroke-width="2"
    />
  </RouterLink>
</template>

<script setup>
defineProps({
  title: String,
  to: String,
  icon: Object,
  active: Boolean,
});
</script>