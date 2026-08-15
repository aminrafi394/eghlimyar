<template>
  <div
    dir="rtl"
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
  >
    <!-- Header -->
    <div
      class="flex flex-col gap-4 border-b border-slate-100 p-5 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h2 class="text-lg font-bold text-slate-800">
          تراکنش‌ها
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          تاریخچه پرداخت‌های شما
        </p>
      </div>

      <!-- Search -->
      <div class="relative w-full md:w-72">
        <input
          v-model="search"
          type="text"
          placeholder="جستجوی تراکنش..."
          class="w-full rounded-xl border border-slate-200 px-4 py-3 pr-10 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
        />

        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        >
          🔍
        </span>
      </div>
    </div>

    <!-- Filters -->
    <div
      class="flex flex-wrap gap-2 border-b border-slate-100 p-5"
    >
      <button
        v-for="filter in filters"
        :key="filter.value"
        type="button"
        class="rounded-xl px-4 py-2 text-sm font-medium transition"
        :class="
          selectedStatus === filter.value
            ? 'bg-green-600 text-white'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        "
        @click="selectedStatus = filter.value"
      >
        {{ filter.label }}
      </button>
    </div>

    <!-- Desktop Table -->
    <div class="hidden overflow-x-auto md:block">
      <table class="min-w-full">
        <thead class="bg-slate-50">
          <tr>
            <th class="px-6 py-4 text-right text-sm font-semibold text-slate-600">
              تراکنش
            </th>

            <th class="px-6 py-4 text-right text-sm font-semibold text-slate-600">
              مبلغ
            </th>

            <th class="px-6 py-4 text-right text-sm font-semibold text-slate-600">
              کارت
            </th>

            <th class="px-6 py-4 text-right text-sm font-semibold text-slate-600">
              تاریخ
            </th>

            <th class="px-6 py-4 text-right text-sm font-semibold text-slate-600">
              وضعیت
            </th>

            <th class="px-6 py-4 text-right text-sm font-semibold text-slate-600">
              عملیات
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="payment in filteredPayments"
            :key="payment.id"
            class="border-t border-slate-100 transition hover:bg-slate-50"
          >
            <!-- Transaction -->
            <td class="px-6 py-5">
              <div>
                <p class="font-semibold text-slate-800">
                  #{{ payment.id }}
                </p>

                <p class="mt-1 text-xs text-slate-400">
                  {{ payment.type }}
                </p>
              </div>
            </td>

            <!-- Amount -->
            <td class="px-6 py-5">
              <span class="font-bold text-slate-800">
                {{ formatAmount(payment.amount) }}
              </span>

              <span class="mr-1 text-xs text-slate-400">
                تومان
              </span>
            </td>

            <!-- Card -->
            <td class="px-6 py-5">
              <span
                dir="ltr"
                class="font-mono text-sm text-slate-600"
              >
                {{ payment.card }}
              </span>
            </td>

            <!-- Date -->
            <td class="px-6 py-5">
              <div>
                <p class="text-sm font-medium text-slate-700">
                  {{ payment.date }}
                </p>

                <p class="mt-1 text-xs text-slate-400">
                  {{ payment.time }}
                </p>
              </div>
            </td>

            <!-- Status -->
            <td class="px-6 py-5">
              <span
                class="inline-flex rounded-full px-3 py-1.5 text-xs font-semibold"
                :class="statusClass(payment.status)"
              >
                {{ payment.status }}
              </span>
            </td>

            <!-- Action -->
            <td class="px-6 py-5">
              <button
                type="button"
                class="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                @click="showDetails(payment)"
              >
                جزئیات
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Cards -->
    <div class="space-y-4 p-4 md:hidden">
      <div
        v-for="payment in filteredPayments"
        :key="payment.id"
        class="rounded-2xl border border-slate-200 p-4"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="font-bold text-slate-800">
              #{{ payment.id }}
            </p>

            <p class="mt-1 text-xs text-slate-400">
              {{ payment.type }}
            </p>
          </div>

          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="statusClass(payment.status)"
          >
            {{ payment.status }}
          </span>
        </div>

        <div class="mt-5 space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-slate-500">
              مبلغ
            </span>

            <span class="font-bold text-slate-800">
              {{ formatAmount(payment.amount) }}
              تومان
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              کارت
            </span>

            <span dir="ltr" class="font-mono">
              {{ payment.card }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              تاریخ
            </span>

            <span>
              {{ payment.date }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              ساعت
            </span>

            <span>
              {{ payment.time }}
            </span>
          </div>
        </div>

        <button
          type="button"
          class="mt-5 w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          @click="showDetails(payment)"
        >
          مشاهده جزئیات
        </button>
      </div>
    </div>

    <!-- Empty -->
    <div
      v-if="filteredPayments.length === 0"
      class="p-12 text-center"
    >
      <div class="text-5xl">
        💳
      </div>

      <h3 class="mt-4 font-bold text-slate-800">
        تراکنشی پیدا نشد
      </h3>

      <p class="mt-2 text-sm text-slate-500">
        با تغییر جستجو یا فیلتر دوباره تلاش کنید.
      </p>
    </div>

    <!-- Details Modal -->
    <div
      v-if="selectedPayment"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      @click.self="selectedPayment = null"
    >
      <div
        class="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl"
      >
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-slate-800">
              جزئیات تراکنش
            </h3>

            <p class="mt-1 text-sm text-slate-400">
              #{{ selectedPayment.id }}
            </p>
          </div>

          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
            @click="selectedPayment = null"
          >
            ×
          </button>
        </div>

        <div class="mt-6 space-y-4">
          <div class="flex justify-between">
            <span class="text-slate-500">
              مبلغ
            </span>

            <span class="font-bold">
              {{ formatAmount(selectedPayment.amount) }}
              تومان
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              نوع پرداخت
            </span>

            <span>
              {{ selectedPayment.type }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              شماره کارت
            </span>

            <span dir="ltr" class="font-mono">
              {{ selectedPayment.card }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              تاریخ
            </span>

            <span>
              {{ selectedPayment.date }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              ساعت
            </span>

            <span>
              {{ selectedPayment.time }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              وضعیت
            </span>

            <span
              class="rounded-full px-3 py-1 text-xs font-semibold"
              :class="statusClass(selectedPayment.status)"
            >
              {{ selectedPayment.status }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-500">
              شماره پیگیری
            </span>

            <span class="font-mono">
              {{ selectedPayment.trackingCode }}
            </span>
          </div>
        </div>

        <button
          type="button"
          class="mt-7 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          @click="selectedPayment = null"
        >
          بستن
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { usePaymentStore } from "@/stores/paymentStore";

const paymentStore = usePaymentStore();
const search = ref("");
const selectedStatus = ref("");

const selectedPayment = ref(null);

const filters = [
  {
    label: "همه",
    value: "",
  },
  {
    label: "موفق",
    value: "پرداخت شده",
  },
  {
    label: "در انتظار",
    value: "در انتظار",
  },
  {
    label: "ناموفق",
    value: "ناموفق",
  },
];

const payments = computed(() => paymentStore.getPayments);

const filteredPayments = computed(() => {
  const query = search.value
    .trim()
    .toLowerCase();

  return payments.value.filter((payment) => {
    const matchesSearch =
      !query ||
      String(payment.id).includes(query) ||
      payment.status.includes(query) ||
      payment.type.includes(query) ||
      payment.card.includes(query);

    const matchesStatus =
      !selectedStatus.value ||
      payment.status === selectedStatus.value;

    return matchesSearch && matchesStatus;
  });
});

const formatAmount = (amount) => {
  return new Intl.NumberFormat("fa-IR").format(amount);
};

const statusClass = (status) => {
  if (status === "پرداخت شده") {
    return "bg-green-100 text-green-700";
  }

  if (status === "در انتظار") {
    return "bg-amber-100 text-amber-700";
  }

  if (status === "ناموفق") {
    return "bg-red-100 text-red-700";
  }

  return "bg-slate-100 text-slate-600";
};

const showDetails = (payment) => {
  selectedPayment.value = payment;
};
</script>