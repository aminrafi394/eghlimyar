<template>
  <div
    dir="rtl"
    class="flex min-h-[calc(100vh-120px)] items-center justify-center py-8"
  >
    <div class="w-full max-w-lg">

      <!-- Receipt -->
      <div class="overflow-hidden rounded-3xl bg-white shadow-xl">

        <!-- Success Header -->
        <div class="bg-green-600 px-6 py-8 text-center text-white">

          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-lg"
          >
            ✓
          </div>

          <h1 class="mt-5 text-2xl font-extrabold">
            پرداخت با موفقیت انجام شد
          </h1>

          <p class="mt-2 text-sm text-green-100">
            تراکنش شما با موفقیت ثبت شد
          </p>

        </div>

        <!-- Amount -->
        <div class="border-b border-dashed border-slate-200 px-6 py-7 text-center">

          <p class="text-sm text-slate-500">
            مبلغ پرداختی
          </p>

          <div class="mt-2">
            <span class="text-4xl font-extrabold text-slate-800">
              {{ formatAmount(payment?.amount||0) }}
            </span>

            <span class="mr-2 text-sm text-slate-500">
              تومان
            </span>
          </div>

        </div>

        <!-- Details -->
        <div class="space-y-5 px-6 py-7">

          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-500">
              شماره پیگیری
            </span>

            <span class="font-mono font-semibold text-slate-800">
               {{ payment?.trackingCode || "---" }} 
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-500">
              شناسه تراکنش
            </span>

            <span class="font-mono font-semibold text-slate-800">
              #{{ payment?.id || "---" }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-500">
              شماره کارت
            </span>

            <span
              dir="ltr"
              class="font-mono font-semibold text-slate-800"
            >
              {{ payment?.card || "---" }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-500">
              تاریخ
            </span>

            <span class="font-medium text-slate-800">
              {{ payment?.date || "---" }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-500">
              ساعت
            </span>

            <span class="font-medium text-slate-800">
              {{ payment?.time || "---" }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-500">
              وضعیت
            </span>

            <span
              class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
            >
              پرداخت موفق
            </span>
          </div>

        </div>

        <!-- Footer -->
        <div class="border-t border-slate-100 bg-slate-50 px-6 py-6">

          <p class="mb-4 text-center text-sm text-slate-500">
            بازگشت خودکار به صفحه اصلی در
            <span class="font-bold text-green-600">
              {{ countdown }}
            </span>
            ثانیه
          </p>

          <button
            type="button"
            class="w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700"
            @click="goHome"
          >
            بازگشت به سایت
          </button>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { computed,onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute,useRouter } from "vue-router";
import { usePaymentStore } from '@/stores/paymentStore'

const route = useRoute()
const router = useRouter();

const paymentStore = usePaymentStore()

const countdown = ref(15);


const payment = computed(() => {
  return (
    paymentStore.getPayments.find(
      (item) => String(item.id) === String(route.query.id)
    ) || {
      id: "-",
      amount: 0,
      trackingCode: "-",
      card: "-",
      date: "-",
      time: "-",
      status: "-"
    }
  );
});

let countdownInterval = null;

const formatAmount = (amount) => {
  return new Intl.NumberFormat("fa-IR").format(amount);
};

const goHome = () => {
  router.push("/dashboard");
};

onMounted(() => {
  countdownInterval = setInterval(() => {
    countdown.value--;

    if (countdown.value <= 0) {
      clearInterval(countdownInterval);
      goHome();
    }
  }, 1000);
});

onBeforeUnmount(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>