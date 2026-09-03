<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h2 class="text-lg font-bold text-slate-800">فعالیت‌های اخیر</h2>
        <p class="mt-1 text-sm text-slate-500">
          آخرین فعالیت‌های ثبت شده
        </p>
      </div>

      <span class="text-sm text-green-600">
        {{ activities.length }} فعالیت
      </span>
    </div>

    <div v-if="activities.length" class="space-y-5">
      <div
        v-for="item in activities"
        :key="item.id"
        class="flex items-start gap-4"
      >
        <!-- Icon -->
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          :class="item.iconBackground"
        >
          <component
            :is="item.icon"
            :size="18"
            :class="item.iconColor"
          />
        </div>

        <!-- Content -->
        <div class="min-w-0 flex-1">
          <h3 class="font-semibold text-slate-700">
            {{ item.title }}
          </h3>

          <p class="mt-1 text-sm text-slate-500">
            {{ item.description }}
          </p>
        </div>

        <!-- Time -->
        <span class="whitespace-nowrap text-xs text-slate-400">
          {{ item.time }}
        </span>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else class="py-10 text-center">
      <p class="font-semibold text-slate-700">
        هنوز فعالیتی ثبت نشده است
      </p>

      <p class="mt-2 text-sm text-slate-500">
        فعالیت‌های جدید در این بخش نمایش داده می‌شوند.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  Sprout,
  FileText,
  CreditCard,
  Lightbulb,
} from "lucide-vue-next";

import { useFarmStore } from "@/stores/farmStore";
import { useReportStore } from "@/stores/reportStore";
import { usePaymentStore } from "@/stores/paymentStore";
import { useRecommendationStore } from "@/stores/recommendationStore";

const farmStore = useFarmStore();
const reportStore = useReportStore();
const paymentStore = usePaymentStore();
const recommendationStore = useRecommendationStore();

const activities = computed(() => {
  const result = [];

  // آخرین مزرعه
  const latestFarm = [...farmStore.farms]
    .sort((a, b) => Number(b.id) - Number(a.id))[0];

  if (latestFarm) {
    result.push({
      id: `farm-${latestFarm.id}`,
      title: "ثبت مزرعه",
      description: `مزرعه «${latestFarm.name}» ثبت شده است.`,
      time: "اخیر",
      icon: Sprout,
      iconBackground: "bg-green-100",
      iconColor: "text-green-600",
      order: Number(latestFarm.id),
    });
  }

  // آخرین گزارش
  const latestReport = [...reportStore.reports]
    .sort((a, b) => Number(b.id) - Number(a.id))[0];

  if (latestReport) {
    result.push({
      id: `report-${latestReport.id}`,
      title: "ثبت گزارش",
      description: `گزارش «${latestReport.title}» ثبت شده است.`,
      time: latestReport.createdAt || "اخیر",
      icon: FileText,
      iconBackground: "bg-blue-100",
      iconColor: "text-blue-600",
      order: Number(latestReport.id),
    });
  }

  // آخرین پرداخت
  const payments = paymentStore.getPayments;

  const latestPayment = [...payments]
    .sort((a, b) => Number(b.id || 0) - Number(a.id || 0))[0];

  if (latestPayment) {
    result.push({
      id: `payment-${latestPayment.id}`,
      title: "پرداخت انجام شد",
      description: `پرداخت ${new Intl.NumberFormat("fa-IR").format(
        Number(latestPayment.amount || 0),
      )} تومان ثبت شده است.`,
      time: latestPayment.date || "اخیر",
      icon: CreditCard,
      iconBackground: "bg-orange-100",
      iconColor: "text-orange-600",
      order: Number(latestPayment.id || 0),
    });
  }

  // آخرین توصیه
  const latestRecommendation = [...recommendationStore.recommendations]
    .sort((a, b) => Number(b.id) - Number(a.id))[0];

  if (latestRecommendation) {
    result.push({
      id: `recommendation-${latestRecommendation.id}`,
      title: "توصیه جدید",
      description: latestRecommendation.title,
      time: latestRecommendation.createdAt || "اخیر",
      icon: Lightbulb,
      iconBackground: "bg-purple-100",
      iconColor: "text-purple-600",
      order: Number(latestRecommendation.id),
    });
  }

  return result
    .sort((a, b) => b.order - a.order)
    .slice(0, 4);
});
</script>