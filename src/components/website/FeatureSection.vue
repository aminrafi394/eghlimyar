<template>
  <section
    class="relative z-20 mx-auto -mt-8 px-4 sm:-mt-12 sm:px-6 lg:-mt-16 lg:px-8"
  >
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-6"
    >
      <div
        v-for="feature in features"
        :key="feature.title"
        class="group rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7 lg:p-6"
      >
        <div
          :class="feature.color"
          class="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl"
        >
          {{ feature.icon }}
        </div>

        <h3
          class="mt-5 text-lg font-bold text-slate-800 sm:text-xl"
        >
          {{ feature.title }}
        </h3>

        <p class="mt-3 text-sm leading-7 text-slate-500">
          {{ feature.description }}
        </p>

        <button
          type="button"
          class="mt-5 text-sm font-bold text-green-600 transition hover:text-green-700"
        >
          مشاهده بیشتر ←
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: "🌱",
    title: "مدیریت مزارع",
    description:
      "ثبت، ویرایش و مدیریت اطلاعات تمامی مزارع به صورت یکپارچه.",
    color: "bg-green-100",
  },
  {
    icon: "☀️",
    title: "پیش‌بینی آب و هوا",
    description:
      "نمایش وضعیت فعلی و پیش‌بینی روزهای آینده برای هر مزرعه.",
    color: "bg-yellow-100",
  },
  {
    icon: "🤖",
    title: "توصیه هوشمند",
    description:
      "دریافت پیشنهادهای تخصصی برای آبیاری، کوددهی و نگهداری.",
    color: "bg-emerald-100",
  },
  {
    icon: "📊",
    title: "گزارش‌های تحلیلی",
    description:
      "بررسی عملکرد مزارع با نمودارها و گزارش‌های دقیق.",
    color: "bg-blue-100",
  },
  {
    icon: "💳",
    title: "پرداخت آنلاین",
    description:
      "مدیریت اشتراک و پرداخت‌ها به صورت سریع و ایمن.",
    color: "bg-orange-100",
  },
];
</script>