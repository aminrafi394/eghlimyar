<template>
  <div class="space-y-8">

    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">
        پرداخت‌ها
      </h1>

      <p class="mt-2 text-slate-500">
        لیست تراکنش‌های شما
      </p>
    </div>

    <PaymentCard />

    <PaymentTable />

  </div>
</template>

<script setup>
import PaymentCard from "@/components/payment/PaymentCard.vue";
import PaymentTable from "@/components/payment/PaymentTable.vue";
</script>