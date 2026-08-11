<template>
  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div
      class="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-7 text-white shadow-2xl sm:p-10 lg:p-12"
    >
      <div class="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
        <div
          v-for="item in stats"
          :key="item.title"
          class="text-center"
        >
          <h2
            class="text-3xl font-extrabold sm:text-4xl lg:text-5xl"
          >
            {{ item.number }}
          </h2>

          <h3 class="mt-3 text-base font-bold sm:text-xl">
            {{ item.title }}
          </h3>

          <p
            class="mt-2 text-xs leading-6 text-green-100 sm:text-sm sm:leading-7"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    number: "500+",
    title: "مزرعه فعال",
    description: "ثبت و مدیریت شده در سامانه",
  },
  {
    number: "1200+",
    title: "کاربر فعال",
    description: "کشاورزان و مدیران مزارع",
  },
  {
    number: "98%",
    title: "رضایت کاربران",
    description: "براساس نظرسنجی مشتریان",
  },
  {
    number: "24/7",
    title: "پشتیبانی",
    description: "در تمام ساعات شبانه‌روز",
  },
];
</script>