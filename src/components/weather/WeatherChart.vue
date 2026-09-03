<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <!-- Header -->
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-slate-800">
          تغییرات دما
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          دمای ثبت‌شده در ۷ روز گذشته
        </p>
      </div>

      <span
        class="shrink-0 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600"
      >
        ۷ روز گذشته
      </span>
    </div>

    <!-- Chart -->
    <div class="h-[280px] w-full sm:h-[320px]">
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
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();

const chartData = computed(() => weatherStore.temperatureChart);

const series = computed(() => [
  {
    name: "دما",
    data: chartData.value.map((item) => item.temp),
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
    categories: chartData.value.map((item) => item.day),

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
    min: 15,
    max: 40,
    tickAmount: 5,

    labels: {
      formatter: (value) => `${Math.round(value)}°`,
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
      formatter: (value) => `${value}°`,
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
        chart: {
          height: 260,
        },

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