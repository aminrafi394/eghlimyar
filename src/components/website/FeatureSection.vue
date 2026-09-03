<template>
  <section class="relative overflow-hidden bg-white py-20 sm:py-24">
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700"
        >
          امکانات اقلیم‌یار
        </span>

        <h2
          class="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          همه‌چیز برای مدیریت هوشمند مزرعه
        </h2>

        <p class="mt-4 text-base leading-8 text-slate-500 sm:text-lg">
          اقلیم‌یار ابزارهای موردنیاز شما را در یک محیط ساده و هوشمند
          در اختیارتان قرار می‌دهد تا مدیریت مزرعه دقیق‌تر و آسان‌تر شود.
        </p>
      </div>

      <!-- Features -->
      <div
        class="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        <article
          v-for="feature in features"
          :key="feature.id"
          class="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-slate-200/50"
        >
          <!-- Icon -->
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white"
          >
            <component :is="feature.icon" :size="22" :stroke-width="1.8" />
          </div>

          <!-- Content -->
          <div class="mt-5">
            <h3 class="text-base font-bold text-slate-800">
              {{ feature.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-500">
              {{ feature.description }}
            </p>
          </div>

          <!-- Small accent -->
          <div
            class="absolute bottom-0 right-6 left-6 h-0.5 origin-right scale-x-0 rounded-full bg-green-600 transition-transform duration-300 group-hover:scale-x-100"
          ></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Sprout,
  CloudSun,
  Lightbulb,
  FileText,
  CreditCard,
} from "lucide-vue-next";

const features = [
  {
    id: 1,
    title: "مدیریت مزارع",
    description:
      "اطلاعات مزارع خود را یکجا ثبت و مدیریت کنید و همیشه دید دقیقی از وضعیت آن‌ها داشته باشید.",
    icon: Sprout,
  },
  {
    id: 2,
    title: "آب و هوا",
    description:
      "وضعیت آب‌وهوا و پیش‌بینی روزهای آینده را برای تصمیم‌گیری بهتر در اختیار داشته باشید.",
    icon: CloudSun,
  },
  {
    id: 3,
    title: "توصیه‌های هوشمند",
    description:
      "بر اساس اطلاعات مزرعه، توصیه‌های کاربردی برای مدیریت بهتر و تصمیم‌گیری دقیق‌تر دریافت کنید.",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "گزارش‌ها",
    description:
      "گزارش‌های مربوط به مزارع خود را ثبت، مشاهده و بررسی کنید و روند فعالیت‌ها را بهتر دنبال کنید.",
    icon: FileText,
  },
  {
    id: 5,
    title: "پرداخت آنلاین",
    description:
      "هزینه خدمات و اشتراک‌ها را به‌صورت سریع و امن از طریق سامانه پرداخت کنید.",
    icon: CreditCard,
  },
];
</script>