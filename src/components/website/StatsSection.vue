<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

    <div
      class="rounded-[32px] bg-gradient-to-r from-green-600 to-emerald-600 p-10 text-white shadow-2xl"
    >

      <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">

        <div
          v-for="item in stats"
          :key="item.title"
          class="text-center"
        >

          <h2 class="text-4xl font-extrabold md:text-5xl">
            {{ item.number }}
          </h2>

          <h3 class="mt-4 text-xl font-bold">
            {{ item.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-green-100">
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