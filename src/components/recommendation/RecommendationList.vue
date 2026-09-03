<template>
  <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
    <RecommendationCard
      v-for="item in recommendationStore.recommendations"
      :key="item.id"
      :recommendation="item"
    />
  </div>
</template>

<script setup>
import RecommendationCard from "./RecommendationCard.vue";
import { useRecommendationStore } from "@/stores/recommendationStore";

const recommendationStore = useRecommendationStore();
</script>