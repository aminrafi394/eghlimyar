<template>
  <div class="space-y-8">

    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">
        وضعیت آب و هوا
      </h1>

      <p class="mt-2 text-slate-500">
        مشاهده وضعیت فعلی و پیش‌بینی آب و هوا
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <WeatherCard />
      <AirQualityCard />
    </div>

    <WeatherChart />

    <ForecastCard />

  </div>
</template>

<script setup>
import WeatherCard from "@/components/weather/WeatherCard.vue";
import ForecastCard from "@/components/weather/ForecastCard.vue";
import AirQualityCard from "@/components/weather/AirQualityCard.vue";
import WeatherChart from "@/components/weather/WeatherChart.vue";
</script>