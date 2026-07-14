<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-slate-500">پرداخت این ماه</p>

        <h2 class="mt-3 text-4xl font-bold text-green-600">
          {{ payment.amount }}
        </h2>
      </div>

      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-4xl"
      >
        💳
      </div>
    </div>

    <div class="mt-6">
      <span
        class="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
      >
        {{ payment.status }}
      </span>
    </div>
  </div>
</template>

<script setup>
const payment = {
  amount: "۲,۵۰۰,۰۰۰ تومان",
  status: "پرداخت شده",
};
</script>