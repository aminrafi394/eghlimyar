import { defineStore } from "pinia";

export const useRecommendationStore = defineStore("recommendations", {
  state: () => ({
    recommendations: [
      {
        id: 1,
        title: "آبیاری مزرعه",
        description:
          "به دلیل افزایش دما، امروز آبیاری در ساعات عصر انجام شود.",
        priority: "زیاد",
        farm: "مزرعه گندم",
        crop: "گندم",
        expertName: "کارشناس کشاورزی",
        createdAt: "۱۴۰۵/۰۵/۳۰",
        status: "new",
      },
      {
        id: 2,
        title: "کوددهی",
        description:
          "برای افزایش رشد محصول از کود نیتروژن استفاده کنید.",
        priority: "متوسط",
        farm: "مزرعه شماره ۲",
        crop: "ذرت",
        expertName: "کارشناس کشاورزی",
        createdAt: "۱۴۰۵/۰۵/۲۹",
        status: "new",
      },
      {
        id: 3,
        title: "هشدار باد",
        description:
          "سرعت باد فردا افزایش پیدا می‌کند، تجهیزات را بررسی کنید.",
        priority: "بالا",
        farm: "مزرعه گندم",
        crop: "گندم",
        expertName: "کارشناس کشاورزی",
        createdAt: "۱۴۰۵/۰۵/۲۸",
        status: "warning",
      },
      {
        id: 4,
        title: "کنترل آفات",
        description:
          "وضعیت برگ‌ها را برای تشخیص آفات بررسی کنید.",
        priority: "کم",
        farm: "مزرعه شماره ۲",
        crop: "ذرت",
        expertName: "کارشناس کشاورزی",
        createdAt: "۱۴۰۵/۰۵/۲۷",
        status: "done",
      },
    ],
  }),

  getters: {
    totalRecommendations: (state) => state.recommendations.length,

    newRecommendations: (state) =>
      state.recommendations.filter(
        (item) => item.status === "new"
      ).length,

    warningRecommendations: (state) =>
      state.recommendations.filter(
        (item) => item.status === "warning"
      ).length,

    doneRecommendations: (state) =>
      state.recommendations.filter(
        (item) => item.status === "done"
      ).length,

    getRecommendationById: (state) => (id) =>
      state.recommendations.find(
        (item) => String(item.id) === String(id)
      ),
  },

  actions: {
    addRecommendation(recommendation) {
      this.recommendations.unshift({
        id: Date.now(),
        title: recommendation.title,
        description: recommendation.description,
        priority: recommendation.priority,
        farm: recommendation.farm,
        crop: recommendation.crop,
        expertName:
          recommendation.expertName || "کارشناس کشاورزی",
        createdAt:
          recommendation.createdAt ||
          new Date().toLocaleDateString("fa-IR"),
        status: "new",
      });
    },
  },
});