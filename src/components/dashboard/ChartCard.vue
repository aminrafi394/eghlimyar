<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <!-- Header -->
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-lg font-bold text-slate-800">
          آمار تولید هفتگی
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          میزان تولید در ۷ روز گذشته
        </p>
      </div>

      <span
        class="shrink-0 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600"
      >
        ۷ روز گذشته
      </span>
    </div>

    <!-- Chart -->
    <div class="h-[260px] w-full sm:h-[300px]">
      <VueApexCharts
        type="line"
        height="100%"
        width="100%"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import VueApexCharts from "vue3-apexcharts";

import { useDashboardStore } from "@/stores/dashboardStore";

const dashboardStore = useDashboardStore();

const weeklyProduction = computed(
  () => dashboardStore.weeklyProduction
);

const series = computed(() => [
  {
    name: "تولید",
    data: weeklyProduction.value.map((item) => item.value),
  },
]);

const chartOptions = computed(() => ({
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    fontFamily: "Vazirmatn, sans-serif",
    parentHeightOffset: 0,
  },

  stroke: {
    curve: "smooth",
    width: 4,
  },

  markers: {
    size: 5,
    strokeWidth: 3,
    hover: {
      size: 7,
    },
  },

  xaxis: {
    categories: weeklyProduction.value.map(
      (item) => item.day
    ),

    labels: {
      style: {
        fontFamily: "Vazirmatn, sans-serif",
        fontSize: "12px",
      },
    },

    axisBorder: {
      show: false,
    },

    axisTicks: {
      show: false,
    },
  },

  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,

    labels: {
      formatter: (value) => `${Math.round(value)}٪`,

      style: {
        fontFamily: "Vazirmatn, sans-serif",
        fontSize: "12px",
      },
    },
  },

  grid: {
    borderColor: "#e2e8f0",
    strokeDashArray: 4,
  },

  tooltip: {
    y: {
      formatter: (value) => `${value}٪`,
    },
  },

  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },

  colors: ["#16a34a"],

  responsive: [
    {
      breakpoint: 640,
      options: {
        markers: {
          size: 4,
        },

        xaxis: {
          labels: {
            style: {
              fontSize: "10px",
            },
          },
        },

        yaxis: {
          labels: {
            style: {
              fontSize: "10px",
            },
          },
        },
      },
    },
  ],
}));
</script>