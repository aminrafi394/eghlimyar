<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="text-slate-500">
          پرداخت این ماه
        </p>

        <h2 class="mt-3 text-3xl font-bold text-green-600 sm:text-4xl">
          {{ formattedMonthlyAmount }}
        </h2>

        <p class="mt-1 text-xs text-slate-400">
          مجموع پرداخت‌های موفق
        </p>
      </div>

      <div
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-3xl sm:h-16 sm:w-16 sm:text-4xl"
      >
        💳
      </div>
    </div>

    <div class="mt-6">
      <span
        class="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
      >
        {{ successfulPaymentsCount }} پرداخت موفق
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePaymentStore } from "@/stores/paymentStore";

const paymentStore = usePaymentStore();

const monthlyAmount = computed(() => {
  return paymentStore.getPayments
    .filter((payment) => payment.status === "پرداخت شده")
    .reduce((total, payment) => total + Number(payment.amount || 0), 0);
});

const successfulPaymentsCount = computed(() => {
  return paymentStore.getPayments.filter(
    (payment) => payment.status === "پرداخت شده",
  ).length;
});

const formattedMonthlyAmount = computed(() => {
  return `${new Intl.NumberFormat("fa-IR").format(monthlyAmount.value)} تومان`;
});
</script>