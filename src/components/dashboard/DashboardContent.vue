<template>
  <section class="space-y-6">

    <!-- Stats -->
    <div>
      <StatsSection />
    </div>

    <!-- Analytics + Weather -->
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">

      <!-- Production Chart -->
      <div class="min-w-0 xl:col-span-2">
        <ChartCard />
      </div>

      <!-- Weather -->
      <div class="min-w-0">
        <WeatherCard />
      </div>

    </div>

    <!-- Farms + Recent Activity -->
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">

      <!-- Farms -->
      <div class="min-w-0 xl:col-span-2">
        <FarmTable />
      </div>

      <!-- Activity -->
      <div class="min-w-0">
        <RecentActivity />
      </div>

    </div>

    <!-- Latest Reports -->
    <div>
      <LatestReports />
    </div>

  </section>
</template>

<script setup>
import StatsSection from "./StatsSection.vue";
import ChartCard from "./ChartCard.vue";
import WeatherCard from "./WeatherCard.vue";
import FarmTable from "./FarmTable.vue";
import LatestReports from "./LatestReports.vue";
import RecentActivity from "./RecentActivity.vue";
</script>