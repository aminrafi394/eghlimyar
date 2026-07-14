<template>
  <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
    <RecommendationCard
      v-for="item in recommendations"
      :key="item.id"
      :recommendation="item"
    />
  </div>
</template>

<script setup>
import RecommendationCard from "./RecommendationCard.vue";

const recommendations = [
  {
    id: 1,
    title: "آبیاری مزرعه",
    description: "به دلیل افزایش دما، امروز آبیاری در ساعات عصر انجام شود.",
    priority: "زیاد",
  },
  {
    id: 2,
    title: "کوددهی",
    description: "برای افزایش رشد محصول از کود نیتروژن استفاده کنید.",
    priority: "متوسط",
  },
  {
    id: 3,
    title: "هشدار باد",
    description: "سرعت باد فردا افزایش پیدا می‌کند، تجهیزات را بررسی کنید.",
    priority: "بالا",
  },
  {
    id: 4,
    title: "کنترل آفات",
    description: "وضعیت برگ‌ها را برای تشخیص آفات بررسی کنید.",
    priority: "کم",
  },
];
</script>