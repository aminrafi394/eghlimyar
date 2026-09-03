<template>
  <div dir="rtl" class="space-y-6">
    <div>
      <h1 class="text-2xl font-extrabold text-slate-800 sm:text-3xl">
        جزئیات توصیه
      </h1>

      <p class="mt-2 text-sm text-slate-500 sm:text-base">
        اطلاعات کامل توصیه کارشناس
      </p>
    </div>

    <div
      v-if="recommendation"
      class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <div class="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-xl font-bold text-slate-800 sm:text-2xl">
            {{ recommendation.title }}
          </h2>

          <p class="mt-2 text-sm text-slate-500">
            ثبت شده توسط {{ recommendation.expertName }}
          </p>
        </div>

        <span
          class="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
        >
          {{ recommendation.priority }}
        </span>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="rounded-xl bg-slate-50 p-4">
          <p class="text-sm text-slate-400">مزرعه</p>
          <p class="mt-1 font-bold text-slate-700">
            {{ recommendation.farm }}
          </p>
        </div>

        <div class="rounded-xl bg-slate-50 p-4">
          <p class="text-sm text-slate-400">محصول</p>
          <p class="mt-1 font-bold text-slate-700">
            {{ recommendation.crop }}
          </p>
        </div>

        <div class="rounded-xl bg-slate-50 p-4">
          <p class="text-sm text-slate-400">کارشناس</p>
          <p class="mt-1 font-bold text-slate-700">
            {{ recommendation.expertName }}
          </p>
        </div>

        <div class="rounded-xl bg-slate-50 p-4">
          <p class="text-sm text-slate-400">تاریخ</p>
          <p class="mt-1 font-bold text-slate-700">
            {{ recommendation.createdAt }}
          </p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-bold text-slate-800">
          توضیحات کارشناس
        </h3>

        <div
          class="mt-3 rounded-xl bg-slate-50 p-5 text-sm leading-8 text-slate-600 sm:text-base"
        >
          {{ recommendation.description }}
        </div>
      </div>
    </div>

    <div
      v-else
      class="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
    >
      <p class="text-slate-500">
        توصیه موردنظر پیدا نشد.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useRecommendationStore } from "@/stores/recommendationStore";

const route = useRoute();
const recommendationStore = useRecommendationStore();

const recommendation = computed(() =>
  recommendationStore.getRecommendationById(route.params.id)
);
</script>