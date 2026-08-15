<template>
  <div class="space-y-8">

    <!-- Header -->
    <div
      class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-3xl font-extrabold text-slate-800">
          پرداخت‌ها
        </h1>

        <p class="mt-2 text-slate-500">
          لیست تراکنش‌های شما
        </p>
      </div>

      <!-- New Payment Button -->
      <RouterLink
        to="/dashboard/payment"
        class="w-full md:w-auto"
      >
        <button
          type="button"
          class="w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 md:w-auto"
        >
          + پرداخت جدید
        </button>
      </RouterLink>
    </div>

    <!-- Payment Summary -->
    <PaymentCard />

    <!-- Payment History -->
    <PaymentTable />

  </div>
</template>

<script setup>
import PaymentCard from "@/components/payment/PaymentCard.vue";
import PaymentTable from "@/components/payment/PaymentTable.vue";
</script>