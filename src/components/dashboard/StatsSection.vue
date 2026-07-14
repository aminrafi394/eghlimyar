<template>
  <section
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
  >
    <StatCard
      title="تعداد مزارع"
      value="12"
      change="+2 مزرعه"
      :positive="true"
      :icon="Trees"
      iconBackground="bg-green-600"
    />

    <StatCard
      title="گزارش ها"
      value="34"
      change="+8 گزارش"
      :positive="true"
      :icon="FileText"
      iconBackground="bg-blue-600"
    />

    <StatCard
      title="پرداخت ها"
      value="9"
      change="-1 پرداخت"
      :positive="false"
      :icon="CreditCard"
      iconBackground="bg-orange-500"
    />

    <StatCard
      title="کاربران"
      value="5"
      change="+1 کاربر"
      :positive="true"
      :icon="Users"
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
  Users,
} from "lucide-vue-next";
</script>