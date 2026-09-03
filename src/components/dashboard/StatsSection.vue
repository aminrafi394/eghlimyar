<template>
  <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
    <!-- مزارع -->
    <StatCard
      title="تعداد مزارع"
      :value="farmStore.farms.length"
      change="مزرعه ثبت شده"
      :positive="true"
      :icon="Trees"
      iconBackground="bg-green-600"
    />

    <!-- گزارش‌ها -->
    <StatCard
      title="گزارش‌ها"
      :value="reportStore.reports.length"
      change="گزارش ثبت شده"
      :positive="true"
      :icon="FileText"
      iconBackground="bg-blue-600"
    />

    <!-- پرداخت‌ها -->
    <StatCard
      title="پرداخت‌ها"
      :value="paymentStore.getPayments.length"
      change="پرداخت ثبت شده"
      :positive="true"
      :icon="CreditCard"
      iconBackground="bg-orange-500"
    />

    <!-- توصیه‌ها -->
    <StatCard
      title="توصیه‌ها"
      :value="recommendationStore.totalRecommendations"
      change="توصیه ثبت شده"
      :positive="true"
      :icon="Lightbulb"
      iconBackground="bg-purple-600"
    />
  </section>
</template>

<script setup>
import StatCard from "./StatCard.vue";

import {
  Trees,
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
</script>