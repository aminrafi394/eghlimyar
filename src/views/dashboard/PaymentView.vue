<template>
  <div class="space-y-8">

    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">
        پرداخت جدید
      </h1>

      <p class="mt-2 text-slate-500">
        ثبت پرداخت جدید
      </p>
    </div>

    <PaymentForm />

  </div>
</template>

<script setup>
import PaymentForm from "@/components/payment/PaymentForm.vue";
</script>