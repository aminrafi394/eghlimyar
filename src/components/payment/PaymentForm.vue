<template>
  <form class="rounded-2xl bg-white p-6 shadow-sm space-y-5">

    <div>
      <label class="mb-2 block font-medium">
        مبلغ
      </label>

      <input
        type="number"
        class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-green-600 outline-none"
      >
    </div>

    <div>
      <label class="mb-2 block font-medium">
        توضیحات
      </label>

      <textarea
        rows="4"
        class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-green-600 outline-none"
      ></textarea>
    </div>

    <button
      class="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
    >
      پرداخت
    </button>

  </form>
</template>

<script setup>
</script>