<template>
  <div
    class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
  >
    <div class="flex items-center justify-between">

      <div>

        <p class="text-slate-500 text-sm">
          {{ title }}
        </p>

        <h2 class="text-3xl font-extrabold text-slate-800 mt-3">
          {{ value }}
        </h2>

        <p
          class="text-sm mt-4 font-medium"
          :class="positive ? 'text-green-600' : 'text-red-500'"
        >
          {{ change }}
        </p>

      </div>

      <div
        class="w-16 h-16 rounded-2xl flex items-center justify-center"
        :class="iconBackground"
      >
        <component
          :is="icon"
          :size="30"
          class="text-white"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  change: String,
  positive: Boolean,
  icon: Object,
  iconBackground: String,
});
</script>