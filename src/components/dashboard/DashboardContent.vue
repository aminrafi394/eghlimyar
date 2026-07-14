<template>

<section class="grid grid-cols-1 xl:grid-cols-3 gap-6">

    <div class="xl:col-span-2 space-y-6">

        <StatsSection />

        <ChartCard />

        <FarmTable />

    </div>

    <div class="space-y-6">

        <WeatherCard />

        <LatestReports />

        <RecentActivity />

    </div>

</section>

</template>

<script setup>

import StatsSection from "./StatsSection.vue";
import WeatherCard from "./WeatherCard.vue";
import ChartCard from "./ChartCard.vue";
import FarmTable from "./FarmTable.vue";
import LatestReports from "./LatestReports.vue";
import RecentActivity from "./RecentActivity.vue";

</script>