import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    productionWeekly: [
      { id: 1, day: "شنبه", value: 65 },
      { id: 2, day: "یکشنبه", value: 82 },
      { id: 3, day: "دوشنبه", value: 48 },
      { id: 4, day: "سه‌شنبه", value: 90 },
      { id: 5, day: "چهارشنبه", value: 72 },
      { id: 6, day: "پنجشنبه", value: 55 },
      { id: 7, day: "جمعه", value: 95 },
    ],

    loading: false,
    error: null,
  }),

  getters: {
    weeklyProduction: (state) => state.productionWeekly,
  },

  actions: {
    setWeeklyProduction(data) {
      this.productionWeekly = data;
    },

    setLoading(value) {
      this.loading = value;
    },

    setError(error) {
      this.error = error;
    },
  },
});